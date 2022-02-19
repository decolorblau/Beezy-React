import { useEffect, useContext } from "react";
import Gallery from "../../components/Galley/Gallery";
import "./MarvelPage.scss";
import useMarvel from "../../hooks/useMarvel";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import MarvelContext from "../../store/contexts/MarvelContext";

const MarvelPage = () => {
  const { getComics } = useMarvel();
  const { setOrderBy, orderBy, searchByName } = useContext(MarvelContext);

  const comicsOptions = [
    { label: "By Title: A - Z", value: "title" },
    { label: "By Title: Z - A", value: "-title" },
    { label: "On Sale Date: New - Old", value: "-onsaleDate" },
    { label: "On Sale Date: Old - New", value: "onsaleDate" },
  ];

  const format = [
    { id: 1, format: "comic" },
    { id: 2, format: "magazine" },
    { id: 3, format: "trade paperback" },
    { id: 4, format: "hardcover" },
    { id: 5, format: "digest" },
    { id: 6, format: "graphic novel" },
    { id: 7, format: "digital comic" },
    { id: 8, format: "infinite comic" },
  ];

  useEffect(() => {
    !searchByName && getComics();
  }, [getComics, searchByName]);

  const changeComicsOrder = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div className="marvel">
      <div className="marvel__img"></div>
      <div className="marvel__filter">
        <button onClick={() => {}} className="marvel__filter-button">
          MARVEL COMICS WORLD
        </button>
      </div>
      <h2 className="gallery-title">COMICS</h2>
      <div className="filter">
        <Search />
        <div className="filter__dropdown">
          <select value={orderBy} onChange={changeComicsOrder}>
            {comicsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Gallery />
      <Pagination />
      <Footer />
    </div>
  );
};

export default MarvelPage;
