import styled, { keyframes } from 'styled-components'

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
        margin-bottom: 20px;
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

const opacity = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    padding-bottom: 25px;
    animation: ${opacity} .5s ease;
`;

export const Search = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        & {
            padding-bottom: 25px;
        }
    }   
`; 

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    color: #E0DEF0;
    text-align: center;
    margin-bottom: 10px;
    width: 100%;

    span {
        margin-bottom: 12px;
    }

    input {
        width: 70%;
        margin: 0 auto;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 10px;
        border-radius: 5px;
        background: #E0DEF0;
        border: 4px solid #6468B7;
        box-shadow: 0 6px #131313;
        color: #2F2F2F;
        font-size: 1.4rem;

        &:focus, &:hover {
            outline: none;
        }

        &::placeholder {
            font-size: 1.2rem;
            color: #6468B795;
            font-weight: bold;
        }
    }

    @media screen and (max-width: 768px) {
        input {
            font-size: 1.4rem;
            line-height: 1.3;
            padding-top: 5px;
            width: 85%;
        }
    }

    @media screen and (max-width: 540px) {
        input {
            width: 100%;
            font-size: .8rem;
            line-height: 1.3;
            padding-top: 12px;
        }

        span {
            line-height: 1.3;
        }
    }
`; 

export const OrderBy = styled.div`
    font-size: 1.2rem;
    width: max-content;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;

    span {
        color: #E0DEF0;
        margin-top: 10px;
        letter-spacing: 1px;

        span {
            color: #6468B7;
            text-shadow: 3px 3px #131313;
        }
    }

    .select {
        position: relative;

        svg {
            position: absolute;
            right: 10px;
            top: 30%;
            color: #1e1e1e;

            path {
                stroke-width: 125px;
            }
        }
    }

    select {
        width: 150px;
        margin-left: 15px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left:  10px;
        border-radius: 5px;
        background: #E0DEF0;
        border: 3px solid #6468B7;
        box-shadow: 0 5px #131313;
        color: #6468B7;
        font-size: 1.2rem;
        appearance: none;

        &:focus, &:hover {
            outline: none;
        }

        &::placeholder {
            color: #6468B7;
            font-weight: bold;
            font-size: 1.6rem;
        }
    }

    @media screen and (max-width: 540px) {

        & {
            flex-direction: column;
            align-items: center;
        }

        select {
            font-size: 1rem;
            width: 120px;
            margin-left: 0px;
        }

        .select {
            margin-top: 10px;
        }
    }
`; 

export const SelectWrapper = styled.div`
    position: relative;

    label {
        position: absolute;
        right: 10px;
        top: 3px;
    }
`;

export const NotFound = styled.h3`
    text-align: center;
    color: #B72529;
    font-size: 1.2rem;
    padding-top: 25px;

    span {
        color: #E0DEF0;
    }
`;