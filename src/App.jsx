import './App.css';
import { useState , useEffect} from 'react';
function App() {
  const [isActive,setisActive] = useState(false);
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    let intervalo = null;

    if (isActive) {
      intervalo = setInterval(() => {
        setTime((time) => time + 0.01);
      }, 10);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [isActive]);
  const continuar = ()=>{
    setisActive(!isActive)
  }
  const resetar = ()=>{
    setisActive(false);
    setTime(0);
  }
  const adiantar = () => {
    setTime((time) => time + 10);
  };

  const voltar = () => {
    setTime((time) => time - 10);
  };
  return (
    
    <div className="App">
      <title>app</title>
      <p>{time.toFixed(2)}</p>
      
      <button onClick={voltar}>
        <svg version="1.1" baseProfile="tiny" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 42 42">
          <polygon fillRule="evenodd" points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "/>
        </svg>
      </button>
      <button onClick={adiantar}>
      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 306 306" >
        <g>
	        <g id="keyboard-arrow-right">
		        <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
	        </g>
        </g>
      </svg>
      </button>
      <button onClick={continuar}>
        {
        isActive ? 
        <svg width="40" height="50" viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="30" height="90" stroke="#332D2D" stroke-width="10"/>
          <rect x="55" y="5" width="30" height="90" stroke="#332D2D" stroke-width="10"/>
        </svg>
        :
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.027 18.027" width="50px" height="50px">
          <path fillRule="evenodd" d="M1.015,18.027V0l15.998,8.92v0.229L1.015,18.027L1.015,18.027z M3.018,4.004  v10.018l9.99-5.01L3.018,4.004L3.018,4.004z"/>
        </svg>
        }
      </button>
      <button onClick={resetar}>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 357 357" >
          <g>
            <g id="close">
              <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                214.2,178.5 		"/>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default App;
