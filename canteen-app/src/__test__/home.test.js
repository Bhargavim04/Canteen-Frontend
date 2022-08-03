import Home from "../components/home";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Home component test cases", () => {
  //define test cases
  test("verify home component title is correct or not", () => {
    // Render Counter component into virtual dom
    const component = render(<Home />);
    // Get title element by using testid
    const titleEle = component.getByTestId("title");
    // Compare title
    expect(titleEle.textContent).toBe("Canteen Automation System");
  }); //test-end
});