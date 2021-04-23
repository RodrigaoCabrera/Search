import { useState, useEffect } from 'react'; 

const App = () => {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [loger, setLoger] = useState(false);

const handleOnClick = () => {
   setLoger(true)
}

return(
  <div>
    <label>User
      <input type="email" value={user} onChange={({target:{ value }}) => setUser(value)} />
    </label>
      <br />
      <br />
    <label>Password
      <input type="password" value={password} onChange={({target:{ value }}) => setPassword(value)} />
    </label>
    <button onClick={handleOnClick}>Login</button>
    /**Con el operador ternario se puede hacer mostrar ciertos elementos invisibles */
    /**Puede ser: */
    {loger && <h2>Gilda hermosa</h2>}
    {loger ? <h2>Gilda hermosa</h2> : undefined}
  </div>
);
 
};

export default App;