import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import "./Gallery.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import MarvelContext from "../../store/contexts/MarvelContext";

const Gallery = ({ title }) => {
  const { marvelArray } = useContext(MarvelContext);

  return (
    marvelArray && (
      <>
        <h2 className="gallery-title">MARVEL {title}</h2>

        <div className="gallery-container">
          {marvelArray.map((item) => (
            <NavLink key={item.id} to={`/`}>
              <Card key={item.id} marvelEvent={item} />
            </NavLink>
          ))}
        </div>
      </>
    )
  );
};

Gallery.propTypes = {
  marvelArray: PropTypes.array,
};

export default Gallery;
