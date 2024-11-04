import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import Client from "../Client";

function Sidebar({clients}) {

  return (

    <div className="sidebar">

      <h1 className="CodeOn">Code ON</h1>
      
      <h3>
        Connected
      </h3>
      <div className="clientList">
          {
            clients.map((client)=>(
                <Client key={client.socketId} username={client.username}/>
            ))
          }
      </div>
      <div className="downBtn">
        <button >Copy Code</button>
        <button id="btnLeave">Leave</button>
      </div>
    </div>
  );
}

export default Sidebar;
