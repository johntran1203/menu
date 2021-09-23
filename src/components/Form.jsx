import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from '../services';


function Form(props) {
    const [name, setName] = useState('')
    const [protein, setProtein] = useState('')
    const [rice, setRice] = useState('')
    const [side, setSide] = useState('')
    const history = useHistory();
    const params = useParams();
    


    useEffect(() => {
        if(params.id){
            const food = props.foods.find((food) => food.id === params.id);
            if(food) {
                setName(food.fields.name)
                setProtein(food.fields.protein)
                setRice(food.fields.rice)
                setSide(food.fields.side)
        

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
        history.push("/")
    
    }

    
    return (
    <form onSubmit ={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} required autoComplete = 'off' autoFocus
        onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="protein">Protien</label>
        <select 
                    value={protein}
                    required 
                    onChange={(e) => setProtein(e.target.value)} 
        
                    id='protein'
                >
                    <option value="grill pork">grill pork</option>
                    <option value="grill pork sausage">grill pork sausage</option>
                    <option value="julienne pork">julienne pork</option>
                    <option value="steam egg cake with pork">steam egg cake with pork</option>
                    <option value="pikle pork paste">pickle pork paste</option>
                    <option value="grill pork chops">grill pork chops</option>
                    <option value="grill chicken">grill chicken</option>
                    <option value="crispy chicken">crispy chicken</option>
                    <option value="chinese sausage">chinese sausage</option>
                </select>

        <label htmlFor="rice">Rice</label>
        <select 
                    value={rice}
                
                    onChange={(e) => setRice(e.target.value)}
                    id='rice'
                >
                    <option value="broken rice"> broken rice</option>
                    <option value="yellow rice">yellow rice</option>
                    <option value="brown rice">brown rice</option>
                    <option value="vermicelli noodles">vermicelli noodles</option>
            
                </select>
    
    
        <label htmlFor="side">side</label>
        <select 
                    value={side}
                    required 
                    onChange={(e) => setSide(e.target.value)} 
                
                    id='side'
                >
                    <option value="tofu">tofu</option>
                    <option value="carrot and daikon">carrot and daikon</option>
                    <option value="eggroll">eggroll</option>
                    <option value="vegetables">vegetables</option>
                    <option value="beef broth">beef broth</option>
            
                </select>
                
        <button type="submit">Build</button>
    </form>
    );
}


export default Form;




