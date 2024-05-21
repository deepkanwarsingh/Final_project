
import React, { useState, useEffect } from "react";
import {io} from "socket.io-client";

 const socket = io("http://localhost:3000"); 

 socket.on('connect', () => {
  console.log('Connected to the server');
  console.log(socket.id)
  
});


socket.on('disconnect',()=>{
  console.log('disconnected')
})

const ChatPage = () => {

  // const [room, setRoom] = useState("");

  // const [chatRooms, setChatRooms] = useState([]);
  // const [newRoom, setNewRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  useEffect(() => {
   
    socket.on('message', (msg) => {
    console.log(`Received from server: ${msg}`);
    setMessageReceived(msg)
    
    
    
  });
  }, []);

  const sendMessage = () => {
 
    socket.emit(" message", message);
    
    setMessage(message);
    console.log(message);
    console.log(socket.id)
    
   

  };




  return (
    <div className="flex h-screen">
      {/* Left wala sidebar column */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Chat rooms</h2>
        <ul>
 
        </ul>
      </div>

      {/* Right wala chat column */}
      <div className="flex flex-col w-3/4 h-screen">
        <header className="bg-gray-600 text-white p-4 text-center text-xl font-semibold">
          <h1>Dev Chat</h1>
        </header>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          
          <div className="flex flex-col mb-4">
            <div className="bg-gray-200 p-3 rounded-lg self-start">
              <p>{messageReceived}</p>
            </div>
            <span className="self-start text-xs text-gray-500">

            </span>
          </div>
          <div className="flex flex-col mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg self-end">
              <p>{message}</p>
            </div>
            <span className="self-end text-xs text-gray-500"></span>
          </div>
          

          

        </div>
        <div className="flex p-4 bg-white border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
            // value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;