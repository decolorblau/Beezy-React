import { useContext, useEffect } from "react";
import MarvelContext from "../../store/contexts/MarvelContext";
import Gallery from "../../components/Galley/Gallery";
import "./MarvelPage.scss";
import useMarvel from "../../hooks/useMarvel";
import Footer from "../../components/Footer/Footer";

const MarvelPage = () => {
  const {
    setOrderByEvents,
    orderByEvents,
    title,
    setTitle,
    events,
    characters,
    series,
    setMarvelArray,
  } = useContext(MarvelContext);
  const { getEvents, getCharacters, getSeries } = useMarvel();

  const eventsOptions = [
    { label: "By Date: Start to End", value: "startDate" },
    { label: "By Date: End to Start", value: "-startDate" },
    { label: "By Name: A - Z", value: "name" },
    { label: "By Name: Z - A", value: "-name" },
  ];

  useEffect(() => {
    switch (title) {
      case "EVENTS":
        getEvents();
        events && setMarvelArray(events);
        break;
      case "CHARACTERS":
        getCharacters();
        characters && setMarvelArray(characters);
        break;
      case "SERIES":
        getSeries();
        series && setMarvelArray(series);
        break;
      default:
        console.log("This is an error");
    }
  }, [
    characters,
    events,
    getCharacters,
    getEvents,
    getSeries,
    series,
    setMarvelArray,
    title,
  ]);

  const changeOrder = (event) => {
    setOrderByEvents(event.target.value);
  };

  const changeTitle = (newTitle) => {
    console.log(newTitle);
    setTitle(newTitle);
  };

  return (
    <div className="marvel">
      <div className="marvel__img"></div>
      <div className="marvel__filter">
        <button
          onClick={() => changeTitle("EVENTS")}
          className="marvel__filter-button"
        >
          EVENTS
        </button>
        <button
          onClick={() => changeTitle("CHARACTERS")}
          className="marvel__filter-button"
        >
          CHARACTERS
        </button>
        <button
          onClick={() => changeTitle("SERIES")}
          className="marvel__filter-button"
        >
          SERIES
        </button>
      </div>
      <div className="orderBy">
        <h3 style={{ color: "white" }}>Sort: </h3>
        <select value={orderByEvents} onChange={changeOrder}>
          {eventsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Gallery title={title} />
      <Footer />
    </div>
  );
};

export default MarvelPage;
