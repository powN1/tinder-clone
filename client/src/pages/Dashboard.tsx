// @ts-nocheck

import "../stylesheets/Dashboard.sass";
import React, { useEffect, useState } from "react";
import TinderCard from "brian-react-tinder-card";
import ChatContainer from "../components/ChatContainer";
import { useCookies } from "react-cookie";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({});
  const [lastDirection, setLastDirection] = useState<string>();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [genderedUsers, setGenderedUsers] = useState([]);
  // @ts-ignore
  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/gendered-users", {
        //@ts-ignore
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const updateMatches = async (matchedUserId: string) => {
    try {
      await axios.put("http://localhost:5000/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getGenderedUsers();
  }, [user]);

  const swiped = (direction: any, swipedUserId: any) => {
    console.log("removing: " + swipedUserId);
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!");
  };
  let matchedUserIds;
  let filteredGenderedUsers = [];
  if ("matches" in user) {
    matchedUserIds = user.matches.map(({ user_id }) => user_id).concat(userId);
  }
  if (genderedUsers.length !== 0) {
    filteredGenderedUsers = genderedUsers.filter(
      (genderedUser) => !matchedUserIds.includes(genderedUser.user_id)
    );
  }

  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {filteredGenderedUsers.map((genderedUser) => (
                <TinderCard
                  className="swipe"
                  key={genderedUser.first_name}
                  onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                  onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
                >
                  <div
                    style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                    className="card"
                  >
                    <h3>{genderedUser.first_name}</h3>
                  </div>
                </TinderCard>
              ))}
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection} </p> : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
