import React from 'react'
import { useRouter } from "next/router"; //set active color
import { useState } from 'react'; //useState for nav active or inactive | mobile
import Link from 'next/link';
//icons from react-icons 
import { BiAlignRight } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";

function Navbar() {
    const router = useRouter(); //Router for color on active
    const [active, setActive] = useState(false) //navbar mobile useState
    return (
        <nav className={active ? "mobile-active nav" : "nav anim-enter"}>
            <div className="logo" onClick={()=> setActive(false)}>
               MARAZZA M
            </div>
            <ul>
                <li className={router.pathname == "/" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/">Home</Link>
                </li>
                <li className={router.pathname == "/About" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/About" >About</Link>
                </li>
                <li className={router.pathname == "/Skills" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Skills">Skills</Link>
                </li>
                <li className={router.pathname == "/Projects" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Projects">Projects</Link>
                </li>
                <li className={router.pathname == "/Contact" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Contact">Contact</Link>
                </li>
                <li className='close-btn'>
                    <div className="container-close">
                    <BiXCircle className='bx bx-circle' onClick={()=> setActive(!active)}></BiXCircle>
                    </div>
                </li>
            </ul> 
            <div className="menu-btn">
            <BiAlignRight className='bx bx-menu'  onClick={()=> setActive(!active)}/>
            </div>
        </nav>
    )
}

export default Navbar
