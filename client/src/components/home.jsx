import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 

import '../styles/home.css';

export default function Home(props) {
  const [sportTypeList, setSportTypeList] = useState([]);
  const navigate = useNavigate; 

  // Axios call to server for list of sports types
  useEffect(() => {
    axios.get('/sportTypes')
    .then(result => setSportTypeList(result.data))
    .catch(e => {});
  })

  const sportTypes = sportTypeList.map((element, index) => (
    <li key={index} className="buble">
      <h1>{element.name}</h1>
      <h4>{element.description}</h4>
      <button onClick={() => {setSportTypeObj(element); navigate('/schedule');}}>View Schedule</button>
    </li>
  ))

  return (
    <div className="home">
      <h1 className="title">Pick a Sport</h1>
      <ul>
        {sportTypes}
      </ul>
    </div>
  );
};