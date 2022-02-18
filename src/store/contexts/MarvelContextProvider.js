import MarvelContext from "./MarvelContext";
import { useState } from "react";

const MarvelContextProvider = ({ children }) => {
  const [offsetEvents, setOffsetEvents] = useState(0);
  const [offsetCharacters, setOffsetCharacters] = useState(0);
  const [offsetSeries, setOffsetSeries] = useState(0);
  const [orderByEvents, setOrderByEvents] = useState("startDate");
  const [orderByCharacters, setOrderByCharacters] = useState("name");
  const [orderBySeries, setOrderBySeries] = useState("title");
  const [characters, setCharacters] = useState([]);
  const [marvelArray, setMarvelArray] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("EVENTS");
  const [limit, setLimit] = useState(24);

  return (
    <MarvelContext.Provider
      value={{
        offsetEvents,
        setOffsetEvents,
        offsetCharacters,
        setOffsetCharacters,
        offsetSeries,
        setOffsetSeries,
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
        title,
        marvelArray,
        setMarvelArray,
        setTitle,
        limit,
        setLimit,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelContextProvider;
