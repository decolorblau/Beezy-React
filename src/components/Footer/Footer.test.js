import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given component Footer", () => {
  describe("When will call the footer component", () => {
    test("It should render a footer tag element", () => {
      const expected = "footer";

      render(<Footer />);
      const footerElement = screen.getByTitle("footer");

      expect(footerElement.className).toBe(expected);
    });
  });
});
