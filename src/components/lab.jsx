import React from "react";
import Timer from "./Timer";
import "../App.css"
import { useState } from "react";
import { useRef } from "react";
import Lab_timer from "./lab_timer";
const Lab = () => {
    const[islab,setislab]=useState(false)
    const[time,settime]=useState(0)
    const[timeout,settimeout]=useState(false)
    const [value, setvalue] = useState("")
    const Password = "Sandeep";
    const display = useRef(null);
    const display1 = useRef(null);
    const box1 = useRef(null)
    const box2 = useRef(null)
    const body_display=useRef(null)

    const Go_back=()=>
    {
        body_display.current.style.display="block"
        display1.current.style.display = "block";
        display.current.classList.remove("animation")
        display.current.style.visibility="visible"
        box1.current.classList.remove("box11");
        box2.current.classList.remove("box22");
        display.current.style.display ="block";
        setislab(!islab) 
    }

    const check = () => {
        
        if (value == Password) {
            setislab(!islab)
            display.current.classList.add("animation")
            settime(0)
            setTimeout(() => {
                display.current.style.visibility="hidden"
                display1.current.style.display ="none";
                box1.current.classList.add("box11")
                box2.current.classList.add("box22")    
            }, 1000)
            setTimeout(()=>
            {
                body_display.current.style.display="none"
            },4000)
            setvalue("")
        }
        else {
            alert("wrong password")
            setvalue("")
        }
       
    }
   
    return (
        <>
        <div className="inner_lab" style={{"flexDirection":"column"}}>
          {
            islab ?
            <Lab_timer start_time={0}  given_minute={8} timeout={()=>
                {
                    settimeout(true)
                }}/> :""
          }
            <button className="btn btn-primary" onClick={Go_back}> Go back to Home page</button>
            <h1 className="text-center text-white bg-dark">Wellcome You are in Lab</h1>
        </div>
        <div className="lab" ref={body_display}>
            <div className="box">

                <div className="box1 " ref={box1}></div>
                <div className="d-flex justify-content-center" ref={display} style={{ "zIndex": "11", "margin": "auto" }}>
                    <div className="form pt-5 d-flex justify-content-center" ref={display1} >
                        <h6 className="text-center text-white m-3">Enter Your Lab Password</h6>
                        <input onChange={(e) => {
                            setvalue(e.target.value)
                        }} className="m-2" type="password" value={value} />
                        <button className="btn btn-primary m-auto w-50" onClick={check} > Enter Lab</button>
                    </div>
                </div>
                <div className="box2" ref={box2}>
                   {
                    islab ? "" :
                    <Timer start_time={0} given_minute={5} timeout={()=>
                        {
                            settimeout(true)
                        }}/>
                   }
                </div>
            </div>
        </div>
        {
            timeout ? <div className="default_app">
            <h1 className="display-2 text-center text-danger" style={{"fontWeight":"bolder"}}>Time Out</h1>
            <button className="btn btn-primary" onClick={()=>
            {
                window.location.reload(false)
                setislab(!islab)
                 
            }}>Go to Home page</button>
          </div>:""
        }
        </>
    )
};
export default Lab;