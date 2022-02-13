import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import "./Gallery.scss";
import PropTypes from "prop-types";

const Gallery = ({ events }) => {
  return (
    events && (
      <>
        <h2 className="gallery-title">MARVEL EVENTS</h2>

        <div className="gallery-container">
          {events.map((event) => (
            <NavLink key={event.id} to={`/`}>
              <Card key={event.id} marvelEvent={event} />
            </NavLink>
          ))}
        </div>
      </>
    )
  );
};

Gallery.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Gallery;
