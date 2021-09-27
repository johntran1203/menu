import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
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
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
      console.log(location.pathname)
      if( location.pathname === '/FilterFavorite'){
        setSearchTerm("")
      }
      //if the url is /FIlterfavorite
      // set searchTerm to empty string

  },[location.pathname])
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
        <h1>Edit Food</h1>

        <input
          type="text"
          placeholder="search"
          value ={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {foods
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
          
              <FilterFavorite key={key} food={val} setToggleFetch={setToggleFetch} />
            );
          })}
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
