import axios from "axios";
import { useCallback, useContext } from "react";
import MarvelContext from "../store/contexts/MarvelContext";

const useMarvel = () => {
  const {
    offset,
    setComics,
    orderBy,
    limit,
    setTotal,
    setComicData,
    setIsLoading,
  } = useContext(MarvelContext);

  const urlApi = "https://gateway.marvel.com/v1/public/";

  const getComics = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${urlApi}comics`, {
        params: {
          orderBy: orderBy,
          limit: limit,
          offset: offset,
          ts: process.env.REACT_APP_MARVEL_TS,
          apikey: process.env.REACT_APP_MARVEL_APIKEY,
          hash: process.env.REACT_APP_MARVEL_HASH,
        },
      });
      const { data: comics } = data;
      setIsLoading(false);
      setComics(comics.results);
      setTotal(comics.total);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  }, [setIsLoading, orderBy, limit, offset, setComics, setTotal]);

  const getComicsByFormat = useCallback(
    async (format) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${urlApi}comics`, {
          params: {
            orderBy: orderBy,
            limit: limit,
            offset: offset,
            ts: process.env.REACT_APP_MARVEL_TS,
            apikey: process.env.REACT_APP_MARVEL_APIKEY,
            hash: process.env.REACT_APP_MARVEL_HASH,
            format: format,
          },
        });
        const { data: comics } = data;
        setIsLoading(false);
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setIsLoading, setTotal]
  );

  const getComicsByName = useCallback(
    async (search) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${urlApi}comics`, {
          params: {
            orderBy: orderBy,
            limit: limit,
            offset: offset,
            ts: process.env.REACT_APP_MARVEL_TS,
            apikey: process.env.REACT_APP_MARVEL_APIKEY,
            hash: process.env.REACT_APP_MARVEL_HASH,
            titleStartsWith: search,
          },
        });
        const { data: comics } = data;
        setIsLoading(false);
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setIsLoading, setTotal]
  );
  const getComicsByFormatAndByName = useCallback(
    async (search, format) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${urlApi}comics`, {
          params: {
            orderBy: orderBy,
            limit: limit,
            offset: offset,
            ts: process.env.REACT_APP_MARVEL_TS,
            apikey: process.env.REACT_APP_MARVEL_APIKEY,
            hash: process.env.REACT_APP_MARVEL_HASH,
            format: format,
            titleStartsWith: search,
          },
        });
        const { data: comics } = data;
        setIsLoading(false);
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setIsLoading, setTotal]
  );
  const getComicById = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${urlApi}comics/${id}`, {
          params: {
            ts: process.env.REACT_APP_MARVEL_TS,
            apikey: process.env.REACT_APP_MARVEL_APIKEY,
            hash: process.env.REACT_APP_MARVEL_HASH,
          },
        });
        const { data: comic } = data;
        setIsLoading(false);
        setComicData(comic.results);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    },
    [setComicData, setIsLoading]
  );

  return {
    getComics,
    getComicsByFormat,
    getComicsByName,
    getComicsByFormatAndByName,
    getComicById,
  };
};

export default useMarvel;
