import MarvelContext from "./MarvelContext";

const MarvelContextProvider = ({ children }) => {
  return <MarvelContext.Provider>{children}</MarvelContext.Provider>;
};

export default MarvelContextProvider;
