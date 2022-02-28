import Pagination from "./Pagination";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MarvelContext from "../../store/contexts/MarvelContext";
import ReactTestRenderer from "react-test-renderer";

beforeEach(cleanup);

describe("Given the component Pagination", () => {
  describe("When it receives an object with limit, offset, setOffset and total", () => {
    test("Then it should render pagination component", () => {
      const paginationValues = {
        limit: 20,
        offset: 0,
        setOffset: 20,
        total: 40,
      };

      const paginationComponent = ReactTestRenderer.create(
        <MarvelContext.Provider value={paginationValues}>
          <Router>
            <Pagination />
          </Router>
        </MarvelContext.Provider>
      );

      expect(paginationComponent.toJSON()).toMatchSnapshot();
    });
    test("Then it should be a button with comic text, another with magazine text an another with trade paperback", () => {
      const paginationValues = {
        limit: 20,
        offset: 0,
        setOffset: 20,
        total: 40,
      };
      const expected = "0 - 20 of 40 comics";

      render(
        <MarvelContext.Provider value={paginationValues}>
          <Router>
            <Pagination />
          </Router>
        </MarvelContext.Provider>
      );

      const infoComics = screen.getByTitle("info-comics").textContent;

      expect(infoComics).toContain(expected);
    });
    describe("And When Next button is clicked", () => {
      test("Then it should call nextPage function", () => {
        const paginationValues = {
          limit: 20,
          offset: 0,
          setOffset: jest.fn(),
          total: 40,
        };
        render(
          <MarvelContext.Provider value={paginationValues}>
            <Router>
              <Pagination />
            </Router>
          </MarvelContext.Provider>
        );

        const nextButton = screen.getByRole("button", {
          name: "Next >>",
        });
        expect(nextButton).toBeInTheDocument();

        fireEvent.click(nextButton);

        expect(paginationValues.setOffset).toHaveBeenCalled();
      });
    });
    describe("And When Before button is clicked", () => {
      test("Then it should call nextPage function", () => {
        const paginationValues = {
          limit: 20,
          offset: 20,
          setOffset: jest.fn(),
          total: 40,
        };
        render(
          <MarvelContext.Provider value={paginationValues}>
            <Router>
              <Pagination />
            </Router>
          </MarvelContext.Provider>
        );

        const beforeButton = screen.getByRole("button", {
          name: "<< Before",
        });

        expect(beforeButton).toBeInTheDocument();

        fireEvent.click(beforeButton);

        expect(paginationValues.setOffset).toHaveBeenCalled();
      });
    });
  });
});
