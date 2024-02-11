import { useState } from "react";
import allMovies from "./data";
import categories from "./categories";

function App() {
  const [typeOfMovie, setTypeOfMovie] = useState("akčný");

  const vysledneFilmy = allMovies.filter(
    (movie) => movie.category === typeOfMovie
  );
  console.log(vysledneFilmy);
  return (
    <div>
      <div className="all-buttons">
        {categories.map((category, index) => {
          return (
            <button
              className="one-button"
              key={index}
              onClick={() => setTypeOfMovie(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="all-movies">
        {vysledneFilmy.map((movie) => {
          const { id, image, title, age, tags, description } = movie;
          return (
            <div key={id} className="one-movie">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
