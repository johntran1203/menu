function Form(props) {
    return (
    <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />
        <label htmlFor="protein">Protien</label>
        <input id="protein" type="text" />
        <label htmlFor="rice">Rice</label>
        <input id="rice" type="text" />
        <label htmlFor="side">Side</label>
        <input id="side" type="text" />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" />
        <button type="submit">Build</button>
    </form>
    );
}

export default Form;