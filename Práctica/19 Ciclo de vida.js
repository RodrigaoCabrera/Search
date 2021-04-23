//El ciclo de vida de un componente empieza en:
//1 Constructor() Para cuando se establece datos predeterminados
//2 componentDidMount que se llama cuando la appReact es renderizada en pantalla
//3 componentDidUpdate que se llama cuando se actualiza el state
//Luego vienen otros métodos secundarios:
//1 shouldCmponenetUpdate sirve para cargar hacer un re-renderizados o anularlos

import { useState, Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: '',
        }
    };
  
    componentDidMount(){
        console.log("Did mount")
    };
  
    componentDidUpdate(){
      console.log('did update')
    }
  
    shouldComponentUpdate(){
      return false //Esta función en false impide que se actualice y en true la habilita
      //Sirve para cuando no queres renderizaar ciertas cosas
    }
  
    
  
    render(){
        return(
            <div>
              <input value={this.state.name} onChange={({target:{ value }}) => this.setState({name: value})} />
            </div>
        );
    };
  };
  
  export default App;