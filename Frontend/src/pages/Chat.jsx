import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      socket.emit('joinRoom', { username, room });

      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        console.log(message);
      });

      return () => {
        socket.off('message');
      };
    }
  }, [isLoggedIn, username, room]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && room.trim()) {
      setIsLoggedIn(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', `${username}: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {!isLoggedIn ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Join Chat Room</h2>
            <div className="mb-4">
             
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={username}
                placeholder="Enter chat name"
                onChange={(e) => setUsername(e.target.value)}
                
              />
            </div>
            <div className="mb-4">
             
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded hover:bg-gray-700"
            >
              Join
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full">
          {/* Header */}
          <header className="bg-gray-600 text-white p-4 text-center text-xl font-semibold">
            <h1>Dev Chat</h1>
          </header>

          <div className="flex flex-1">
            {/* Left sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-4">
              <h2 className="text-xl font-semibold mb-4">Chat rooms</h2>
              <ul>
                <li className="mb-2">Room: {room}</li>
              </ul>
            </div>

            {/* Right chat area */}
            <div className="flex flex-col w-3/4">
              <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                <ul className="justify-end">
                  {messages.map((msg, index) => (
                    <li className="bg-gray-400 m-2 p-2" key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
              <div className="flex p-4 bg-white border-t border-gray-300">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="bg-black text-white p-2 rounded-lg hover:bg-gray-700"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
