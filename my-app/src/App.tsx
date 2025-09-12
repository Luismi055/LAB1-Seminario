//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { Hello } from './components/Hello';

function App() {
  //const [count, setCount] = useState(0);
  const title = import.meta.env.VITE_APP_TITLE;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>API base: {import.meta.env.VITE_API_BASE_URL}</p>
      </div>
        <div>
      <h1>Vite + React + TS</h1>
      <Hello name="Seminario" />
        </div>
    </>
  );
}

export default App;

