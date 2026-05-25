import RestItems from './restItems'
export default function Rest ({items}){
    return (
        <ul>
            {items.map((item) => {
                return (
                    <RestItems
                    name={item.name}
                    time={item.time}
                    servings={item.servings}
                    calories={item.calories}
                    difficulty={item.difficulty}
                    image={item.image}
                    />
                )
            })}
        </ul>
    )
}