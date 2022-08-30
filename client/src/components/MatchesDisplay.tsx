import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../stylesheets/MatchesDisplay.sass";

interface MatchesDisplayProps {
  matches: [];
  setClickedUser: React.Dispatch<React.SetStateAction<{}>>;
}

const MatchesDisplay: React.FC<MatchesDisplayProps> = ({
  matches,
  setClickedUser,
}) => {
  const [matchedProfiles, setMatchedProfiles] = useState([]);

  const matchedUserIds = useRef([]);

  const getMatches = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { userIds: JSON.stringify(matchedUserIds.current) },
      });
      setMatchedProfiles(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (matches) {
      matchedUserIds.current = matches.map(({ user_id }) => user_id);
      getMatches();
    }
  }, [matches]);
  return (
    <div className="matches-display">
      {matchedProfiles?.map((match, i) => (
        <div
          key={i}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            {/* @ts-ignore */}
            <img src={match?.url} alt={match?.first_name + "profile"} />
          </div>
          {/* @ts-ignore */}
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
