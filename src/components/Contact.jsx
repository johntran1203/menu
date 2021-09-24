function Contact() {
  return (
    <div>
      <section>
        <div className="input-areas">
          <h1>CONTACT ME</h1>
          <form action="mailto:tranjohn1211@gmail.com" method="POST">
            <input
              type="text"
              name="name"
              required
              className="footer-input"
              placeholder="Name"
            />
            <br />
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
