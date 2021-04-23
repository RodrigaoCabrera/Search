import { useState, useEffect } from 'react'
import SearchBox from './Componenetes/SearchBox/index'
import SearchResults from './Componenetes/SearchResults/index'
import "./style.css"
/**import data from "../../data/users.json"Si se usa llamada a una API No se
requiere importat */


export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false)
    const [data, setData] = useState([]) /*  Solo es necesario para cuando
   viene de un API*/
    const[results, setResults] = useState([])
/*fetch es un método de javascript que permite actualizar un componenete con
información que viene de una base de datos. Es decir, la forma de conectar una API,
algún backend o base de datos al proyecto React*/

/*
    useEffect(() =>{
        const getUsers = async () =>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then (response => response.json())
            .then (data =>{
                setData(data)
            })
        }
        getUsers().catch(null)
    }, [])
Se puede conectar de otra forma: */
useEffect(() =>{
    const getUsers = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data)
        };
    getUsers().catch(null)
}, [])

    const handleCloseSearch = () => {
        setIsAtTop(false)
        setResults([])
    }
    const handleSearchClick = (searchText) =>{
        setIsAtTop(true)
        if ( data?.length) {
            const searchTexMinus = searchText.toLowerCase();
            const filterData = data.filter((value) =>
                    value.name.toLowerCase().includes(searchTexMinus) ||
                    value.phone.toLowerCase().includes(searchTexMinus)||
                    value.email.toLowerCase().includes(searchTexMinus)||
                    value.username.toLowerCase().includes(searchTexMinus)
                )
           setResults(filterData)
       }
       
    };
    
    return (
        <div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
            <SearchBox 
            onSearch={handleSearchClick} 
            onClose={handleCloseSearch} 
            isSerching={isAtTop}/>
            <SearchResults results={results} isSerching={isAtTop}/>
        </div>
    );
}