import { useState, useEffect } from 'react'
import SearchBox from './Componenetes/SearchBox/index'
import SearchResults from './Componenetes/SearchResults/index'
import "./style.css"
/**import data from "../../data/users.json"Si se usa llamada a una API No se
requiere importat */


export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false)
    const [data, setData] = useState([{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
          }
        }}]) /*  Solo es necesario para cuando
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
Se puede conectar de otra forma: 
useEffect(() =>{
    const getUsers = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data)
        };
    getUsers().catch(null)
}, [])
*/

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