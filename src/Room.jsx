import { useState ,useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import io, { Socket } from 'socket.io-client';

import Client from "./Client";

const PORT = 5000;
// const socket = io.connect(`http://localhost:${PORT}`);

const Room = () => {

    const location = useLocation();
    const {myParam} = location.state || {};

    const [message , setMessage] = useState("Message");
    const [isLoading , setIsLoading] = useState(false);

    const [clients , setClients] = useState([
      {socketId : 1 , username : "Harsh"} ,
      {socketId : 2 , username : "Ramesh Kumar"} , 
      {socketId : 3 , username : "Tanish Sachdeva"}
    ]);

    const {roomID , username} = myParam;
    console.log(roomID , username);


    // const joinRoom = ()=>{
    //   if(roomID!==""){
    //     socket.emit("join_room" , roomID);
    //   }
    // }
    // joinRoom();
  //   useEffect(()=>{
  //       socket.on("recive_message" , (data)=>{
  //           const recivedMessage = data.message;
  //           setMessage(recivedMessage);
  //           if(isLoading) setIsLoading(false);
  //       })
  //   } , [socket]);



    const changeMessage = (e)=>{
      if(isLoading) return;
      const value = e.target.value;
      setMessage(value);
      // socket.emit("send_message" , {message : value , room : roomID});
    }


  return (

    
    <>

      <div className="mainWrap">

        <div className="aside">
          <div className="asideInner">
            <h1>CODE ON</h1>
            <div className="clientList">
                {
                  clients.map((client)=>(
                      <Client key={client.socketId} username={client.username}/>
                  ))
                }
            </div>

          </div>
          <button className="btn copyBtn">Copy roomID</button>
          <button className="btn leaveBtn">Leave</button>
        </div>
      </div>

        
        {(!isLoading) || <h1>...Loading</h1>}

        <textarea  type="text" value={message} onChange={changeMessage}/>
        
    </>

);
}

export default Room
