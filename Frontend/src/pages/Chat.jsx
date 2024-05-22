import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messageSent,setMessageSent] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const user = prompt('Enter your chat');
    const roomName = prompt('Enter the room you want to join');
    setUsername(user);
    setRoom(roomName);

    socket.emit('joinRoom', { username: user, room: roomName });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', `${username}: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Chat rooms</h2>
        <ul>
          <li className="mb-2">Room: {room}</li>
        </ul>
      </div>

      {/* Right chat area */}
      <div className="flex flex-col w-3/4 h-screen">
        <header className="bg-gray-600 text-white p-4 text-center text-xl font-semibold">
          <h1>Dev Chat</h1>
        </header>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <ul className='justify-end'>
            {messages.map((msg, index) => (
              <li className='bg-gray-400 m-2 p-2' key={index}>{msg}</li>
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
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
