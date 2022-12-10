import styled from 'styled-components' ;         //sozdadim stilizovanie componenti


export const FullContainer = styled.div`
width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
`

export const ContainerNavigation = styled.div`

margin: 24px auto;
width: fit-content;
`;

export const List = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

export const CardContainer = styled.div`
display: flex;
padding: 24px;
border-bottom: 1px solid;

& > * {
    margin-right: 10px;
}
`;
