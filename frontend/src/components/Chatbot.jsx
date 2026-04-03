import React, { useEffect, useState, useRef, useContext } from "react";
import ChatbotIcon from "./ChatbotIcon.jsx";
import ChatForm from "./ChatForm.jsx";
import ChatMessage from "./ChatMessage.jsx";
import { companyInfo } from "./companyInfo.js";
import { AppContext } from "../context/AppContext.jsx";

const Chatbot = () => {
  const { apiUrl } = useContext(AppContext);
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: companyInfo },
  ]);
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);

  const generateBotResponse = async (history) => {
   
    // Get the last user message
    const lastUserMessage = history.filter(msg => msg.role === "user").pop();
    if (!lastUserMessage) return;

    try {
     
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: lastUserMessage.text }),
      });

      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong!");

       const apiResponseText = `${data.answer}\n\n📚 Sources: Articles ${data.sources.join(", ")}`;

      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: apiResponseText },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: error.message, isError: true },
      ]);
    }
  };

  // Auto-scroll
  useEffect(() => {
    if (showChatbot && chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, showChatbot]);

  return (
    <div className="  fixed  right-0 z-50 flex items-center justify-center w-full max-w-md  min-h-[50vh] bg-gradient-to-r from-[#D6E6F2] to-[#303481] p-4">
      {/* Floating Button */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        aria-label={showChatbot ? "Close Chatbot" : "Open Chatbot"}
        className="fixed bottom-12 right-12 bg-[#F5F5F5] flex items-center justify-center w-16 h-16 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <span className="material-symbols-rounded text-[#303481] text-3xl">
          {showChatbot ? "close" : "mode_comment"}
        </span>
      </button>

      {/* Chatbot Container */}
      <div
  className={`fixed bottom-32 right-12 w-full max-w-md bg-[#F5F5F5] rounded-lg shadow-2xl 
    flex flex-col transform transition-all duration-300 ease-in-out
    ${showChatbot ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}
>
        {/* Header */}
        <div className="flex items-center justify-between bg-[#D6E6F2] px-4 py-3 rounded-t-lg">
          <div className="flex items-center gap-2">
            <ChatbotIcon className="w-8 h-8" />
            <h2 className="text-[#303481] text-xl font-semibold">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot(false)}
            className="material-symbols-rounded h-10 w-10 flex items-center justify-center text-white text-xl rounded-full hover:bg-[#303481] transition"
            aria-label="Minimize Chatbot"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chat Body */}
        <div
          ref={chatBodyRef}
          className="flex flex-col gap-4 p-4 overflow-y-auto scrollbar-custom h-[300px]"
        >
          {/* Initial Message */}
          <div className="flex items-start gap-3">
            <ChatbotIcon className="w-8 h-8" />
            <p className="bg-[#ecf3bb] text-[#303481] px-4 py-2 rounded-t-2xl rounded-br-2xl max-w-full">
              Hi there, we are SOG-HANI 👋 <br /> How can we help you?
            </p>
          </div>

          {/* Dynamic Messages */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Footer */}
        <div className="w-full bg-white p-4 rounded-b-lg">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
