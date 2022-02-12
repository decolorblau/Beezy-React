import { useContext, useEffect } from "react";
import useMarvel from "../../hooks/useMarvel";
import MarvelContext from "../../store/contexts/MarvelContext";

const HomePage = () => {
  const { characters } = useContext(MarvelContext);
  const { getCharacters } = useMarvel();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);
  return (
    <>
      <div className="homepage-container">
        {characters.map((character) => (
          /*  character.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && */ <div>
            <h2>{character.title}</h2>
            <p>{character.description}</p>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
