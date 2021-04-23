import { useState, useEffect } from 'react'; 

const App = () => {
const [name, setName] = useState('')
const [age, setAge] = useState()
/**componentDidUpdate */
useEffect(() => {
  console.log('did Update effect')
});
/* componentDidMount */
useEffect(() => {
  console.log('Did Mount effect')
}, []);/*Si lleva un array vacio se llama cuando carga el componente.*/
/**Se activa cuando name cambia */
useEffect(() => {
  console.log('Name cambió')
}, [name]); /*Si lleva un valor en array se llama cuando el mismo cambia*/

useEffect(() => {
  console.log('Age cambió')
}, [age]);

/* willDidUnmount */
useEffect(() => {
  console.log('willDidUnmount')
  return ()=>{
    console.log('willDidUnmount')
  }
}, []);

return(
  <div>
      <input value={name} onChange={({target:{ value }}) => setName(value)} />
      <br />
      <br />
      <input value={age} onChange={({target:{ value }}) => setAge(value)} />
  </div>
);
 
};

export default App;