import { styled } from "styled-components";
import { FadeInSection } from "../components/FadeInSection";

const StyledDiv = styled.div`
    margin: 5vw 5vw 9vw 5vw;
`;

const StyledH1 = styled.h1`
    font-size: calc(3px + 2.5vw);
    margin: 2vw;
    border-bottom: double 4px #8d9ec4;
`;


const StyledImg = styled.img`
    max-width: 20%;
    padding: 0.2vw;
    border: double 5px #8d9ec4;
`;

const PicSideByDes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledP = styled.p`
    font-size: calc(4px + 1.5vw);
    margin-left: 2vw;
    width: 60%;
    vertical-align: middle;
`;

export function About() {
    return (
        <FadeInSection>
            <StyledDiv>
                <StyledH1>About Danny</StyledH1>
                <PicSideByDes>
                    <StyledImg src="danny.jpeg" alt="a picture of Danny, the founder!"/>
                    <StyledP>Hello, my name is Danny Lacarcel. I am a socio-psychologist with a strong passion for community outreach and resorative justice. I have created and worked closely with multiple groups related to helping formerly incarcerated individuals reintegrate into society, through the means of higher education within southern California. I have also collaborated with local nonprofits in my community to help “at promise” youth where we provided: health services, basic needs, education of life path and career options, mentoring and group therapy. My overall goal within my educational journey and beyond is to contribute to the dismantling of the school to prison pipeline, so that no one will ever have to experience generational cycles of violence.</StyledP>
                </PicSideByDes>
            </StyledDiv>
            </FadeInSection>
    );
}
