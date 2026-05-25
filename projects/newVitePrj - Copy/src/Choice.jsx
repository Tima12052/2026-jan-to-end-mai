// Створити файл stickers.json з наступними даними
// Створити компоненти Sticker, StickerList, Choice
// Реалізувати логіку наступним чином, при кліку на Sticker в  Choice повинен відображатися текст з назвою обраного скікера.


export default function Choice({ label, img }) {
  return (
    <li>
      <button onClick={laber = label}>
        <img src={img} alt={img} />
      </button>
    </li>
  );
}
