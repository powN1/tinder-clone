import React from "react";
import Chat from "../components/Chat";
import ChatInput from "../components/ChatInput";
import "../stylesheets/ChatDisplay.sass";

const ChatDisplay: React.FC = () => {
  return (
    <>
      <Chat />
      <ChatInput />
    </>
  );
};

export default ChatDisplay;
