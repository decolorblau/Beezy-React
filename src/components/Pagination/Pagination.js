import { useContext } from "react";
import "./Pagination.scss";
import MarvelContext from "../../store/contexts/MarvelContext";

const Pagination = () => {
  const { limit, offset, setOffset, total } = useContext(MarvelContext);

  const beforePage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const nextPage = () => {
    if (offset < total) {
      setOffset(offset + limit);
    }
  };

  return (
    <>
      <div className="pagination">
        <button disabled={offset <= 0} onClick={beforePage}>
          {"<<"} Before
        </button>
        <p title="info-comics">
          {offset} - {offset + limit} of {total} comics
        </p>
        <button disabled={offset >= total} onClick={nextPage}>
          Next {">>"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
