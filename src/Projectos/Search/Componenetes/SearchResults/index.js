import SearchResultsItem from "./SearchResultsItem"

export default function SearchResults({ results, isSerching }){
    return (
        <div className='container'>
            {!results?.length && isSerching && <p className='alert-danger p-4 rounded text-center'>No existen resultados</p>}
            {results?.map((value)=> {
                return (
                    
                    /**Se le puede pasar propiedades a su hijo de dos manera: una de ellas
                      es con spread o método de propagación
                     */
                    <ul className='list-group'><SearchResultsItem key={value.id}/*name={value.name} email={value.email}*/ {...value}/></ul> 
                )
            })
        }
        </div>
    )
}