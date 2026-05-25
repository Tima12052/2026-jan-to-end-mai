import styled from "styled-components";
import "./MovieItemss.css";

const Btn = styled.button`
  background-color: #ff0000;
  padding: 10px;
`;
const styles = {
  margin: "8px",
  backgroundColor: "#ff0000",
};
export default function MovieItems({
  title,
  duration,
  rating,
  year,
  genre,
  poster,
  isOnline,
}) {
  isOnline = true;
  if (isOnline) {
    console.log("online");
  }

  return (
    <li className={`circle ${isOnline ? "online" : "offline"}`}>
      <Btn>якисйсь текст(буквально)</Btn>
      <h3>{title}</h3>
      <img src={poster} alt={`${title} poster`} />
      <p>Duration: {duration}min</p>
      <p style={styles}>Rating: {rating}/10</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </li>
  );
}
