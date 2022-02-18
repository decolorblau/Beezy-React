import axios from "axios";
import { useCallback, useContext } from "react";
import MarvelContext from "../store/contexts/MarvelContext";

const useMarvel = () => {
  const {
    offsetCharacters,
    offsetComics,
    offsetEvents,
    setCharacters,
    setComics,
    setEvents,
    orderByEvents,
    orderByComics,
    orderByCharacters,
    setMarvelArray,
    limit,
    search,
  } = useContext(MarvelContext);

  const urlApi = "http://gateway.marvel.com/v1/public/";

  /* <--- Characters --->*/
  const urlApiCharacters = `${urlApi}characters?orderBy=${orderByCharacters}&limit=${limit}&offset=${offsetCharacters}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiCharactersByName = `${urlApi}characters?nameStartsWith=${search}&orderBy=${orderByCharacters}&limit=${limit}&offset=${offsetCharacters}${process.env.REACT_APP_MARVEL_AUTH}`;

  const getCharacters = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiCharacters);
      const { data: characters } = data;
      setCharacters(characters.results);
      setMarvelArray(characters.results);
    } catch (error) {
      return error;
    }
  }, [setCharacters, setMarvelArray, urlApiCharacters]);

  const getCharactersByName = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiCharactersByName);
      const { data: characters } = data;
      setCharacters(characters.results);
      setMarvelArray(characters.results);
    } catch (error) {
      return error;
    }
  }, [setCharacters, setMarvelArray, urlApiCharactersByName]);

  /* <--- Comics --->*/
  const urlApiComics = `${urlApi}comics?orderBy=${orderByComics}&limit=${limit}&offset=${offsetComics}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiComicsByName = `${urlApi}comics?titleStartsWith=${search}&orderBy=${orderByComics}&limit=${limit}&offset=${offsetComics}${process.env.REACT_APP_MARVEL_AUTH}`;

  const getComics = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiComics);
      const { data: comics } = data;
      setComics(comics.results);
      setMarvelArray(comics.results);
    } catch (error) {
      return error;
    }
  }, [setMarvelArray, setComics, urlApiComics]);

  const getComicsByName = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiComicsByName);
      const { data: comics } = data;
      setComics(comics.results);
      setMarvelArray(comics.results);
    } catch (error) {
      return error;
    }
  }, [setMarvelArray, setComics, urlApiComicsByName]);

  /* <--- Events --->*/
  const urlApiEvents = `${urlApi}events?orderBy=${orderByEvents}&limit=${limit}&offset=${offsetEvents}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiEventsByName = `${urlApi}events?nameStartsWith=${search}&orderBy=${orderByEvents}&limit=${limit}&offset=${offsetEvents}${process.env.REACT_APP_MARVEL_AUTH}`;

  const getEvents = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiEvents);
      const { data: events } = data;
      setEvents(events.results);
      setMarvelArray(events.results);
    } catch (error) {
      return error;
    }
  }, [setEvents, setMarvelArray, urlApiEvents]);

  const getEventsByName = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiEventsByName);
      const { data: events } = data;
      setEvents(events.results);
      setMarvelArray(events.results);
    } catch (error) {
      return error;
    }
  }, [setEvents, setMarvelArray, urlApiEventsByName]);

  return {
    getCharacters,
    getComics,
    getEvents,
    getCharactersByName,
    getEventsByName,
    getComicsByName,
  };
};

export default useMarvel;
