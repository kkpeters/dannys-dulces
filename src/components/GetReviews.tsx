import { useState, useEffect } from "react";
//import { JokePreview } from "./JokePreview.tsx";
import { Review } from "../interfaces/Types.ts";
import { ReviewsDisplay } from "../components/ReviewsDisplay";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 3vw;
    font-size: calc(9px + 1.3vw);
`;

export function GetReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/reviews.json`);
            const data = await res.json();
            setReviews(data.reviews);
            console.log(data);
        }
      fetchData();
    }, []);


    return (
        <StyledDiv>
            <h3>Reviews from customers!</h3>
            <ReviewsDisplay data={reviews} />
        </StyledDiv>
            
    );
}
