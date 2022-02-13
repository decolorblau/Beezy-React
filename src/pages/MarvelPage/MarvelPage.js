import { useContext, useEffect } from "react";
import useMarvel from "../../hooks/useMarvel";
import MarvelContext from "../../store/contexts/MarvelContext";
import Gallery from "../../components/Galley/Gallery";
import "./MarvelPage.scss";

const MarvelPage = () => {
  const { events, setOrderByEvents, orderByEvents } = useContext(MarvelContext);
  const { getEvents } = useMarvel();
  const eventsOptions = [
    { label: "By Date: Start to End", value: "startDate" },
    { label: "By Date: End to Start", value: "-startDate" },
    { label: "By Name: A - Z", value: "name" },
    { label: "By Name: Z - A", value: "-name" },
  ];

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const changeOrder = (event) => {
    setOrderByEvents(event.target.value);
  };

  return (
    <div className="marvel">
      <div className="marvel__img"></div>
      <div className="marvel__filter">
        <button autoFocus className="marvel__filter-button">
          EVENTS
        </button>
        <button
          style={{ "border-style": "none" }}
          className="marvel__filter-button"
        >
          CHARACTERS
        </button>
        <button className="marvel__filter-button">SERIES</button>
      </div>
      <div className="orderBy">
        <h3 style={{ color: "white" }}>Sort: </h3>
        <select
          style={{ color: "white" }}
          value={orderByEvents}
          onChange={changeOrder}
        >
          {eventsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Gallery events={events} />
    </div>
  );
};

export default MarvelPage;
