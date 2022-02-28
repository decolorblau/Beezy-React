import axios from "axios";
import { useCallback, useContext } from "react";
import MarvelContext from "../store/contexts/MarvelContext";

const useMarvel = () => {
  const { offset, setComics, orderBy, limit, setTotal, setComicData } =
    useContext(MarvelContext);

  const urlApi = process.env.REACT_APP_MARVEL_URL;

  const getComics = useCallback(async () => {
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
      setComics(comics.results);
      setTotal(comics.total);
    } catch (error) {
      return error;
    }
  }, [orderBy, limit, offset, setComics, setTotal]);

  const getComicsByFormat = useCallback(
    async (format) => {
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
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setTotal]
  );

  const getComicsByName = useCallback(
    async (search) => {
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
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setTotal]
  );
  const getComicsByFormatAndByName = useCallback(
    async (search, format) => {
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
        setComics(comics.results);
        setTotal(comics.total);
      } catch (error) {
        return error;
      }
    },
    [limit, offset, orderBy, setComics, setTotal]
  );
  const getComicById = useCallback(
    async (id) => {
      try {
        const { data } = await axios.get(`${urlApi}comics/${id}`, {
          params: {
            ts: process.env.REACT_APP_MARVEL_TS,
            apikey: process.env.REACT_APP_MARVEL_APIKEY,
            hash: process.env.REACT_APP_MARVEL_HASH,
          },
        });
        const { data: comic } = data;
        setComicData(comic.results);
      } catch (error) {
        return error;
      }
    },
    [setComicData]
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
