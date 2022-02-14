import { useContext } from "react";
import useMarvel from "../../hooks/useMarvel";
import MarvelContext from "../../store/contexts/MarvelContext";

const Pagination = () => {
  const {
    events,
    characters,
    series,
    limit,
    offsetCharacters,
    setOffsetCharacters,
    offsetEvents,
    setOffsetEvents,
    offsetSeries,
    setOffsetSeries,
    title,
    setMarvelArray,
  } = useContext(MarvelContext);
  const { getEvents, getCharacters, getSeries } = useMarvel();

  const beforePage = () => {
    switch (title) {
      case "EVENTS":
        if (offsetEvents > 0) {
          setOffsetEvents(offsetEvents - limit);
          getEvents();
          events && setMarvelArray(events);
        }
        break;
      case "CHARACTERS":
        if (offsetCharacters > 0) {
          setOffsetCharacters(offsetCharacters - limit);
          getCharacters();
          characters && setMarvelArray(characters);
        }
        break;
      case "SERIES":
        if (offsetSeries > 0) {
          setOffsetSeries(offsetSeries - limit);
          getSeries();
          series && setMarvelArray(series);
        }
        break;
      default:
        return "error";
    }
  };

  const nextPage = () => {
    switch (title) {
      case "EVENTS":
        if (offsetEvents < 74) {
          setOffsetEvents(offsetEvents + limit);
          getEvents();
          events && setMarvelArray(events);
        }
        break;
      case "CHARACTERS":
        if (offsetCharacters < 1000) {
          setOffsetCharacters(offsetCharacters + limit);
          getCharacters();
          characters && setMarvelArray(characters);
        }
        break;
      case "SERIES":
        if (offsetSeries < 60) {
          setOffsetSeries(offsetSeries + limit);
          getSeries();
          series && setMarvelArray(series);
        }
        break;
      default:
        return "error";
    }
  };

  return (
    <>
      <div className="pagination">
        <button onClick={beforePage}>{"❮❮"} Before</button>
        <button onClick={nextPage}>Next {">>"}</button>
      </div>
    </>
  );
};

export default Pagination;
