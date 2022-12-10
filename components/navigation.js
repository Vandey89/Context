import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const CustomLink = styled(Link)`
padding: 20px;
margin: 0 20px;
`;

export const Navigation  =  () => { 
    return (
        <div>
            <CustomLink to="/" >Deal List</CustomLink>
            <CustomLink to="/form" >add new deal</CustomLink>
        </div>
    )
}