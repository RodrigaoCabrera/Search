import { useState } from 'react';//Funcion o hook, que permite actualizar el state
//Puede recibir un argumento. 

function App() {
  const [name, setName] = useState("Gilda");//El setAlgo sirve para cambiar el valor
  const [age] = useState(24);
  const [, setSomething] = useState('Hey!')
 const handleHeyClick = () => {
    setName('Dania')
 };
  return (
    <div className="App">
      <h1>Hola {name}</h1>
      <p>Edad:</p>
      <button onClick={handleHeyClick}>Hey</button>
    </div>
  );
}

export default App;
