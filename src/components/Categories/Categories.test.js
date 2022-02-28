import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import { BrowserRouter as Router } from "react-router-dom";
import MarvelContextProvider from "../../store/contexts/MarvelContextProvider";
import ReactTestRenderer from "react-test-renderer";

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
});
