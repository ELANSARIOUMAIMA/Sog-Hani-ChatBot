import React from 'react'
import ChatbotIcon from './ChatbotIcon.jsx'

const ChatMessage = ({chat}) => {
  return (
    !chat.hideInChat &&(
    <div className={ chat.role==="model" ?`flex items-start gap-3`:`flex justify-end items-end gap-3 ${chat.isError ? 'error ':''}`}>
        {chat.role==="model" && <ChatbotIcon/>}
            <p className={ chat.role==="model" ?"bg-[#ecf3bb] text-[#303481] px-4 py-2 rounded-t-2xl rounded-br-2xl max-w-full" : " bg-[#bbdafc] text-[#303481] px-4 py-2 rounded-t-2xl rounded-bl-2xl max-w-full"}>
              {chat.text}
            </p>
    </div>
  )
)
}

export default ChatMessage