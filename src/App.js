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
import "./App.css";

function App() {
  const [foods, setFood] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(baseURL, config);

      setFood(response.data.records);
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
          <input type='text' placeholder = 'search' onChange ={(e) => {setSearch(e.target.value)}} />
          
          {foods.map((food) => (
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
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

