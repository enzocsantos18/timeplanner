import React, {useState, useEffect}from 'react';

import { Card, ActionArea } from './styles';

function Project() {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function handleToggle(){
    setIsActive(!isActive)
  }
  var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}
var interval = null;
  useEffect(() =>{
    if(isActive){
      interval = setInterval(() =>{
        setTimer(timer + 1)
      }, 1000)
    } else if (!isActive && timer !== 0) {
     
        clearInterval(interval);

    }
    return () => clearInterval(interval);
    
  }, [isActive, timer])
  
  function handleStop(){
    clearInterval(interval)

    const res = window.confirm("Deseja mesmo parar a contagem?");
    if(res){
      setTimer(0)
      setIsActive(false)
    }
    else{
      setTimer(timer + 1)
    }

  }
  return (
    <Card>
      <span>Estudo</span>
      <h1>Estudar</h1>
      <h2>{toHHMMSS(timer)}</h2>

      <ActionArea>
        <span>Ver histórico</span>
        <button onClick={handleToggle}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleStop}>Parar</button>

      </ActionArea>
    </Card>
  );
}

export default Project;