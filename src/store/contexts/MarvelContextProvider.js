import MarvelContext from "./MarvelContext";
import { useState } from "react";

const MarvelContextProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [orderBy, setOrderBy] = useState("title");
  const [comics, setComics] = useState([]);
  const [limit, setLimit] = useState(24);
  const [total, setTotal] = useState(51242);
  const [searchByName, setSearchByName] = useState(false);
  const [comicData, setComicData] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [title, setTitle] = useState("all comics");

  return (
    <MarvelContext.Provider
      value={{
        offset,
        setOffset,
        comics,
        setComics,
        orderBy,
        setOrderBy,
        limit,
        setLimit,
        total,
        setTotal,
        searchByName,
        setSearchByName,
        comicData,
        setComicData,
        title,
        setTitle,
        lastSearch,
        setLastSearch,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

export default MarvelContextProvider;
