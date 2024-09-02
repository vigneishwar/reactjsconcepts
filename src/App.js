import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter,setCounter] = useState(0);
  const name = 'vikki';
  return (
    <div className='App'>
      <h1>Hello, {name}!</h1>
      <h2>Current Count: {counter}</h2>
      <button onClick={()=> setCounter((prevCount)=>prevCount + 1)}>+</button>
      {/* <button onClick={()=> setCounter((prevCount)=> prevCount - 1)}>-</button> */}
      <button onClick={()=> {
        if(counter > 0){
          setCounter((prevCount)=> prevCount - 1)
        }
      }}>-</button>
    </div>
  )
}

export default App;
