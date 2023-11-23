import IndividualMovie from "./components/IndividualMovie.jsx";
import movieList from "./components/movieList.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>Votre liste de films préférés</h1>
      <div className="allMovies_container">
        {movieList.map((currentElement) => ( // boucle sur chaque film de la liste, récupère ses clés et valeurs et les donne au composant IndividialMovie pour qu'il affiche chaque film
            <IndividualMovie {...currentElement}/>
            )
        )}
      </div>
    </>
  );
}

export default App;
