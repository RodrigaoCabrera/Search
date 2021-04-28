export default function SearchResultsItem({ name, email }){
    return (
            <li className="list-group-item"> 
                <p>{name}</p>
                <p>{email}</p>
            </li>
    );
}