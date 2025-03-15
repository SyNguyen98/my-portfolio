import { render, screen } from "@testing-library/react";
import Footer from "./Footer.tsx";

test("Footer renders correctly", () => {
    render(<Footer/>)
    const leftText = screen.getByText(/© SyNguyen™ - A Guy Who Love Coding/i);
    const rightText = screen.getByText(/Last updated on/i);

    expect(leftText).toBeInTheDocument();
    expect(rightText).toBeInTheDocument();
});