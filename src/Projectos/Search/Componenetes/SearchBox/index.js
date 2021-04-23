import { useState } from 'react'
import './style.css'


export default function SearchBox({ onSearch, onClose, isSerching }){
    const [searchText, setSearchText] = useState('');
    
    const hancleClick = () => {
        setSearchText("")
        onClose()
    }


    return(
        <div className="search-box">
            <h3 className="title">Buscador personal</h3>
            <div className="search-box.button">
                <label>
                    <input 
                    value={searchText} 
                    onChange={({target: { value }}) => setSearchText(value)}
                    className="search-box-input"/>
                </label>
                <button onClick={()=> onSearch(searchText)} /**propiedad de 
                html */ disabled={!searchText.length}>Buscar</button>
                
                {isSerching && <button onClick={hancleClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
    );
}