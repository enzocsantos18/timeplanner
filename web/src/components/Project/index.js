/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Card, ActionArea } from "./styles";
import {FiPlay, FiPause, FiCheckCircle} from 'react-icons/fi'
import api from '../../services/api'

function Project({name, category, id}) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }
  var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };
  var interval = null;
  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  async function handleStop(id) {
    clearInterval(interval);

    const res = window.confirm("Deseja mesmo parar a contagem?");
    if (res) {
      try{
        await api.post('/time',{
          time: timer,
          project_id: id
        })
      }
      catch(err){

      }
      setTimer(0);
      setIsActive(false);


    } else {
      if(timer !== 0){
        setTimer(timer + 1);

      }
    }
  }
  return (
    <Card>
      <h1>{name}</h1>


      <ActionArea>
      <h2>{toHHMMSS(timer)}</h2>
      <div>

        <button onClick={handleToggle}>{isActive ? (<FiPause size={24} color="#3F3D56"/>): <FiPlay size={24} color="#3F3D56"/>}</button>
        {timer ? <button onClick={ () => handleStop(id)}><FiCheckCircle size={24} color="#3F3D56"/></button> : null}
      </div>
      </ActionArea>
      <span>{category}</span>
    </Card>
  );
}

export default Project;
