import { fireEvent, render, screen } from "@testing-library/react";
import Categories from "./Categories";
import { BrowserRouter as Router } from "react-router-dom";
import MarvelContextProvider from "../../store/contexts/MarvelContextProvider";
import MarvelContext from "../../store/contexts/MarvelContext";
import ReactTestRenderer from "react-test-renderer";
import { renderHook, act } from "@testing-library/react-hooks";
import useMarvel from "../../hooks/useMarvel";

/* const mockGetComics = jest.fn();

jest.mock("../../hooks/useMarvel.js"); */

describe("Given the component Categories", () => {
  describe("When it receives an array of categories", () => {
    test("Then it should return as many buttons as the array length", () => {
      const formatList = [
        { id: 1, format: "comic" },
        { id: 2, format: "magazine" },
        { id: 3, format: "trade paperback" },
      ];

      render(
        <MarvelContextProvider>
          <Router>
            <Categories formats={formatList} />
          </Router>
        </MarvelContextProvider>
      );

      const formatsRendered = screen.getAllByRole("button");

      expect(formatsRendered).toHaveLength(formatList.length);
    });
    test("Then it should be a button with comic text, another with magazine text an another with trade paperback", () => {
      const formatList = [
        { id: 1, format: "comic" },
        { id: 2, format: "magazine" },
        { id: 3, format: "trade paperback" },
      ];

      render(
        <MarvelContextProvider>
          <Router>
            <Categories formats={formatList} />
          </Router>
        </MarvelContextProvider>
      );

      const comicButton = screen.getByRole("button", { name: "COMIC" });
      const magazineButton = screen.getByRole("button", { name: "MAGAZINE" });
      const paperBackButton = screen.getByRole("button", {
        name: "TRADE PAPERBACK",
      });

      expect(comicButton).toBeInTheDocument();
      expect(magazineButton).toBeInTheDocument();
      expect(paperBackButton).toBeInTheDocument();
    });
    test("Then it should render buttons with formatList info inside", () => {
      const formatList = [
        { id: 1, format: "comic" },
        { id: 2, format: "magazine" },
        { id: 3, format: "trade paperback" },
      ];

      const categoriesComponent = ReactTestRenderer.create(
        <MarvelContextProvider>
          <Categories formats={formatList} />
        </MarvelContextProvider>
      );

      expect(categoriesComponent.toJSON()).toMatchSnapshot();
    });
  });
  /*   describe("When it receives an array of categories and", () => {
    test("Then it should call", () => {
      const { result } = renderHook(() => useMarvel());
      const marvelContext = {
        offset: 20,
        setOffset: jest.fn(),
        limit: 20,
        orderBy: "title",
        setTitle: jest.fn(),
        setComics: [],
        setTotal: 0,
        setComicData: [],
      };

      const formatList = [
        { id: 0, format: "all comics" },
        { id: 1, format: "comic" },
        { id: 2, format: "magazine" },
        { id: 3, format: "trade paperback" },
      ];

      render(
        <MarvelContext.Provider value={marvelContext}>
          <Router>
            <Categories formats={formatList} />
          </Router>
        </MarvelContext.Provider>
      );

      const allComicsButton = screen.getByRole("button", {
        name: "ALL COMICS",
      });

      fireEvent.click(allComicsButton);

      expect(result.current.getComics).toHaveBeenCalled();
    });
  }); */
});
