import styled from 'styled-components'

export const Container  = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 25px;
    padding-bottom: 25px;

    > :nth-child(even) {
        margin-bottom: 20px;
    }

    > :nth-child(odd) {
        margin-right: 20px;
    }

    > :last-child {
        align-self: flex-start;
    }

    @media screen and (max-width: 767px) {
        > :nth-child(n) {
            margin-bottom: 20px;
        }
    
        > :nth-child(odd) {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 540px) {
        > :nth-child(n) {
            margin-bottom: 20px;
        }
    
        > :nth-child(odd) {
            margin-right: 0;
        }
    }
`;

export const Error = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    span {
        display: flex;
        font-size: 2.2rem;
        margin-top: 25px;
        color: #eee;
        text-shadow: 3px 3px #131313;
    }

`;

export const Loading = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
    }
`;