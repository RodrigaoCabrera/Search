import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event)  =>{
     setEmail(event.target.value) //event.target.value es lo que el usuario está
     //escribiendo, el cual se pasa de manera predeterminada con ese argumento.
  };
  const handlePasswordChange = ({target: {value}})  =>{
    setPassword(value) //Esta es otra forma de pasar el event.target.value.Primero
    //se declara el obj {value} que viene dentro de target y luego se llama a value.
 };

 const handleFormSubmit = (event) => {
    event.preventDefault();//Funcion para evitar que la página se actualice
 }
  return (
    <div className="App">
      <form onChange={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
        <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Contraseña
        <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;