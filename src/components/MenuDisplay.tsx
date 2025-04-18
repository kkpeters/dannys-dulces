import { Menu } from "../interfaces/Types.ts";
import { styled } from "styled-components";
import { FadeInSection } from "../components/FadeInSection";

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2vw 2vw 2vw 5vw;
`;

const MenuItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    margin: 2vw;

`;

const ItemInformation = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1vw;
`;

const StyledImg = styled.img`
    max-width: 50%;
    padding: 0.2vw;
    border: double 5px #8d9ec4;
`;

const StyledH3 = styled.h3`
    font-size: calc(2px + 2vw);
`;
const StyledH5 = styled.h5`
    font-size: calc(3px + 1.5vw);
`;
const StyledP = styled.p`
    font-size: calc(3px + 1.4vw);
`;

export function MenuDisplay(temp: {data: Menu[]}) {
    console.log("temps", temp);
    return (
        <StyledDiv>
        {
            temp.data.map((menu: Menu) =>
                          <FadeInSection key={menu.id}>
                              <MenuItemDiv>
                                <StyledImg src={menu.imageURL} alt={menu.imageURL} />
                                <ItemInformation>
                                    <StyledH3>{menu.item_name}</StyledH3>
                                    <StyledP>{menu.description}</StyledP>
                                    <StyledH5>Price: ${menu.price}</StyledH5>
                                </ItemInformation>
                              </MenuItemDiv>
                          </FadeInSection>
                         )
        }
        </StyledDiv>
    );

}
