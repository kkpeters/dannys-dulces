import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
    background-color: #d5dcec;
    width: 70%;
`;

const StyledLink = styled(Link)`
    color: #3c4759;
    text-decoration: none;
    margin-right: 7vw;
    font-size: calc(4px + 1.5vw);
    line-height: 6;
`;


export function Nav() {
    return (
        <>
            <StyledNav>
                <StyledLink to={`/`}>Home</StyledLink>
                <StyledLink to={`/menu`}>Menu</StyledLink>
                <StyledLink to={`/about`}>About</StyledLink>
            </StyledNav>
        </>
    )
}


