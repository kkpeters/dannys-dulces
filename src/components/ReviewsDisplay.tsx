import { Review } from "../interfaces/Types.ts";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ReviewDiv = styled.div`
    width: 20%;
    padding: 2vw;
    margin: 1vw;
    font-size: calc(5px + 1.5vw);
`;


export function ReviewsDisplay(temp: {data: Review[]}) {
    console.log("temps", temp);
    return (
        <StyledDiv>
        {
            temp.data.map((review: Review) =>
                          <ReviewDiv>
                            <h5>{review.text}</h5>
                          </ReviewDiv>
                         )
        }
        </StyledDiv>
    );

}
