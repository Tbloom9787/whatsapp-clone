import React from 'react';
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, Mic } from '@material-ui/icons';
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";

function Chat({ messages }) {
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
               
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat


