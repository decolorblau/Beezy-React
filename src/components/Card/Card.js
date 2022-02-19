import "./Card.scss";
import PropTypes from "prop-types";

const Card = ({ marvelComic }) => {
  return (
    <section className="card">
      <img
        className="card__image"
        src={`${marvelComic.thumbnail.path}.${marvelComic.thumbnail.extension}`}
        alt={`Poster of ${marvelComic.title}`}
      />
      <div className="card__info">
        <h3 className="card__title">{marvelComic.title}</h3>
        <div className="card__text">
          <p className="card__format">{marvelComic.format}</p>
          <p className="card__price">Price: {marvelComic.prices[0].price} €</p>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  marvelEvent: PropTypes.object,
};

export default Card;
