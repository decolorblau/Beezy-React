import MarvelContext from "./MarvelContext";
import { useState } from "react";

const MarvelContextProvider = ({ children }) => {
  const [offsetCharacters, setOffsetCharacters] = useState(0);
  const [offsetSeries, setOffsetSeries] = useState(0);
  const [offsetEvents, setOffsetEvents] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);

  return (
    <MarvelContext.Provider
      value={{
        offsetCharacters,
        setOffsetCharacters,
        offsetEvents,
        setOffsetEvents,
        offsetSeries,
        setOffsetSeries,
        characters,
        setCharacters,
        series,
        setSeries,
        events,
        setEvents,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelContextProvider;
