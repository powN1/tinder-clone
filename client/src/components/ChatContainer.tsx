// @ts-nocheck
import React, { useState } from "react";
import "../stylesheets/ChatContainer.sass";
import ChatHeader from "../components/ChatHeader";
import MatchesDisplay from "../components/MatchesDisplay";
import ChatDisplay from "../components/ChatDisplay";

interface ChatContainerProps {
  user: {};
}

const ChatContainer: React.FC<ChatContainerProps> = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);
  return (
    <div className="chat-container">
      <ChatHeader user={user} />
      <div>
        <button className="option" onClick={() => setClickedUser({})}>
          Matches
        </button>
        <button className="option" disabled={!clickedUser}>
          Chat
        </button>
      </div>
      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
