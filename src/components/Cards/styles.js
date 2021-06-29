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
        & {
            width: 90%;
            margin: 0 auto;
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

export const LoadMore = styled.button`
    margin: 0 auto;
    display: flex;
    align-self: center;
    justify-self: center;
    padding: 8px 10px;
    border: 2px solid #6468B7;
    border-radius: 5px;
    outline: none;
    color: #6468B7;
    background: #E0DEF0;
    box-shadow: 0 3px #131313;
    transition: .3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 6px #131313;
        transform: translateY(-3px);
    }

`;