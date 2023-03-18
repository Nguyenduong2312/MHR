import React from 'react'
import './bar.css';
import {Link } from "react-router-dom";
import DropUser from './dropdown';
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
                <li><DropUser></DropUser></li>  

            </div>
        </div>
    </div>
  )
}
