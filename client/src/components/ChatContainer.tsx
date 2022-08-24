import React from "react";
import "../stylesheets/ChatContainer.sass";
import ChatHeader from "../components/ChatHeader";
import MatchesDisplay from "../components/MatchesDisplay";
import ChatDisplay from "../components/ChatDisplay";

const ChatContainer: React.FC = () => {
  return (
    <div className="chat-container">
      <ChatHeader />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
