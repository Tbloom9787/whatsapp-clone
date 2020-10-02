import React, { useState } from 'react';
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, Mic } from '@material-ui/icons';
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Demo",
            timestamp: "10/1/2020",
            received: false
        });

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name"> {message.name} </span>
                            {message.message}
                        <span className="chat__timestamp"> 
                            {new Date().toUTCString()} 
                        </span> 
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message" 
                        type="text" 
                    />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat


