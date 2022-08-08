import React, { useEffect } from "react";
import "./messenger.css";
import { Conversation } from "../../components/conversation/Conversation";
import Message from "../../components/message/Message"
import Topbar from "../../components/topbar/Topbar";
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { AuthContext } from "../../context/AuthContext";

import { useContext } from "react";

import { useState } from "react";

import axios from "axios"


export const Messenger = () => {

  const [conversation, setConversation] = useState([])

  const {user} = useContext(AuthContext);
  // console.log(user._id);


  useEffect(()=>{

    const getConversations = async()=>{

    
      try {

        const res = await axios.get("/conversations/"+user._id)



        setConversation(res.data);
        
      } catch (err) {
        console.log(err)
      }
    }

    getConversations();

  }, [user._id])


  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />

            {conversation.map((c)=>
            

            
              (<Conversation conversation={c}/>)
            

            )}
           
        
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
            </div>

            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" placeholder="write something..."></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>

          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
};
