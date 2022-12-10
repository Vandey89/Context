import React from 'react';
import {useEffect} from "react";
import styled from 'styled-components';
// import { useParams, useNavigate } from 'react-router-dom';


export const Page = styled.div `
background: ${({color = 'blue'}) => color};
width: 100vw;
height: 100vw;
`;


export const NotFound = () => {
    useEffect(() => {
        let title = document.title;
        document.title = 'Not Found';
    return () => {
        document.title = title;
        };
    }, []);
    return <Page color="green" >Not Found</Page>
}

