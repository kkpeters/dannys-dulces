import { GetReviews } from "../components/GetReviews";
import { styled } from "styled-components";
import { FadeInSection } from "../components/FadeInSection";

const StyledDiv = styled.div`
    margin: 2vw;
    font-size: calc(5px + 2vw);
`;

const Parallax = styled.div`
    background-image: url("kitchen2.jpeg");

    min-height: 500px; 

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledP = styled.p`
    width: 80%;
    margin: 5vw auto;
    justify-content: center;

    text-align: center;
`;

const StyledH2 = styled.h2`
    margin-bottom: 1vw;
`;


export function HomePage() {
    return (
            <StyledDiv>
                <FadeInSection>
                    <h1>A Taste of Peru, Baked Just Like Home.</h1>
                    <StyledH2>Because it <em>was</em> baked at home.</StyledH2>
                </FadeInSection>
                <Parallax></Parallax>

                <FadeInSection>
                <StyledP>put something here idk</StyledP>
                </FadeInSection>

                <FadeInSection>
                <StyledP>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</StyledP>
                </FadeInSection>

                <FadeInSection>
                <StyledP>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</StyledP>
                </FadeInSection>


                <FadeInSection>
                <GetReviews />
                </FadeInSection>
            </StyledDiv>
    );
}
