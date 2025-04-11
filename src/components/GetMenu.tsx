import { useState, useEffect } from "react";
import { Menu } from "../interfaces/Types.ts";
import { MenuDisplay } from "../components/MenuDisplay";
import { styled } from "styled-components";


const StyledDiv = styled.div`
    text-align: center;
    margin-top: 2vw;
`;

const StyledH3 = styled.h3`
    font-size: calc(5px + 3vw);
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
            <StyledH3>Menu:</StyledH3>
            <MenuDisplay data={menu} />
        </StyledDiv>
            
    );


}
