import "./IndividualMovie.css";
import movieList from "./movieList.js";

export default function IndividualMovie(props) {
  const {movieIndex} = props;
  const movie = movieList[movieIndex];

  return (
    <div className="individualMovie_container">
      <img src={movie.poster} alt={`Affiche du film ${movie.title}`} />
      <h2>{movie.title}</h2>
      <h3>Année : {movie.releaseYear}</h3>
      <p>Durée : {movie.duration} minutes</p>
      <p>Acteurs : {movie.actors.join(", ")}</p>
      <p>Directeur : {movie.director}</p>
      <p>Résumé : {movie.description}</p>
      <p>Note : {movie.rating}/10</p>
    </div>
  );
}
