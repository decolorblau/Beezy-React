import "./Categories.scss";
import useMarvel from "../../hooks/useMarvel";
import PropTypes from "prop-types";
import { useContext } from "react";
import MarvelContext from "../../store/contexts/MarvelContext";

const Categories = ({ formats }) => {
  const {
    getComicsByFormat,
    getComics,
    getComicsByFormatAndByName,
    getComicsByName,
  } = useMarvel();
  const { setTitle, setOffset, searchByName, lastSearch } =
    useContext(MarvelContext);

  const filterByGenre = (format) => {
    setOffset(0);
    if (!searchByName) {
      if (format === "all comics") {
        getComics();
      } else {
        getComicsByFormat(format);
      }
    } else {
      if (format === "all comics") {
        getComicsByName(lastSearch);
      } else {
        console.log(lastSearch);
        getComicsByFormatAndByName(lastSearch, format);
      }
    }
    setTitle(format);
  };

  return (
    <div className="formats">
      {formats.map((format) => (
        <button
          className="format"
          key={format.id}
          onClick={() => filterByGenre(format.format)}
        >
          {format.format.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

Categories.protoTypes = {
  format: PropTypes.array.isRequired,
};

export default Categories;
