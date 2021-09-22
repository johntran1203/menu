import { Button } from './Button';

function Contact() {
    return (
        <div>
            <section >
        <div className='input-areas'>
            <h1>CONTACT ME</h1>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
         </form>
        </div>
    </section>
            
        </div>
        
    )
}

export default Contact;