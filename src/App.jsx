import { useState, useRef } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "7fd205db3463758011e06fb3d399d4d2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const data = axios.get(url);

    console.log(data);

  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  );
}

export default App;
