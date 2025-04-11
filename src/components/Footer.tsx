import { styled } from "styled-components";

const StyledDiv = styled.div`
    padding: 2vw;
    background-color: #d5dcec;
`;

const StyledUl = styled.ul`
    margin-left: 1vw;
    margin-bottom: 2vw;
`;

const StyledLi = styled.li`
    list-style-type: none;
    text-decoration: none;
`;

const StyledA = styled.a`
    text-decoration: none;
    color: black;
`;

const KristineKodesLink = styled.a`
    color: black;
`;


export function Footer() {
    return (
        <StyledDiv>
            <h2>Contact: </h2>
            <StyledUl>
                <StyledLi><StyledA target="_blank" href="https://www.instagram.com/dannysdulces?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</StyledA></StyledLi>
            </StyledUl>

            <h3>Site developed by <KristineKodesLink target="_blank" href="https://kristinekodes.com/">Kristine Peters</KristineKodesLink></h3>

            <h3>Copyright © 2025 Danny's Dulces - All Rights Reserved</h3>
        </StyledDiv>
    );
}
