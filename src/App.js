import{useState} from 'react';
import './App.css';
const App=()=> {
  const [count,SetCount]=useState(0);
  function increaseHandler(){
    SetCount(count+1);
  }
  function decreaseHandler(){
    SetCount(count-1);
  }
  function resetHandler(){
    SetCount(0);
  }
  return (
    <div >
      <label>Counter App</label>
   <div className="title">
    
    <div class="increase">
      <button onClick={increaseHandler}>+</button>
    </div>
    <div class="count">
      {count}
    </div>
    <div class="decrease">
    <button onClick={decreaseHandler}>-</button>
    </div>
   </div>
   <div className='reset'><button onClick={resetHandler}>RESET</button></div>
   </div>
  );
}

export default App;
