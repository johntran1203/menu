import { Link } from 'react-router-dom';
import { Button } from './Button';
function Home() {
    return (
        <div className= 'container'>
            <h1>Simple Com Tam</h1>
            <h3>ABOUT US</h3>
            <p>When going to an authentic vietnamese restaurant it could confusing and stressful experience. As soon as you sit down the waiter gives you a menu and ask what you want right away. The menu is in vietnamese with a little bit of english. There's no picture of what you want to order. With our App user can pick there food like chiptole style. No need to deal with a server and there will be pictures of what you want to order. </p>
            <div className='home-btn'>
                <Link to='/new'>
                    <button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>ORDER HERE</button>
                   
                </Link>
            
            </div>
            
        </div>
        
    )
}

export default Home;