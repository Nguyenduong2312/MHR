import React from 'react'
import {Link } from "react-router-dom";
import './records.css';
import Bar from '../bar/bar';
import Record from './record';

export default function RecordList() {
  return (
    <div>
        <Bar></Bar>
        <div class="recordList">
            <div class="recordList_tag">
                <p class="title">Record List</p>
                <div class="list_record">
                    <Record id='123'></Record>
                    <Record id='124'></Record>

                </div>
            </div>
        </div>

    </div>
  )
}
