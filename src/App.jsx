import {useState} from "react";
import IndividualMovie from "./components/IndividualMovie.jsx";
import movieList from "./components/movieList.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>Votre liste de films préférés</h1>
      <div className="allMovies_container">
        {movieList.map(
          (
            currentElement,
            index /* On boucle sur la liste de film et pour chacun on appelle le composant avec comme props l'index du film actuel dans la boucle */
          ) => (
            <IndividualMovie
              movieIndex={index}
            /> /* Un chiffre ou un booléen c'est entre {} sinon entre "" ça sera un string */
          )
        )}
      </div>
    </>
  );
}

export default App;
