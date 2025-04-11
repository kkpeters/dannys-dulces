import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: #d5dcec;
    width: 30%;
`;

const StyledH1 = styled.h1`
    color: #3c4759;
    padding: 2vw 0 0 3vw;
    font-size: calc(10px + 3vw);
    font-family: "Rancho", cursive;
    font-weight: 500;
    font-style: normal;
}

`;

const StyledA = styled.a`
    text-decoration: none;
`;

const StyledH3 = styled.h3`
    padding: 0 0 2vw 3vw;
    font-size: calc(5px + 1.3vw);
    color: #3c4759;
`;

export function Header() {
    return (
        <StyledDiv>
            <StyledA href=""><StyledH1>Danny's Dulces</StyledH1></StyledA>
            <StyledH3>Fresh, homemade Peruvian pastries</StyledH3>
        </StyledDiv>
    );
}
