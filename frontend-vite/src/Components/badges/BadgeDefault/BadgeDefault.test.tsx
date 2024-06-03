import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BadgeDefault } from ".";

describe("BadgeDefault", () => {
  it("renders with the correct text", () => {
    render(<BadgeDefault descricao={"Badge Verde"}></BadgeDefault>);
    const badgeElement = screen.getByText(/Badge Verde/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("has the correct styles", () => {
    render(<BadgeDefault descricao={"Badge Verde"}></BadgeDefault>);
    const badgeElement = screen.getByText(/Badge Verde/i);
    expect(badgeElement).toHaveStyle(`
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      background-color: tomato;
      color: #fff;
    `);
  });
  it("has the correct styles if add cor=verde", () => {
    render(<BadgeDefault cor="verde" descricao={"Badge Verde"}></BadgeDefault>);
    const badgeElement = screen.getByText(/Badge Verde/i);
    expect(badgeElement).toHaveStyle(`
      display: inline-block;
      padding: 0.25em 0.4em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      background-color: #0ACC8E;
      color: #fff;
    `);
  });
});
