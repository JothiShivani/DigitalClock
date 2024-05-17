import { useEffect } from "react";
import { useState } from "react";
import './digital.css';
function Digital() {
  const [currenttime,setCurrentTime]=useState(new Date());
  function timerInterval(){
    setCurrentTime(new Date());
  }
  useEffect(()=>{
    const timer=setInterval(timerInterval,1000)
    return()=>clearInterval(timer); //optional
  },[])

function formatTimeLeadingWithZero (num){
    return num < 10 ? `0${num}` : num;
  }
  function formathour(hour){
    return hour=== 0 ? 12 : hour > 12 ? hour - 12: hour;
  }
  function formatdate(date){
    const options={weekday:"long", year:"numeric", month:"long", day:"numeric"}
    return date.toLocaleDateString(undefined,options);

  }
    return (
        <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeLeadingWithZero(formathour(currenttime.getHours()))}
          :
           
          {formatTimeLeadingWithZero(currenttime.getMinutes())}
          : 
          {formatTimeLeadingWithZero(currenttime.getSeconds())} 
          {currenttime.getHours()>=12?" PM":" AM"}
        </div>
        <div className="date">{formatdate(currenttime)}</div>
        
      </div>
      </>
    );
  }
  
  export default Digital;
