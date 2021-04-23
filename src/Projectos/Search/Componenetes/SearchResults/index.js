import SearchResultsItem from "./SearchResultsItem"

export default function SearchResults({ results, isSerching }){
    return (
        <div style={{ 
            width: "100%", 
            padding: "0rem 2rem 0rem 2rem"}}>
            {!results?.length && isSerching && <p>No existen resultados</p>}
            {results?.map((value)=> {
                return (
                    /**Se le puede pasar propiedades a su hijo de dos manera: una de ellas
                      es con spread o método de propagación
                     */
                    <SearchResultsItem key={value.id} /*name={value.name} email={value.email}*/ {...value}/>
                )
            })
        }
        </div>
    )
}