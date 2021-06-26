import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 25px;
    text-shadow: 3px 3px #131313;

    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: flex-end;
    
    h1 {
        font-size: 3.2rem;
        color: white;
        text-align: center;
        letter-spacing: 2px;
        font-weight: 100;
        margin-bottom: 55px;
        text-shadow: 4px 4px #131313;
    }
`; 

export const Search = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        color: #1E1E1E;
        font-size: 1.2rem;

        &:focus, &:hover {
            outline: none;
        }

        &::placeholder {
            font-size: 1rem;
            color: #6468B7;
            font-weight: bold;
        }
    }

    @media screen and (max-width: 540px) {
        input {
            width: 100%;
            font-size: 1rem;
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

    span {
        color: #E0DEF0;
        margin-top: 10px;
        span {
            color: #6468B7;
            font-size: 1.6rem;
            text-shadow: 3px 3px #131313;
        }
    }

    select {
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
        }
    }

    @media screen and (max-width: 540px) {
        select {
            font-size: 1rem;
            width: 90px;
            margin-left: 7px;
        }
    }
`; 