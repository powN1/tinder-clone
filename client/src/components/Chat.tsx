// @ts-nocheck
import React from "react";
import "../stylesheets/Chat.sass";
import { useCookies } from "react-cookie";

interface ChatProps {
  descendingOrderMessages: [];
}

const Chat: React.FC<ChatProps> = ({ descendingOrderMessages }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <div className="chat-display">
      {descendingOrderMessages.map((message, i) => (
        <div key={i}>
          <div
            className={
              message.userId === cookies.UserId
                ? "chat-message-header-user"
                : "chat-message-header"
            }
          >
            <div className="img-container">
              <img src={message.img} alt={message.first_name + " profile"} />
            </div>
            <p>{message.name}</p>
          </div>
          <p className={message.userId === cookies.UserId ? "p-user" : null}>
            {message.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
