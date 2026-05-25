import './App.css'
import Movies from './components/Movies'
import movies from './movies.json'

function App() {

  return (
    <>
      <Movies items={movies} />
    </>
  )
}

export default App



// Розбий проєкт на компоненти

// Ти маєш оцінити дані і вирішити:

// на які компоненти розділити

// які пропси отримує кожен компонент

// які типи prop-types потрібніКомпонент Movie

// приймає один фільм як проп movie (об’єкт)

// відображає poster, title

// всередині використовує 4 рази компонент MovieInfoКомпонент MovieInfo

// приймає пропси:

// text (рядок/число, перетвори в текст)

// icon (React-елемент з react-icons)

// показує іконку + текст

// ✅ Компонент MovieList

// приймає масив movies

// робить map і рендерить <Movie movie={...} />

// ✅ App

// імпортує movies.json

// передає масив у MovieListІконки (react-icons)

// Використай react-icons, наприклад:

// FaClock (duration)

// FaStar (rating)

// FaCalendarAlt (year)

// FaFilm (genre)

// ВАЖЛИВО: іконки мають передаватися пропсами в MovieInfo.