import React, { useState, useEffect } from "react";
import io from "socket.io-client";

 const socket = io("http://localhost:5000"); 

const ChatPage = () => {

  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [chatRooms, setChatRooms] = useState([]);
  const [newRoom, setNewRoom] = useState("");

  useEffect(() => {
    // Receive message from server
    socket.on("chat message", (msg) => {
      setMessageReceived(msg);
    });
  }, []);

  const sendMessage = () => {
    // Send message to server
    socket.emit("chat message", message);
    setMessage("");
  };


  return (
    <div className="flex h-screen bg-gray-100">


      {/* Chat Interface */}
      <div className="flex flex-col flex-1 items-center justify-center bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3 flex justify-between items-center w-full">
          <h1 className="text-lg font-bold">DevChat</h1>
       
        </div>
        <div className="px-4 py-2 w-full">
          <input
            className="border border-gray-300 rounded-md w-[1200px] py-2 px-3 mb-3"
            placeholder="Type your message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={setMessage}
          >
            Send
          </button>
        </div>
        <div className="px-4 py-2 border-t border-gray-300 w-full">
          <h2 className="text-lg font-bold mb-2">Chat Log</h2>
          <div className="overflow-y-auto max-h-40">
            <div className="text-gray-700">{messageReceived}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;