import React from "react";
import "../stylesheets/ChatHeader.sass";

const ChatHeader = () => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src="" alt="user profile pic" />
        </div>
        <h3>UserName</h3>
      </div>
      <i className="log-out-icon">⇦</i>
    </div>
  );
};

export default ChatHeader;
