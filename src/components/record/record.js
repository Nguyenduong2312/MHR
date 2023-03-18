import React from 'react'
import {Link } from "react-router-dom";
import './records.css';

export default function Record(props) {
  return (
    <div>
        <div class="record">
            <p class="id_record">#{props.id}</p>
            <Link class="button register" to="/record">View</Link>
        </div>
    </div>
  )
}
