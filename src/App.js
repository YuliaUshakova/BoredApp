import { useState, useEffect } from 'react';
import video from './mood.mp4';
import './App.css';


function App() {

  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setAdvice(data.activity)
}

  useEffect(() => {
    getAdvice();
  }, [])




  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <p>Feeling bored?</p>
        <p>Hit this button for more ideas</p>
        </div>

        <div className="container">
          <button onClick={getAdvice}><img src="https://img.icons8.com/fluency/48/000000/idea.png" alt="lihgtbulb"/></button>
        </div>
        <div className="container advice">
        <h2>{advice}</h2>
        </div>
    </div>
  );
}

export default App;
