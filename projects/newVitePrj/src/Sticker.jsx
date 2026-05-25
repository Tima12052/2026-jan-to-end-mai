import Choice from "./Choice";
import stickerss from "./stickers.json"
export default function Sticker({ items }) {
    console.log(items)
    return (
        <ul className="dlss5" style={{margin: "8px"}}>
            {items.map((item) => {
                return (
                    <Choice
                        img={item.img}
                    />
                )
            })}
        </ul>
    )
}