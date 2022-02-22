import { useContext, useState } from "react";
import useMarvel from "../../hooks/useMarvel";
import "./Search.scss";
import MarvelContext from "../../store/contexts/MarvelContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { getComicsByName, getComics, getComicsByFormatAndByName } =
    useMarvel();
  const { setSearchByName, title, setOffset, setLastSearch } =
    useContext(MarvelContext);

  const changeValue = (event) => {
    setSearchInput(event.target.value);
    setLastSearch(event.target.value);
    setOffset(0);
    setSearchByName(true);
    if (title === "all comics") {
      getComicsByName(searchInput);
    } else {
      getComicsByFormatAndByName(searchInput, title);
    }
  };

  const sendData = () => {
    if (title === "all comics") {
      getComicsByName(searchInput);
    } else {
      getComicsByFormatAndByName(searchInput, title);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendData();
    }
  };

  const clearData = () => {
    setSearchInput("");
    setOffset(0);
    setSearchByName(false);
    getComics();
  };

  return (
    <div className="search">
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
      <div className="search__close" onClick={clearData}>
        <p>X</p>
      </div>
    </div>
  );
};

export default Search;
