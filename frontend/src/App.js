import React, {useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import axios from "./axios";
import Pusher from 'pusher-js';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher("952297ec76be6bbfc245", {
      cluster: "us3",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>   
    </div>
  );
}

export default App;
