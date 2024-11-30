import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar_mobile";
import '@testing-library/jest-dom';

test("Navbar renders correctly with all navigation links", () => {
  render(<Navbar />);
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Wizard")).toBeInTheDocument();
});

test("NavbarMobile integrates correctly with Navbar", () => {
  beforeAll(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
      configurable: true,
    });
  });
  
  render(<NavbarMobile />);
  const menuButton = screen.getByRole("button", { name: /menu/i });
  fireEvent.click(menuButton);
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Wizard")).toBeInTheDocument();
});