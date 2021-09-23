import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Food from "./components/Food";
import Nav from "./components/Nav";
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Form from "./components/Form";
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
      <h1>Hello</h1>
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route> 
      <Route exact path="/menu">
        <main>
          {/* map through the characters array and render a p tag for each one with the character's name field as its text content */}
          {foods.map((food) => (
            <Food key={food.id} food ={food} setToggleFetch={setToggleFetch}/>
            
          ))}
        </main>
      </Route>
      <Route path='/home'>
        <Home />
      </Route> 
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form foods = {foods} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route> 
      <Footer />
    </div>
  );
}



export default App;


