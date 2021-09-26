import { Link } from "react-router-dom";
import img from "../images/com.jpg";
import "../App.css";

const GREETINGS = [
  "Greet customers when they approach you. Look them in the eye and speak clearly and with enthusiasm.",
  "Hold your tongue if something troubles you and always apoligize to be polite.",
  "If there is a problem offer them free food to solve the solution",
  "Thank them for choosing to eat here",
]

function Home() {
  return (
    <div>
      <h1>Simple Com Tam</h1>
      <div className="home-container">
        <div className="col">
          <img src={img} alt="rice" />
        </div>
        <div className="col">
          <h3>Rules to follow:</h3>
          {
            GREETINGS.map((greet, index) => (
              <div key={greet}>{ index + 1 }. { greet }</div>
            ))
          }
          <div className="home-btn">
            <Link to="/new">
              <button className="btns">ORDER HERE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
