function Food(props){
    const {name, side, drink, rice, protein, number } = props.food.fields
    return (
        <div className="food">
            <h3>{name}</h3>
            <h3>{side}</h3>
            <h3>{drink}</h3>
            <h3>{rice}</h3>
            <h3>{protein}</h3>
            <h3>{number}/5</h3>
        </div>
    )
}

export default Food;