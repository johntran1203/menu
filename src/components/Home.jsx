import { Link } from 'react-router-dom';
import img from '../images/com.jpg'
import '../App.css';

function Home() {
    return (
        <div>
            <h1>Simple Com Tam</h1>
            <div className='home-container'>
            <div className='col'>
            <img src={img} alt="rice" />
            </div>
            <div className='col'>
            <h3>ABOUT US</h3>
            <p>When going to an authentic vietnamese restaurant it could confusing and stressful experience. As soon as you sit down the waiter gives you a menu and ask what you want right away. The menu is in vietnamese with a little bit of english. There's no picture of what you want to order. With our App user can pick there food like chiptole style. </p>
            <div className='home-btn'>
                <Link to='/new'>
                    <button className='btns'>ORDER HERE</button>
                </Link>
            
            </div>
            </div>
            </div>
           
            
    
            
        </div>
        
    )
}

export default Home;