import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Food from "./components/Food";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [foods, setFood] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const getMenu = async () => {
      // make an axios get call to our url, with our config object and save the response
      const response = await axios.get(baseURL, config);
      // console log the response's data
      setFood(response.data.records);
    }
    getMenu();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          {/* map through the characters array and render a p tag for each one with the character's name field as its text content */}
          {foods.map((food) => (
            <Food key={food.id} food ={food}/>
          ))}
        </main>
      </Route>
      <Route path="/new">
        <h3>Our create form goes here!</h3>
      </Route>
      <Route path="/edit/:id">
        <h3>Our edit form goes here!</h3>
      </Route>
    </div>
  );
}



export default App;


