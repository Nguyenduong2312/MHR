import React from 'react'
import './bar.css';
import { VscAccount } from 'react-icons/vsc';
import {Link } from "react-router-dom";

export default function Bar() {
  return (
    <div>
        <div class="bar">
            <div class="bar_logo">
              <Link to="/"><img src="image/logoEHR.png" alt=""/></Link>  
            </div>
            <div class="bar_menu">
                <li><Link to="/dashboard">Dashbooard</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><VscAccount color="white" fontSize={30}/></li>  
            </div>
        </div>
    </div>
  )
}
