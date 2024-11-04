import React from 'react'

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Container = () => {
//start of snackbar
    const [open, setOpen] = useState(false);
    const [message , setMessage] = useState("");
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const changeMessage = (x)=>{
        setMessage(x);
        setOpen(true);
        return;
    }
//end of snackbar




    const navigate = useNavigate();
    const [state , setState ] = useState({roomID : "", username : ""});


    const newRoomID = ()=>{
        changeMessage("New Room id Created");
        const id = uuidv4();
        setState(()=>{
            return {...state , roomID : id};
        });
        console.log(id);
    }

    const changeState = (e)=>{
        // console.log(e.target.name);
        const name = e.target.name , value = e.target.value;
        setState(()=>{
            return {...state , [name] : value};
        })
    }

    const joinRoom = ()=>{
        if(state.roomID===""||state.username===""){
            changeMessage("username or Room id is not specified");
            return;
        }
        navigate(`/${state.roomID}` , {state : {myParam : state}});
        // console.log( state );
    }
    const checkEnter = (e)=>{
        if(e.code==='Enter'){
            joinRoom();
        }
    }
  return (
    <>
        <h1 className='LOGO'>Code On</h1>
        <div className='container'>

            <input type="text" name='roomID' className='roomID' placeholder='ROOM ID'  value={state.roomID} onChange={changeState} onKeyUp={checkEnter}/>

            <input type="text" name='username' className='username' placeholder='Username' value={state.username} onChange={changeState} onKeyUp={checkEnter}/>

            <button onClick={joinRoom} className='rSIDE'>JOIN ROOM</button>

            
                <a onClick={newRoomID} className='rSIDE'>
                    New ROOM ID
                </a>
                

        </div>
        <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
      />
    </>
  )
}

export default Container
