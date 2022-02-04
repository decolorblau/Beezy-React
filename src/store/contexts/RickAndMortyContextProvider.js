import RickAndMortyContext from "./RickAndMortyContext";

const RickAndMortyContextProvider = ({ children }) => {
  return (
    <RickAndMortyContext.Provider>{children}</RickAndMortyContext.Provider>
  );
};

export default RickAndMortyContextProvider;
