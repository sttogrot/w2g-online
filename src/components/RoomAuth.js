import "./css/watchparty.css";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { joinRoom } from './Controller/RoomController';
    //joinRoom(roomid)
	//navigate('/Watchparty/' + roomid)

const RoomAuth = () => {

    const navigate = useNavigate()
    const [redirect, setRedirect]=useState(sessionStorage.getItem('redirect'))
    const [find, setFind]=useState()
    const [rooms, setrooms]=useState([])

    const checker=()=>{
        sessionStorage.removeItem('redirect');
        if(find === undefined)
        {
            console.log('fail')
            navigate('/*')
        }
        else{
            console.log('sucsses')
            joinRoom(redirect)
	        navigate('/Watchparty/' + redirect)
            
        }
    }

    const finder=()=>{
        console.log(redirect)
        const temp = rooms.find((item)=>{
            return item.name == redirect
        })
            console.log(find)
            setFind(temp)
        }
        
    const getRooms=()=>{
        fetch('https://gruppe13.toni-barth.com/rooms/')
          .then((res) =>
        res.json())
          .then((response) => {
            console.log(response.rooms)
            setrooms(response.rooms)
         })
    }


    useEffect(()=>{
        if(redirect===undefined){
         setRedirect(sessionStorage.getItem('redirect'))
        }
        else{
         console.log(redirect)
         getRooms()
        }
    }, [redirect])
 
    useEffect(()=>{
        finder()
    },[rooms])

    useEffect(()=>{
        setTimeout(function () {
            checker()
            }, 500)
    },[find])
  

  return (
    <div></div>
  )
}

export default RoomAuth