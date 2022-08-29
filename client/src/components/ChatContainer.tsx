import React from "react";
import "../stylesheets/ChatContainer.sass";
import ChatHeader from "../components/ChatHeader";
import MatchesDisplay from "../components/MatchesDisplay";
import ChatDisplay from "../components/ChatDisplay";

interface ChatContainerProps {
  user: {};
}

const ChatContainer: React.FC<ChatContainerProps> = ({ user }) => {
  return (
    <div className="chat-container">
      <ChatHeader user={user} />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      {/* @ts-ignore */}
      <MatchesDisplay matches={user.matches} />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
