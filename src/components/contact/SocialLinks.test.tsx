import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks.tsx";

test('SocialLinks renders correctly', () => {
    render(<SocialLinks />);
    const email = screen.getByRole("link", {name: /nguyen.nguyenhongsy@outlook.com.vn/i});
    expect(email).toBeInTheDocument();

    const linkedin = screen.getByRole("link", {name: /LinkedIn/i});
    expect(linkedin).toBeInTheDocument();

    const insta = screen.getByRole("link", {name: /Instagram/i});
    expect(insta).toBeInTheDocument();

    const facebook = screen.getByRole("link", {name: /Facebook/i});
    expect(facebook).toBeInTheDocument();

    const github = screen.getByRole("link", {name: /GitHub/i});
    expect(github).toBeInTheDocument();

    const youtube = screen.getByRole("link", {name: /YouTube/i});
    expect(youtube).toBeInTheDocument();
});