import Gallery from "./Gallery";
import { BrowserRouter as Router } from "react-router-dom";
import MarvelContext from "../../store/contexts/MarvelContext";
import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";

describe("Given the component Gallery", () => {
  describe("When it receives an array of comics", () => {
    test("Then it should render div tag with gallery-container class", () => {
      const comics = {
        comics: [
          {
            id: 2345,
            title: "Avengers",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 3.99 }],
          },
          {
            id: 2375,
            title: "Avengers 2",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 2.99 }],
          },
        ],
      };
      const expected = "gallery-container";

      render(
        <MarvelContext.Provider value={comics}>
          <Router>
            <Gallery />
          </Router>
        </MarvelContext.Provider>
      );

      const galleryElement = screen.getByTitle("Comics");

      expect(galleryElement.className).toBe(expected);
    });
    test("Then it should render as many cards s as the array length", () => {
      const comics = {
        comics: [
          {
            id: 2345,
            title: "Avengers",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 3.99 }],
          },
          {
            id: 2375,
            title: "Avengers 2",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 2.99 }],
          },
        ],
      };

      render(
        <MarvelContext.Provider value={comics}>
          <Router>
            <Gallery />
          </Router>
        </MarvelContext.Provider>
      );

      const galleryElement = screen.getAllByRole("heading");

      expect(galleryElement).toHaveLength(comics.comics.length);
    });
    test("Then it should render gallery of comics", () => {
      const comics = {
        comics: [
          {
            id: 2345,
            title: "Avengers",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 3.99 }],
          },
          {
            id: 2375,
            title: "Avengers 2",
            format: "comic",
            thumbnail: {
              path: "https://image.tmdb.org/t/p/w500",
              extension: "jpg",
            },
            prices: [{ price: 2.99 }],
          },
        ],
      };

      const galleryComponent = ReactTestRenderer.create(
        <MarvelContext.Provider value={comics}>
          <Router>
            <Gallery />
          </Router>
        </MarvelContext.Provider>
      );

      expect(galleryComponent.toJSON()).toMatchSnapshot();
    });
  });
  describe("When it receives an empty array of comics", () => {
    test("It should render 'No comics available'", () => {
      const comics = {
        comics: [],
      };
      const expected = "gallery-empty-container";

      render(
        <MarvelContext.Provider value={comics}>
          <Router>
            <Gallery />
          </Router>
        </MarvelContext.Provider>
      );

      const emptyGalleryElement = screen.getByTitle("No Comics");

      expect(emptyGalleryElement.className).toBe(expected);
    });
  });
});
