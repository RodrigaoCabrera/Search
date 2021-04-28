import { useState } from 'react'



export default function SearchBox({ onSearch, onClose, isSerching }){
    const [searchText, setSearchText] = useState('');
    
    const hancleClick = () => {
        setSearchText("")
        onClose()
    }


    return(
        <div className="container search-box d-flex flex-column my-3">
            <h3 className="title text-center text-white font-weight-bold">Buscador</h3>
            <div className='row text-center'>
                <div className='col-12 d-flex justify-content-center'>
                    
                            <input 
                            value={searchText} 
                            onChange={({target: { value }}) => setSearchText(value)}
                            className="form-control search-box-input w-50"/>
                        
                            <button className='btn btn-success ml-2 w-15' onClick={()=> onSearch(searchText)} /**propiedad de 
                            html */ disabled={!searchText.length}>Buscar</button>

                            
                            {isSerching && <button className='btn btn-danger ml-2 w-15' onClick={hancleClick} disabled={!searchText.length}>Cerrar</button>}
                        
                </div>
            </div>
        </div>
    );
}