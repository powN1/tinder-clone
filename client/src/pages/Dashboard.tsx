import "../stylesheets/Dashboard.sass";
import React, { useState } from "react";
import TinderCard from "brian-react-tinder-card";
import ChatContainer from "../components/ChatContainer";

const Dashboard: React.FC = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/oPj4A8u.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Monica Hall",
      url: "https://i.imgur.com/MWAcQRM.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "https://i.imgur.com/wDmRJPc.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/OckVkRo.jpeg",
    },
  ];
  const [lastDirection, setLastDirection] = useState<string>();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection} </p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
