import React, { useState} from "react";
import { MdMailOutline } from "react-icons/md";
import { FaLock ,FaUserAlt} from "react-icons/fa";
import RegisterStyle from "./Register.module.css"
import Navbar from './Navbar'
 import {NavLink} from 'react-router-dom'
import Input from '../Atom/Input';
import Button from '../Atom/Button';


export default function Register(){
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  const[username,setusername]=useState("")
  const[message,setMessage]=useState("")
  const[pwmessage,setPwMessage]=useState("")
  const[uMes,setUMes]=useState("")
  const[data,setData]=useState([])
  const [show,setShow]=useState(false)

   
  function captureemail(e){
    setEmail(e.target.value)
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// validation part through regEx
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== " ") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
    }
    function capturepass(e){
      setpassword(e.target.value)
      const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
  
      if (pwRegEx.test(password)) {
        setPwMessage("pw is Valid");
        } else if (!pwRegEx.test(password) && password !== " ") {
          setPwMessage("pw is Not Valid");
        } else {
          setPwMessage("");
        }
    }
    function captureuser(e){
      setusername(e.target.value)
      const userRegEx= /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/
      
  
      if (userRegEx.test(username)) {
        setUMes("userName is Valid");
      } else if (!userRegEx.test(username) && username !== " ") {
        setUMes("userName is Not Valid");
      } else {
        setUMes("");
      }
  
    }
    function submit(event){
      event.preventDefault()
      if(email === "" || username === "" || password=== ""){
        alert("please enter something")
      }else if(message === "Email is Not Valid" || pwmessage=== "pw is Not Valid" || uMes === "userName is Not Valid"){
        alert("you have enter wrong details")
      }
      else{
    const newUser={Email :email , Username : username , Password : password}
    data.push(newUser)
    setData([...data])
    console.log(data)
  
    if(show=== true){
      setShow(false)
    }else{
      setShow(true)
    }
      }
      localStorage.setItem("list",JSON.stringify(data))
  
      setEmail("")
      setMessage("")
      setpassword("")
      setPwMessage("")
      setUMes("")
      setusername("")
  
    }
      return(
          <>
         <Navbar/>
          <div className={RegisterStyle.wrap}>
          <div className={RegisterStyle.box}>
         {show ? <p style={{backgroundColour : "red" , color :"white"}}>HEY!  YOU HAVE SUCCESSFULLY SIGNED UP</p> : ""}
          <div >
          <label htmlFor="email"><MdMailOutline style={{fontSize:"2em"}}/></label>
          <Input required name="email" className={RegisterStyle.input} placeholder="Email"
           type="email" value={email} onChange={captureemail}/>
          <p className={RegisterStyle.message1}>{message }</p>
          </div>
          <div>
          <label><FaUserAlt style={{fontSize:"2em"}}/></label>
          <Input value={username} onChange={captureuser} className={RegisterStyle.input}  placeholder="Username" type="text"/>
          <p className={RegisterStyle.message}>{uMes}</p>
          </div>
          <div>
          <label><FaLock style={{fontSize:"2em"}}/></label>
          <Input value={password} onChange={capturepass} className={RegisterStyle.input} 
           placeholder="Password" type="password"/>
          <p className={RegisterStyle.password}>{pwmessage}</p>
          <div>
          <br/>
          <div className={RegisterStyle.button}>
          <Button className={RegisterStyle.submit} onClick={submit} text='Submit'/>
          <NavLink className={RegisterStyle.Emoji} to ='/emoji'>😀Emoji</NavLink>
          </div>
          </div>
          </div>
          
          </div>
          
          </div>
          </>
      )
  }
 
         
         