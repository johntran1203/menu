import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Food from "./components/Food";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import FilterFavorite from "./components/FilterFavorite";
import "./App.css";

function App() {
  const [foods, setFood] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");

 
  const filterFavorite = foods.map((food) => <FilterFavorite key ={food.id} food ={food}/>)
  
  
  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(baseURL, config);

      setFood(response.data.records);
      const red = response.data.records;
      
    
    };
    getMenu();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/menu">

        <main>
          {/* <input type='text' placeholder = 'search' onChange ={(e) => {setSearch(e.target.value)}} /> */}
          {foods.map((food, key) => (
            <Food key={food.id} food={food} setToggleFetch={setToggleFetch} />
          ))}
        
        </main>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/new">
        <Form foods={foods} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form foods={foods} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/filterFavorite">
        <h1>Hello world</h1>
        <input type='text' placeholder = 'search' onChange ={(e) => {setSearch(e.target.value)}} />
          {filterFavorite}
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

// {foods.map((val, key) => {
//   return
// })}