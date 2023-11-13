import React, { useState, useRef, useEffect } from React;
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NavList from "./navList";
import '../styles/navBar.css';

export default function NavBar(props) {
  const [playerName, setPlayerName] = useState(null);
  const navOptions = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(props.loggedInId) {
      axios.get(`/players/${props.loggedInId}}`)
      .then(result => setPlayerName(result.data[0].first_name))
      .catch(e =>{});
    }
  }, [props.loggedInId]);

  return (
    <nav className="wave">
      <div className="loginDiv">
        <div className="header" onClick={() => navigate('/')}>
          <h1>BrokenIn Sports Centre</h1>
          <img src={require('../images/easyfit-logo.png')} alt='EasyFit' width={"50"} height={"50"}/>
          {props.loggedInId && <h4>Logged in as: {playerName} </h4>}
        </div>
        {props.loggedInId ? <button className="logoutButton" onClick={() => {
        props.logout(); navigate('/'); window.location.reload(false);}}>Logout</button> : <button className="loginButton" onClick={() => navigate('/login')}>Login</button>}
      </div>
      <NavList navOptions={navOptions} />
      <button className="optionsButton" onClick={() => navOptions.current.gameList.toggle('show')}><i className="fa-solid fa-bars fa-2x"></i></button>
    </nav>
  )
}