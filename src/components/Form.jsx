import axios from 'axios';
import { useState } from 'react';
import { baseURL, config } from '../services';


function Form(props) {
    const [name, setName] = useState('')
    const [protein, setProtein] = useState('')
    const [rice, setRice] = useState('')
    const [side, setSide] = useState('')
    const [rating, setRating] = useState(0)

    const orderFood = async (e) => {
        e.preventDefault();
        const newFood = {
            name,
            protein,
            rice,
            side,
            rating,
        }
        await axios.post(baseURL, { fields: newFood}, config)

        props.setToggleFetch((curr) => !curr);
    }

    return (
    <form onSubmit = {orderFood}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} required autoComplete = 'off' autoFocus
        onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="protein">Protien</label>
        <input id="protein" type="text" value={protein} required autoComplete = 'off'
        onChange={(e) => setProtein(e.target.value)} />
        <label htmlFor="rice">Rice</label>
        <input id="rice" type="text" value={rice} required autoComplete = 'off'
        onChange={(e) => setRice(e.target.value)} />
        <label htmlFor="side">Side</label>
        <input id="side" type="text"  value={side} required autoComplete = 'off'
        onChange={(e) => setSide(e.target.value)}/>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating"  value={rating} required autoComplete = 'off'
        onChange={(e) => setRating(e.target.valueAsNumber)}/>
        <button type="submit">Build</button>
    </form>
    );
}

export default Form;