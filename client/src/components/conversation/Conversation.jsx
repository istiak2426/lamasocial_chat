import React from 'react'
import { useState } from 'react'
import './conversation.css'

export const Conversation = ({conversation}) => {


  const lol= conversation;
  console.log(lol);

  const [user, setUser] = useState(null)
  

  return (
    <div className="conversation">
    <img
      className="conversationImg"
      src='https://media.istockphoto.com/photos/girl-during-a-demonstration-in-the-street-picture-id1385768689?s=612x612'
      alt=""
    />
    <span className="conversationName">lol</span>
    
  </div>
  
  )
}
