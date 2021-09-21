
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[steps,setSteps]=useState(0);
  const increaseSteps=()=>{
    const countSteps=steps+1;
    setSteps(countSteps);
    console.log(steps);

  }
  useEffect(()=>{
    console.log(steps);
  },[steps])
  return (
    <div className="App">
      <h3>My Steps:{steps}</h3>
      <button onClick={increaseSteps}>Walk</button>
    </div>
  );
}
export default App;
