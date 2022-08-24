import React, { useState } from "react";

const ChatInput: React.FC = () => {
  const [textArea, setTextArea] = useState<string>("");
  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="chat-input__submit">Submit</button>
    </div>
  );
};

export default ChatInput;
