import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { baseURL, config } from '../services';


function Form(props) {
    const [name, setName] = useState('')
    const [protein, setProtein] = useState('')
    const [rice, setRice] = useState('')
    const [side, setSide] = useState('')
    const [rating, setRating] = useState(0)

    const params = useParams();

    useEffect(() => {
        if(params.id){
            const food = props.foods.find((food) => food.id === params.id);
            if(food) {
                setName(food.fields.name)
                setProtein(food.fields.protein)
                setRice(food.fields.rice)
                setSide(food.fields.side)
                setRating(food.fields.rating)

            }
        }
    },[params.id, props.foods])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFood = {
            name,
            protein,
            rice,
            side,
    
        }

        if(params.id) {
            const foodURL = `${baseURL}/${params.id}`;
            await axios.put(foodURL, {fields: newFood }, config)
        } else {
            await axios.post(baseURL, { fields: newFood}, config)
        }

        

        props.setToggleFetch((curr) => !curr);
    }

    return (
    <form onSubmit = {handleSubmit}>
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
        <button type="submit">Build</button>
    </form>
    );
}

export default Form;