import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [ativado,setAtiavdo] = useState(false);
  const [pausado,setPausado] = useState(true);
  const [time, setTime] = useState(0)
  
  useEffect(()=>{
    let intervalo = null;

    if (ativado && !pausado){
      intervalo = setInterval(() => {
        setTime((time)=> time + 1)
      }, 1000);
    }else{
      clearInterval(intervalo);
    }

    return ()=>{

    }
  })
  
  const Iniciar = () => {
    setAtiavdo(true);
    setPausado(false);
  };
  const continuar = ()=>{
    setPausado(!pausado)
  }
  const resetar = ()=>{
    setAtiavdo(!ativado);
    setTime(0);
  }
  const adiantar = ()=>{
    setTime(time+10);
  }
  const voltar = ()=>{
    setTime(time-10);
  }
  return (
    <div className="App">
      <p>{time ? time : 0}</p>
      <button onClick={Iniciar()}>Iniciar</button>
      <button onClick={voltar()}>voltar</button>
      <button onClick={adiantar()}>adiantar</button>
      <button onClick={continuar()}>{pausado ? "continuar" : "pausar"}</button>
      <button onClick={resetar()}>resetar</button>
    </div>
  );
}

export default App;
