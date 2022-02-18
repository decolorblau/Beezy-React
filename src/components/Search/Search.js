import { useContext, useState } from "react";
import useMarvel from "../../hooks/useMarvel";
import MarvelContext from "../../store/contexts/MarvelContext";
import "./Search.scss";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { getEventsByName, getCharactersByName, getComicsByName } = useMarvel();
  const { title, setSearch } = useContext(MarvelContext);

  const changeValue = (event) => {
    setSearchInput(event.target.value);
  };

  const sendData = () => {
    setSearch(searchInput);
    switch (title) {
      case "EVENTS":
        getEventsByName(searchInput);
        break;
      case "CHARACTERS":
        getCharactersByName(searchInput);
        break;
      case "COMICS":
        getComicsByName(searchInput);
        break;
      default:
        return "error";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendData();
    }
  };

  return (
    <>
      <div className="search__bar">
        <div className="search__button" onClick={sendData}>
          <img
            className="search__img"
            src={require("../../assets/loupe.png")}
            alt="go to search page"
          />
        </div>
        <input
          type="text"
          id="searchKeyword"
          value={searchInput}
          className="search__input"
          placeholder="Search"
          onChange={changeValue}
          onKeyDown={handleKeyDown}
          required
          autoComplete="off"
        />
      </div>
      <p className="search__text"></p>
    </>
  );
};

export default Search;
