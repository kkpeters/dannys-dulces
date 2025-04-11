import { useState, useEffect } from "react";
import { Menu } from "../interfaces/Types.ts";
import { MenuDisplay } from "../components/MenuDisplay";
import { styled } from "styled-components";
import { FadeInSection } from "../components/FadeInSection";


const StyledDiv = styled.div`
    text-align: center;
    margin-top: 2vw;
`;

const StyledH3 = styled.h3`
    font-size: calc(5px + 3vw);
`;

const Contact = styled.div`
    width: 30%;
    background-color: #d5dcec;
    position: fixed;
    padding: 1vw;
    left: 63%;
    z-index: 1;
`;

const StyledH2 = styled.h2`
    margin-bottom: 1vw;
`;

const StyledA = styled.a`
    color: black;
`;

export function GetMenu() {
    const [menu, setMenu] = useState<Menu[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/menu.json`);
            const data = await res.json();
            setMenu(data.menu);
            console.log(data);
        }
      fetchData();
    }, []);


    return (
        <StyledDiv>
            <FadeInSection>
                <Contact>
                    <StyledH2>Interested in ordering?</StyledH2>
                    <h3>Head over to <StyledA target="_blank" href="https://www.instagram.com/dannysdulces?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</StyledA> and send me a message!
                        From there, we can discuss your order, any specifics,
                        and address any questions you may have!</h3>
                </Contact>
            </FadeInSection>
            <StyledH3>Menu:</StyledH3>
            <MenuDisplay data={menu} />
        </StyledDiv>
            
    );


}
