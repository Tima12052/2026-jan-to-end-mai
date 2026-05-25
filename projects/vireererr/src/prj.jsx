// Створи React-додаток, який шукає статті через Spaceflight News API і показує їх на сторінці.

// API

// Базовий URL:

// https://api.spaceflightnewsapi.net/v4

// Запит для отримання статей:

// /articles/

// Запит для пошуку:

// /articles/?search=moon
// Що треба реалізувати
// форму пошуку статей
// HTTP-запит через axios
// список статей
// індикатор завантаження
// повідомлення про помилку
// повідомлення, якщо статей не знайдено
// Дані для рендеру

// Масив статей знаходиться тут:

// response.data.results

// Для однієї статті використати:

// id
// title
// url
// image_url
// summary
// published_at
// news_site
// Компонент статті має показувати
// картинку
// заголовок
// короткий опис
// сайт новини
// дату публікації
// посилання на повну статтю
import SItems from "./Sitems";
export default function Prj({ items }) {
  let keyW;
  function handleChange() {
    fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?title_contains=${keyW}`,
    ).then((response) => console.log(response.json()));
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={keyW} />
      <ul style={{ margin: "8px" }}>
        {items.map((item) => {
          return (
            <SItems
              key={item.title}
              title={item.title}
              summary={item.summary}
              authorsName={item.authors.name}
              authorsSocials={item.authors.socials}
              url={item.url}
              imageUrl={item.image_url}
              newsSite={item.news_site}
              pubAt={item.published_at}
              updAt={item.updated_at}
              feautered={item.feautered}
              launches={item.launches}
              events={item.events}
            />
          );
        })}
      </ul>
    </div>
  );
}
