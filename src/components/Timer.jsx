import React from "react";
import { useState, useEffect } from "react";
const Timer = (props) => {
    const [time, settime] = useState(props.start_time);
    const [outtime,setouttime]=useState(false)
    const [minute, setminute] = useState(0)
    const [minute1, setminute1] = useState(props.given_minute)
    const last_time=props.given_minute - minute;
    if(last_time===0)
    {
        
        props.timeout()
    }
   
    useEffect(() => {
        if(!outtime)
        {
      const  interval = setInterval(() => {
            settime(time + 1)
            if (time == 59) {
                setminute(minute + 1)
                settime(0)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }
    })
    return (
        <div className="timer ">
            <p className="bg-dark" style={{"border":"solid red 2px"}}>{minute} Min : {time} sec</p>
            <p className="bg-dark" style={{"border":"solid red 2px"}}>{props.given_minute - minute}  Minutes Are Left</p>
            <p className="bg-dark" style={{"border":"solid red 2px"}}>Out of {props.given_minute} Minutes</p>
        </div>
    )
};
export default Timer;