import styled from 'styled-components'

export const Body = styled.div`

    background: #1E1E1E;
    min-height: 100vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;

    @media screen and (min-width: 576px){
        max-width: 540px;
    }

    @media screen and (min-width: 768px){
        max-width: 720px;
    }

    @media screen and (min-width: 992px){
        max-width: 960px;
    }

    @media screen and (min-width: 1200px){
        max-width: 1000px;
    }

`;