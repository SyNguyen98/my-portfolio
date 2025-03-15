import {render, screen} from "@testing-library/react";
import About from "./About.tsx";

test('Header renders with correct text', () => {
    render(<About/>)
    const header = screen.getByRole("heading", {name: "About Me"});
    expect(header).toBeInTheDocument();

    const headerSub = screen.getByText("Transforming ideas into digital experiences");
    expect(headerSub).toBeInTheDocument();
});

test('ProfileImage renders with correctly', () => {
    render(<About />);

    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();

    const profileImageContainer = screen.getByRole("img").parentElement;
    expect(profileImageContainer).toHaveClass("group-hover:scale-105");
});