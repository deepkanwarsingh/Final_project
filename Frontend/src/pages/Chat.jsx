import React, { useState } from "react";

const ChatPage = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [chatRooms, setChatRooms] = useState(["Room 1", "Room 2", "Room 3"]); 
  const [newRoom, setNewRoom] = useState(""); 

  const joinRoom = () => {
    console.log("Joined room:", room);
  };

  const sendMessage = () => {
    console.log("Message sent:", message);
  };

  const addRoom = () => {
    if (newRoom.trim() !== "") {
      setChatRooms([...chatRooms, newRoom]);
      setNewRoom(""); 
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
    
      <div className="w-1/4 border-r border-gray-200 px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Chat Rooms</h2>
       
        <div className="mb-4">
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3"
            type="text"
            placeholder="Enter new chat room"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={addRoom}
          >
            Create
          </button>
        </div>
        {/* List of chat rooms */}
       
      </div>
      
      {/* Chat Interface */}
      <div className="flex flex-col flex-1 items-center justify-center bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3 flex justify-between items-center w-full">
          <h1 className="text-lg font-bold">Chat Room</h1>
          <button
            className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={joinRoom}
          >
            Join
          </button>
        </div>
        <div className="px-4 py-2 w-full">
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 mb-3"
            placeholder="Type your message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            onClick={sendMessage}
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