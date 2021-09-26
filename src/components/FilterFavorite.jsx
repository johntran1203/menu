import { Link } from "react-router-dom";

function FilterFavorite(props) {
    
    return (
        <div>
    
            <p>{props.food.fields.name}</p>
            <p>{props.food.fields.protein}</p>
            <p>{props.food.fields.side}</p>
            <p>{props.food.fields.rice}</p>
            <Link to={`/edit/${props.food.id}`}>
          <button>EDIT ORDER</button>
        </Link>
        </div>
    )
}

export default FilterFavorite;



