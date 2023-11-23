import "./IndividualMovie.css";

export default function IndividualMovie(props) {
  const {poster, title, releaseYear, duration, actors, director, description, rating} = props;
  // Au lieu de récupérer l'index on prend direct les clés de chaque valeur de la liste de films (tableau) pour les mettre en props. ça remplacerait un movieList[movieIndex].poster par ex (où const {movieIndex} = props;)

  return (
    <div className="individualMovie_container">
      <img src={poster} alt={`Affiche du film ${title}`} />
      <h2>{title}</h2>
      <h3>Année : {releaseYear}</h3>
      <p>Durée : {duration} minutes</p>
      <p>Acteurs : {actors.join(", ")}</p>
      <p>Directeur : {director}</p>
      <p>Résumé : {description}</p>
      <p>Note : {rating}/10</p>
    </div>
  );
}
