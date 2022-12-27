import { render, screen } from "@testing-library/react";
import Navbar from "../component/Navbar";

describe('testing nav component', () => {
  render(
    <Navbar />,
  )

  test('testing nav should render', () => {
    expect(screen.getByRole('input')).toBeTruthy()
  });
});
