import { useEffect, useRef, useState } from "react"
import "../css/navbar.css"
const NavBar = () => {

    const ref = useRef()
    const [disabled, setdisabled]=useState(false)
    const drop=()=>{
        if(document.getElementById("navlinks").className==="navlinks"){
            document.getElementById("navlinks").className="collapse"
            setdisabled(true)
        }else{
            document.getElementById("navlinks").className="navlinks"
            setdisabled(false)
        }
    }

    useEffect(() =>{
        const handleClickOutside = (event)=>{
            if(!ref.current.contains(event.target)){
                if(document.getElementById("navlinks").className ==="collapse"){
                    drop()
                }
                }
        }
        window.addEventListener("mousedown", handleClickOutside)
    },[])


    return ( <div className="navbar">
        <div className="logo"></div>
        <button className="expand" disabled={disabled}  onClick={()=>{drop()}}><i className="fa-solid fa-bars"></i></button>
        <ul id="navlinks" className="navlinks" ref={ref}>
    
            <li className="navlink">Home</li>
            <li className="navlink">About</li>
            <li className="navlink">Services</li>
            <li className="navlink">Cases</li>
            <li className="navlink">Contact us</li>
            <li className="navlink"><button className="specaialsigninbtn"><a href="/signin">Sign in</a></button></li>
            <li className="navlink"><button  className="specialsignupbtn"><a href="/signup">sign up</a> </button></li>
        </ul>
    </div> );
}
 
export default NavBar;