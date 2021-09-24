import { Link } from 'react-router-dom';

function Food(props){
    const {name, side, rice, protein }= props.food.fields

   
    
    return (
        <div>
            <div className="food">
            <h3>{name}</h3>
            <h3>{protein}</h3>
            <h3>{side}</h3>
            <h3>{rice}</h3>
            
            
            <Link to={`/edit/${props.food.id}`}>
            <button>EDIT ORDER</button>
            </Link>
        </div>
    </div>
       
    )
}

export default Food;