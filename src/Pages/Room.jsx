import "./styles.css";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { useState } from "react";

export default function Room() {


  
  const [clients , setClients] = useState([
    {socketId : 1 , username : "Harsh"} ,
    {socketId : 2 , username : "Ramesh Kumar"} , 
    {socketId : 3 , username : "Tanish Sachdeva"},
    // {socketId : 3 , username : "Ganish Dachdeva"},
    // {socketId : 3 , username : "Fanish Lachdeva"},
    // {socketId : 3 , username : "Yanish Dachdeva"},
  ]);


  return (
    <div className="app">

      <Sidebar clients={clients} />
      <Editor />
    </div>
  );
}
