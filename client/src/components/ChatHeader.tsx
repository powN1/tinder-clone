import React from "react";
import "../stylesheets/ChatHeader.sass";
import { useCookies } from "react-cookie";

interface ChatHeaderProps {
  user: {};
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logoutUser = () => {
    // @ts-ignore
    removeCookie("UserId", cookies.UserId);
    // @ts-ignore
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          {/* @ts-ignore */}
          <img src={user.url} alt={user.first_name + "profile pic"} />
        </div>
        {/* @ts-ignore */}
        <h3>{user.first_name}</h3>
      </div>
      <i className="log-out-icon" onClick={logoutUser}>
        ⇦
      </i>
    </div>
  );
};

export default ChatHeader;
