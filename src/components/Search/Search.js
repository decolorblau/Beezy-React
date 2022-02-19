import { useContext, useState } from "react";
import useMarvel from "../../hooks/useMarvel";
import "./Search.scss";
import MarvelContext from "../../store/contexts/MarvelContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { getComicsByName, getComics } = useMarvel();
  const { setSearchByName } = useContext(MarvelContext);

  const changeValue = (event) => {
    setSearchInput(event.target.value);
  };

  const sendData = () => {
    getComicsByName(searchInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendData();
    }
  };

  const clearData = () => {
    setSearchInput("");
    setSearchByName(false);
    getComics();
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
      <div className="search__close" onClick={clearData}>
        <p>X</p>
      </div>
    </>
  );
};

export default Search;
