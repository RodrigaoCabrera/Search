export default function SearchResultsItem({ name, email }){
    return (
      <div style={{ 
                backgroundColor: "grey", 
                marginTop: "1rem", 
                marginBotton: "1rem", 
                padding: 10,
                width: "100%"}
                    }>
                <p>{name}</p>
                <p>{email}</p>
        </div>
    );
}