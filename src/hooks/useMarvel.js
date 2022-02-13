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
    orderByEvents,
    orderBySeries,
    orderByCharacters,
  } = useContext(MarvelContext);
  const limit = 24;
  const urlApi = "http://gateway.marvel.com/v1/public/";

  const urlApiCharacters = `${urlApi}characters?orderBy=${orderByCharacters}&limit=${limit}&offset=${offsetCharacters}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiSeries = `${urlApi}series?orderBy=${orderBySeries}&limit=${limit}&offset=${offsetSeries}${process.env.REACT_APP_MARVEL_AUTH}`;
  const urlApiEvents = `${urlApi}events?orderBy=${orderByEvents}&limit=${limit}&offset=${offsetEvents}${process.env.REACT_APP_MARVEL_AUTH}`;

  /* <--- Characters --->*/

  const getCharacters = useCallback(async () => {
    try {
      const { data } = await axios.get(urlApiCharacters);
      const { data: characters } = data;
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
