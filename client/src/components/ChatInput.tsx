import axios from "axios";
import React, { useState } from "react";

interface ChatInputProps {
  user: {};
  clickedUser: {};
  getUsersMessages: () => Promise<void>;
  getClickedUsersMessages: () => Promise<void>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  user,
  clickedUser,
  getUsersMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState<string>("");
  // @ts-ignore
  const userId = user?.user_id;
  // @ts-ignore
  const clickedUserId = clickedUser?.user_id;

  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      from_userId: userId,
      to_userId: clickedUserId,
      message: textArea,
    };
    try {
      const response = await axios.post("http://localhost:5000/message", {
        message,
      });
      getUsersMessages();
      getClickedUsersMessages();
      setTextArea("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="chat-input__submit" onClick={addMessage}>
        Submit
      </button>
    </div>
  );
};

export default ChatInput;
