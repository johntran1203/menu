import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from 'react-router-dom';

function Food(props){
    const {name, side, rice, protein }= props.food.fields

    const editFood = async () => {
        const foodURL = `${baseURL}/${props.food.id}`;
        await axios.delete(foodURL, config);
        props.setToggleFetch((curr) => !curr);
    }

    return (
        <div className="food">
            <h3>{name}</h3>
            <h3>{side}</h3>
            <h3>{rice}</h3>
            <h3>{protein}</h3>
            <button onClick = {editFood}>Edit/Delete</button>
            <Link to={`/edit${props.food.id}`}>
            <button>Edit Order</button></Link>
        </div>
    )
}

export default Food;