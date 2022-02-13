import MarvelContext from "./MarvelContext";
import { useState } from "react";

const MarvelContextProvider = ({ children }) => {
  const [offsetEvents, setOffsetEvents] = useState(0);
  const [orderByEvents, setOrderByEvents] = useState("startDate");
  const [orderByCharacters, setOrderByCharacters] = useState("name");
  const [orderBySeries, setOrderBySeries] = useState("title");
  const [characters, setCharacters] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);

  return (
    <MarvelContext.Provider
      value={{
        offsetEvents,
        setOffsetEvents,
        characters,
        setCharacters,
        series,
        setSeries,
        events,
        setEvents,
        orderByEvents,
        setOrderByEvents,
        orderByCharacters,
        setOrderByCharacters,
        orderBySeries,
        setOrderBySeries,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelContextProvider;
