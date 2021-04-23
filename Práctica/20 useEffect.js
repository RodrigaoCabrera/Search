//useEffect se usa para simular los ciclos de vidas en componenetes funcionales.

import { useEffect } from "react"

componentDidMount()//se reemplaza por:
useEffect(() => {}, []) //Se le pasa una callback y un array vacio

componentDidUpdate()//Se reemplaza por:
useEffect(() => {})//Se le pasa una callback

componentWillUnmount()//Sirve para cuando se desmontan componentes. Se reeemplaza por:
useEffect(() => {return () => {/* */}})

Ejemplo:

import { useState, useEffect } from 'react'; 

const App = () => {
const [name, setName] = useState('')

/**componentDidUpdate */
useEffect(() => {
  console.log(10)
})
return(
  <div>
      <input value={name} onChange={({target:{ value }}) => setName=(value)} />
  </div>
);
 
};

export default App;
