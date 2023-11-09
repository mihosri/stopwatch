import {useTimer} from "use-timer";
import './App.css';

function App() {

  const {time, start, pause, reset, status} = useTimer();
  return (
    <>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>Start Timer: {time}</p>
      {status === 'RUNNING' && <p>Running...</p>}
    </>
  );
}

export default App;
