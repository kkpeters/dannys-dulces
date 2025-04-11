import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { GetMenu } from "./components/GetMenu";
import { Footer } from "./components/Footer";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Markazi Text", serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
`;

const StyledHeaderNav = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Root() {
    return (
        <StyledDiv>
            <StyledHeaderNav>
                <Header />
                <Nav />
            </StyledHeaderNav>
            <Routes>
                <Route path={`/`} element={<HomePage />}/>
                <Route path={`/about`} element={<About />}/>
                <Route path={`/menu`} element={<GetMenu />}/>
            </Routes>
            <Footer />
        </StyledDiv>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
);


export default function App() {
    return (
        <>
            <RouterProvider router={router}/>
            </>
    );
}

