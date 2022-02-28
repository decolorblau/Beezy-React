import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import "./Gallery.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import MarvelContext from "../../store/contexts/MarvelContext";

const Gallery = () => {
  const { comics } = useContext(MarvelContext);

  return comics && comics.length > 0 ? (
    <>
      <div className="gallery-container" title="Comics">
        {comics.map((comic) => (
          <NavLink key={comic.id} to={`/${comic.id}`}>
            <Card key={comic.id} marvelComic={comic} />
          </NavLink>
        ))}
      </div>
    </>
  ) : (
    <div className="gallery-empty-container" title="No Comics">
      <p>No comics available</p>
    </div>
  );
};

Gallery.propTypes = {
  comics: PropTypes.array,
};

export default Gallery;
