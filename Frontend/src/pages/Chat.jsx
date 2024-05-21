
import React, { useState, useEffect } from "react";
import {io} from "socket.io-client";

 const socket = io("http://localhost:3000"); 

 
//  socket.on('connect', () => {
//   console.log('Connected to the server');
//   // console.log(socket.id)
//   socket.emit("hi")
  
  
// });
// io.on("connection",(socket)=>{
//   socket.emit("hei")
// })


// socket.on('disconnect',()=>{
//   console.log('disconnected')
// })

// const ChatPage = () => {

//   // const [room, setRoom] = useState("");
//   // const [chatRooms, setChatRooms] = useState([]);
//   // const [newRoom, setNewRoom] = useState("");

//   const [message, setMessage] = useState("");
//   const [messageSent,setMessagesent] =useState([]);
//   const [messageReceived, setMessageReceived] = useState("");

//   // useEffect(() => {
   
//   //   socket.on('message', (msg) => {
//   //   console.log(`Received from server: ${msg}`);
//   //   setMessagesent((prevMessages) => [...prevMessages, { text: msg, sender: "server" }]);
//   //   setMessageReceived(msg)
    
    
//   // });
//   // }, []);
//   useEffect(() => {
//     socket.on('message', (message) => {
//       setMessage((prevMessages) => [...prevMessages, message]);
//       console.log(message)
//     });})

//   const sendMessage = () => {
 
//     // socket.emit(" message", message);
//     // // setMessagesent((prevMessages) => [...prevMessages, { text: message, sender: "me" }]);
//     // // setMessage(message);
//     // console.log(message);
//     // console.log(socket.id)

//     socket.emit('message', message);
//     setMessage('');
    

//   };

  function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        console.log(message)
      });
  
      return () => {
        socket.off('message');
      };
    }, []);
  
    const sendMessage = () => {
      
        socket.emit('message', message);
        setMessage('');
      
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
      {/* <div className="flex flex-col w-3/4 h-screen">
        <header className="bg-gray-600 text-white p-4 text-center text-xl font-semibold">
          <h1>Dev Chat</h1>
        </header>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100 ">
          
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

{messageSent.map((msg, index) => (
    <div
      key={index}
      className={`flex flex-col mb-4 ${msg.sender === "me" ? "items-end" : "items-start"}`}
    >
      <div className={`p-3 rounded-lg ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
        <p>{msg.text}</p>
      </div>
      <span className="text-xs text-gray-500">
        {msg.sender === "me" ? "You" : "Server"}
      </span>
    </div>      
          ))}

          

        </div>
        <div className="flex p-4 bg-white border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
            // value={message}
            // onChange={(e)=>setMessage(e.target.value)}
            
          />
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div> */}

<div className="flex flex-col w-3/4 h-screen">
<div className='flex flex-col h-screen items-center justify-between bg-gray-100 p-4"'>
      
      <h1 className='text-2xl font-bold '>Dev Chat</h1>
      <div className=' m-[2px] p-[2px] h-full  w-full'>
      <ul className='justify-end' >
        {messages.map((msg, index) => (
          

          <li className='bg-gray-400 m-2 p-2' key={index}>{msg}</li>

        ))}
      </ul>
      </div>

      <div className='flex w-full '>
      <input className='border-2 border-black w-full  flex-col'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
        <button className='bg-gray-400 text-black rounded-r-lg p-2 flex-col '
      onClick={sendMessage}>Send</button>
      </div>

    

     
    </div>
    </div>
    </div>
  );
};
export default ChatPage;