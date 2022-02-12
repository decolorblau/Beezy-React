import axios from "axios";
import { useCallback, useContext } from "react";
import MarvelContext from "../store/contexts/MarvelContext";

const useMarvel = () => {
  const {
    offsetCharacters,
    offsetSeries,
    offsetEvents,
    setCharacters,
    setSeries,
    setEvents,
  } = useContext(MarvelContext);
  const limit = 25;
  const urlApi = "http://gateway.marvel.com/v1/public/";

  const urlApiCharacters = `${urlApi}characters?limit=${limit}&offset=${offsetCharacters}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiSeries = `${urlApi}series?limit=${limit}&offset=${offsetSeries}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiEvents = `${urlApi}events?limit=${limit}&offset=${offsetEvents}${process.env.REACT_APP_MARVEL_AUTH}`;

  /* <--- Characters --->*/

  const getCharacters = useCallback(async () => {
    try {
      console.log(process.env.REACT_APP_MARVEL_AUTH);
      const { data } = await axios.get(urlApiCharacters);
      const { data: characters } = data;
      console.log(characters.results);
      setCharacters(characters.results);
    } catch (error) {
      return error;
    }
  }, [setCharacters, urlApiCharacters]);

  /* <--- Series --->*/

  const getSeries = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiSeries);
      const { data: series } = data;
      console.log(series.results);
      setSeries(series.results);
    } catch (error) {
      return error;
    }
  }, [setSeries, urlApiSeries]);

  /* <--- Events --->*/

  const getEvents = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiEvents);
      const { data: events } = data;
      console.log(events.results);
      setEvents(events.results);
    } catch (error) {
      return error;
    }
  }, [setEvents, urlApiEvents]);

  return {
    getCharacters,
    getSeries,
    getEvents,
  };
};

export default useMarvel;
