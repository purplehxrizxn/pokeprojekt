import styled from 'styled-components'

export const Container = styled.div`
    background: #191919;

    min-width: 330px;
    max-width: 330px;
    min-height: 330px;
    max-height: 330px;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #C9D3E0;

    p {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1.4rem;
        margin-top: 30px;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 540px) {
        min-width: 100%;
        max-width: 100%;
    }
`; 

export const Sprite = styled.div`
    height: 200px;
    width: 230px;
    background: #222;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        font-size: 1.2rem;
    }
`;

export const Figure = styled.div`
    background: #191919;
    height: 70%;
    width: 80%;
    margin: 0 auto;
    border: 3px solid #6990F0;
`;

export const Types = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;

    span {
        display: block;
        background: #6990F0;
        width: max-content;
        padding: 5px 7px;
        border-radius: 3px;
        color: #D0D6E0;
        text-shadow: 1px 1px #424242;
        box-shadow: 2px 2px #131313;
        font-size: 1rem !important;
    }
`;
