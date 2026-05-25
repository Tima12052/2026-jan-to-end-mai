export default function RestItems({
    name,
    time,
    servings,
    calories,
    difficulty,
    image
}) {
    return (
        <li>
            <h3>{name}</h3>
            <p>time: {time}min</p>
            <p>servings: {servings}</p>
            <p>Calories: {calories}</p>
            <h6>difficulty: {difficulty}\5</h6>
            <img width='100px' src={image} alt={image} />
        </li>
    )
}