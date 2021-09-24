

function Contact() {
    return (
        <div>
            <section >
        <div className='input-areas'>
            <h1>CONTACT ME</h1>
            <form action="https://formsubmit.co/tranjohn1211@email.com" method="POST">
            <input type="text" name="name" required  className='footer-input' placeholder='name' />
            <br />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button>Submit</button>
         </form>
        </div>
    </section>
            
        </div>
        
    )
}

export default Contact;


{/* // <form action="https://formsubmit.co/your@email.com" method="POST">
//      <input type="text" name="name" required>
//      <input type="email" name="email" required>
//      <button type="submit">Send</button>
// </form> */}