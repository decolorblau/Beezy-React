import { useParams, NavLink } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import useMarvel from "../../hooks/useMarvel";
import MarvelContext from "../../store/contexts/MarvelContext";
import "./DetailPage.scss";

const DetailPage = () => {
  const { id } = useParams();
  const { comicData } = useContext(MarvelContext);
  const { getComicById } = useMarvel();
  const [newComic, setNewComic] = useState(false);

  useEffect(() => {
    setNewComic(false);
    getComicById(id);
  }, [getComicById, id]);

  useMemo(() => {
    if (comicData.length > 0) {
      setNewComic(...comicData);
    }
  }, [comicData]);

  return (
    newComic && (
      <section className="detail">
        <div
          className="detail__img"
          style={{
            backgroundImage: `url(${newComic.thumbnail.path}.${newComic.thumbnail.extension})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="detail__card">
          <div className="detail__image">
            <img
              src={`${newComic.thumbnail.path}.${newComic.thumbnail.extension}`}
              alt={`Poster of ${newComic.title}`}
            />
          </div>
          <div className="detail__close">
            <NavLink to="/">
              <p>{"<"} Back</p>
            </NavLink>
          </div>
          <div className="detail__info-box">
            <p className="detail__format">{newComic.format}</p>
            <h3 className="detail__title">{newComic.title.toUpperCase()}</h3>
            <div>
              {newComic.description ? (
                <p className="detail__description">{newComic.description}</p>
              ) : (
                <p className="detail__description">
                  No information available about this comic.{" "}
                </p>
              )}
            </div>
            <div className="line" />
            <div className="detail__more-info">
              <p>Publish: {newComic.dates[0].date.split("-", 1)}</p>
              {newComic.isbn !== "" ? (
                <p>ISBN: {newComic.isbn}</p>
              ) : (
                <p>ISBN: Not available</p>
              )}
              <p>Pages: {newComic.pageCount}</p>
              <p>Price: {newComic.prices[0].price} €</p>
            </div>
            <div className="detail__link">
              <a href={newComic.urls[0].url} className="detail__actors">
                Go to Official Link {">"}
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default DetailPage;
