import { useContext, useState } from "react";
import "./Pagination.scss";
import MarvelContext from "../../store/contexts/MarvelContext";

const Pagination = () => {
  const {
    limit,
    offsetCharacters,
    setOffsetCharacters,
    offsetEvents,
    setOffsetEvents,
    offsetComics,
    setOffsetComics,
    title,
  } = useContext(MarvelContext);
  const { counter, setCounter } = useState(0);
  const { total, setTotal } = useState(74);

  const beforePage = () => {
    switch (title) {
      case "EVENTS":
        if (offsetEvents > 0) {
          setOffsetEvents(offsetEvents - limit);
          setCounter(offsetEvents);
          setTotal(74);
        }
        break;
      case "CHARACTERS":
        if (offsetCharacters > 0) {
          setOffsetCharacters(offsetCharacters - limit);
          setCounter(offsetCharacters);
          setTotal(1559);
        }
        break;
      case "COMICS":
        if (offsetComics > 0) {
          setOffsetComics(offsetComics - limit);
          setCounter(offsetComics);
          setTotal(51242);
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
          setCounter(offsetEvents);

          setTotal(74);
        }
        break;
      case "CHARACTERS":
        if (offsetCharacters < 1559) {
          setOffsetCharacters(offsetCharacters + limit);
          setCounter(offsetCharacters);
          setTotal(1559);
        }
        break;
      case "COMICS":
        if (offsetComics < 51242) {
          setOffsetComics(offsetComics + limit);
          setTotal(51242);
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
        <p>
          {counter} - {counter + limit} of {total}
        </p>
        <button onClick={nextPage}>Next {">>"}</button>
      </div>
    </>
  );
};

export default Pagination;
