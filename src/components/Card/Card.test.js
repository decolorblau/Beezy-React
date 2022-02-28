import ReactTestRenderer from "react-test-renderer";
import MarvelContextProvider from "../../store/contexts/MarvelContextProvider";
import Card from "./Card";

describe("Given the component Card", () => {
  describe("When it receives a object", () => {
    test("Then it should render a card with the comic info inside", () => {
      const comic = {
        id: 2345,
        title: "Avengers",
        format: "comic",
        thumbnail: {
          path: "https://image.tmdb.org/t/p/w500",
          extension: "jpg",
        },
        prices: [{ price: 3.99 }],
      };

      const cardComponent = ReactTestRenderer.create(
        <MarvelContextProvider>
          <Card marvelComic={comic} />
        </MarvelContextProvider>
      );

      expect(cardComponent.toJSON).toMatchSnapshot();
    });
  });
});
