import { render, screen, fireEvent } from "@testing-library/react";
import ButtonPrimary from "@/components/button_primary";
import '@testing-library/jest-dom';

test("ButtonPrimary renders correctly", () => {
  render(<ButtonPrimary>Click Me</ButtonPrimary>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("ButtonPrimary handles click event", () => {
  const handleClick = jest.fn();
  render(<ButtonPrimary onClick={handleClick}>Click Me</ButtonPrimary>);
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("ButtonPrimary applies className prop", () => {
  render(<ButtonPrimary className="custom-class">Click Me</ButtonPrimary>);
  expect(screen.getByText("Click Me")).toHaveClass("custom-class");
});
