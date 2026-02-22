import React, { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear the input
    inputRef.current.value = '';

    // Update chat history with the user's message
    const newHistory = [...chatHistory, { role: 'user', text: userMessage }];
    setChatHistory(newHistory);

    // Delay 600ms before generating response
    setTimeout(() => {
      generateBotResponse(newHistory);
    }, 600);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center bg-[#D6E6F2] hover:border-2 hover:border-[#303481] rounded-full px-3 py-2"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="SOG-HANI in your services..."
        className="flex-1 bg-transparent border-none text-[#303481] text-sm px-3 py-2 outline-none rounded-full"
      />
      <button
        type="submit"
        className="material-symbols-rounded block bg-[#303481] hover:bg-[#293b81] text-white rounded-full p-2 ml-2"
      >
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;