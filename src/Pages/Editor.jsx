import React, { useState , useEffect } from "react";
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';


import "./Editor.css";

import io, { Socket } from 'socket.io-client';


const PORT = 5000;
const socket = io.connect(`http://localhost:${PORT}`);

function Editor() {
  const [code, setCode] = useState("// Start coding here...");

  useEffect(()=>{
    async function init() {
      Codemirror.fromTextArea(document.getElementById('EditorTextArea') , {
        mode : {name : 'javascript' , json : true},
        theme : 'material-darker' , 
        autoCloseTags : true , 
        autoCloseBrackets : true,
        lineNumers : true,
      })
    }
    init();
  } , []);


  useEffect(()=>{
      socket.on("recive_message" , (data)=>{
          const recivedMessage = data.message;
          setCode(recivedMessage);
      })
  } , [socket]);


  const handleCodeChange = (e) => {
    setCode(e.target.value);
    console.log("here");
    socket.emit("send_message" , {message : e.target.value});
  };


  return (
    <div className="editor">
      <textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
        id="EditorTextArea"
      />
    </div>
  );
}

export default Editor;
