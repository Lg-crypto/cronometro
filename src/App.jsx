import './App.css';
import { useState } from 'react';
function App() {
  const [isActive,setisActive] = useState(false);
  const [pausado,setPausado] = useState(true);
  const [time, setTime] = useState(0)
  
  const handleStart = ()=>{
    let intervalo = null;
    if (isActive && !pausado){
      intervalo = setInterval(() => {
        setTime((time)=> time + 1)
      }, 1000);
    }else{
      clearInterval(intervalo);
    }
    return ()=>{
      clearInterval(intervalo);
    }
  }

  const continuar = ()=>{
    setPausado(!pausado)
  }
  const resetar = ()=>{
    setisActive(!isActive);
    setTime(0);
  }
  const adiantar = ()=>{
    setTime(time+10);
  }
  const voltar = ()=>{
    setTime(time-10);
  }
  return (
    <div className="App"  onLoad={handleStart()}>
      <p>{time ? time : 0}</p>
      <button onClick={voltar()}>voltar</button>
      <button onClick={adiantar()}>adiantar</button>
      <button onClick={continuar()}>{pausado ? "continuar" : "pausar"}</button>
      <button onClick={resetar()}>resetar</button>
    </div>
  );
}

export default App;
