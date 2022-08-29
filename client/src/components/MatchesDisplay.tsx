import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface MatchesDisplayProps {
  matches: [];
}

const MatchesDisplay: React.FC<MatchesDisplayProps> = ({ matches }) => {
  const [matchedProfiles, setMatchedProfiles] = useState([]);

  const matchedUserIds = useRef([]);

  const getMatches = async () => {
    if (typeof matchedUserIds.current === "undefined") {
      return console.log(`pusty obiekt ${matchedUserIds.current}`);
    }
    console.log(`Niepusty obiekt ${matchedUserIds.current}`);
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
    console.log(matches, matchedUserIds.current);
  }, [matches]);

  return <div className="matches-display"></div>;
};

export default MatchesDisplay;
