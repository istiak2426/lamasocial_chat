import React from 'react'
import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnline">

      <div className="chatOnlineFriend" >
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://media.istockphoto.com/photos/girl-during-a-demonstration-in-the-street-picture-id1385768689?s=612x612"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">john doe</span>
      </div>

      <div className="chatOnlineFriend" >
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://media.istockphoto.com/photos/girl-during-a-demonstration-in-the-street-picture-id1385768689?s=612x612"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">john doe</span>
      </div>
      <div className="chatOnlineFriend" >
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://media.istockphoto.com/photos/girl-during-a-demonstration-in-the-street-picture-id1385768689?s=612x612"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">john doe</span>
      </div>
  
  </div>
  )
}

export default ChatOnline