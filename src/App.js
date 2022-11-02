import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");

  const getAdvice = (e) => {
    e.prevent.default(e);
  getAdvice(setAdvice);
}

  useEffect(() => {
    const getAdvice = async() => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity)
    }
    getAdvice();
  }, [])




  return (
    <div className="App">
      <div className="container">
        <h2> Are you bored?</h2>
        <h2>Hit this button for ideas</h2>
        </div>

        <div className="container">
          <button onClick={getAdvice}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-idea-achievements-flaticons-lineal-color-flat-icons.png" alt="lihgtbulb"/></button>
        </div>
        <div className="container">
        <p>{setAdvice}</p>
        </div>
      </div>
  );
}

export default App;
