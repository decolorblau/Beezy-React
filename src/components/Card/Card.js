import "./Card.scss";
import PropTypes from "prop-types";

const Card = ({ marvelEvent }) => {
  return (
    <section className="card-container">
      <img
        className="card__image"
        src={`${marvelEvent.thumbnail.path}.${marvelEvent.thumbnail.extension}`}
        alt={`Poster of ${marvelEvent.title}`}
      />
      <div className="card__info">
        <div>
          <h3 className="card__title">{marvelEvent.title}</h3>
          {marvelEvent.start && marvelEvent.end ? (
            <div className="card__period">
              <p className="card__period--text">
                Start {marvelEvent.start.split(" ")[0]}
              </p>
              <p className="card__period--text">
                End {marvelEvent.end.split(" ")[0]}
              </p>
            </div>
          ) : (
            <div className="card__period">
              <p className="card__period--text">Start not defined</p>
              <p className="card__period--text">End not defined</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  marvelEvent: PropTypes.object,
};

export default Card;
