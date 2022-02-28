import { useEffect, useContext, useState } from "react";
import Gallery from "../../components/Galley/Gallery";
import "./MarvelPage.scss";
import useMarvel from "../../hooks/useMarvel";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import MarvelContext from "../../store/contexts/MarvelContext";
import Categories from "../../components/Categories/Categories";

const MarvelPage = () => {
  const { getComics, getComicsByFormat, getComicsByFormatAndByName } =
    useMarvel();
  const { setOrderBy, orderBy, searchByName, title, lastSearch } =
    useContext(MarvelContext);

  const [isFilter, setIsFilter] = useState(false);

  const comicsOptions = [
    { label: "By Title: A - Z", value: "title" },
    { label: "By Title: Z - A", value: "-title" },
    { label: "On Sale Date: New - Old", value: "-onsaleDate" },
    { label: "On Sale Date: Old - New", value: "onsaleDate" },
  ];

  const formatList = [
    { id: 0, format: "all comics" },
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
    if (!searchByName && title === "all comics") {
      getComics();
    } else if (!searchByName && title !== "all comics") {
      getComicsByFormat(title);
    } else if (searchByName && title !== "all comics") {
      getComicsByFormatAndByName(lastSearch, title);
    }
  }, [
    getComics,
    getComicsByFormat,
    getComicsByFormatAndByName,
    lastSearch,
    searchByName,
    title,
  ]);

  const changeComicsOrder = (event) => {
    setOrderBy(event.target.value);
  };

  const toggleHide = () => {
    setIsFilter(!isFilter);
  };

  return (
    <div className="marvel">
      <div className="marvel__img"></div>
      <div onClick={() => toggleHide()} className="marvel__filter">
        <button>+ Filter</button>
      </div>
      <div className={isFilter ? "active" : "hide"}>
        <div className="line"></div>
        <Categories formats={formatList} />
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
      </div>

      <h2 className="gallery-title">{title.toUpperCase()}</h2>
      <Gallery />
      <Pagination />
      <Footer />
    </div>
  );
};

export default MarvelPage;
