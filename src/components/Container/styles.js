import styled, { keyframes } from 'styled-components'

const opacity = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const Screen = styled.div`
    background: #1e1e1e;
    max-height: 75vh;
    min-height: 75vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    border-radius: 5px;
    border: 8px solid #121212;
    overflow-y: scroll;
    position: relative;
    animation: ${opacity} .5s ease;

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

export const Glass = styled.div`
    width: 100%;
    background: #0E1D30;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    border: 3px solid #000000;
    padding-top: 40px;
    padding-bottom: 90px;
    border-radius: 25px 25px 50px 50px;
    position: relative;
    z-index: 10;

    a  {
        color: white;
        text-decoration: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 65px;
        font-size: .8rem;
        color: #E8EAFC;
        filter: drop-shadow(0 3px 0 #000);

        &:hover {
            color: white;
        }
    }

    @media screen and (min-width: 576px){
        max-width: 610px;
    }

    @media screen and (min-width: 768px){
        max-width: 800px;
    }

    @media screen and (min-width: 992px){
        max-width: 1040px;
    }

    @media screen and (min-width: 1200px){
        max-width: 1090px;
    }
`
export const Title = styled.h1`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.4rem;
    margin-top: 25px;
    color: #E8EAFC;
    filter: drop-shadow(0 5px 0 #000);
`;

export const TurnedOff = styled.div`
    position: absolute;
    background: #253c37ad;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: ${opacity} .5s;
`;

export const Button = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transform: translateX(-150%);
    border: 3px solid #000;
    background: #D1D8D9;
    position: absolute;
    cursor: pointer;

    .Light {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #2a2a2a;
        position: absolute;
        background: #1c6e12;
        top: 0;
        left: 50%;
        transform: translate(-50%, -300%);
        transition: .3s ease;

        &.on {
            background: #1bca05;
            filter: drop-shadow(0 0 4px #1bca0530);
        }
    }
`;

const rainbow = keyframes`

    0% {
        color: #dd00f3;
        transform: translate(-30%, -30%) scale(1.8); 
        opacity: .3;
    }

    15% { 
        color: #dd00f3; 
        transform: translate(-60%, -60%) scale(1.70); 
    }

    25% { 
        color: #e81d1d;
        transform: translate(-30%, 40%) scale(1.60); 
    }

    35% { 
        color: #ff2400;
        transform: translate(-30%, -40%) scale(1.50); 
        opacity: .6;
    }

    45% { 
        color: #e3e81d;
        transform: translate(-30%, -40%) scale(1.40); 
    }
    
    55% { 
        color: #e8b71d;
        transform: translate(-30%, -40%) scale(1.30); 
    }
    
    65% { 
        color: #1de840; 
        transform: translate(-30%, -40%) scale(1.20); 
        opacity: 1;
    }

    75% { 
        color: #1ddde8; 
        transform: translate(-30%, -40%) scale(1.10); 
    }

    85% { 
        color: #dd00f3; 
        transform: translate(-30%, -40%) scale(1.105); 
    }

    100% { 
        color: #2b1de8;
        transform: translate(-30%, -40%) scale(1); 
    }
`;

export const Animation = styled.div`
    position: absolute;
    background: #D5E0E4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: ${opacity} .5s ease;

    .Letters {
        position: absolute;
        text-align: center;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;

        span {
            font-size: 6.6rem;
            color: #2b1de8;
            filter: drop-shadow(0px 3px 0 #000);
            display: block;

            &:nth-child(1) {
                animation: ${rainbow} 1.25s ease;
            }

            &:nth-child(2) {
                animation: ${rainbow} 1.50s ease;
            }

            &:nth-child(3) {
                animation: ${rainbow} 1.75s ease;
            }

            &:nth-child(4) {
                animation: ${rainbow} 2s ease;
            }

            &:nth-child(5) {
                animation: ${rainbow} 2.25s ease;
            }

            &:nth-child(6) {
                animation: ${rainbow} 2.50s ease;
            }

            &:nth-child(7) {
                animation: ${rainbow} 2.75s ease;
            }

            &:nth-child(8) {
                animation: ${rainbow} 3s ease;
            }

            &:nth-child(9) {
                animation: ${rainbow} 3.25s ease;
            }

            &:nth-child(10) {
                animation: ${rainbow} 3.50s ease;
            }

            &:nth-child(11) {
                animation: ${rainbow} 3.75s ease;
            }
        }
    }

    h3 {
        font-size: 3.2rem;
        color: #d20de6;
        position: absolute;
        text-align: center;
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: -3px;
        filter: drop-shadow(0px 2px 0px black);

        span {
            font-size: 1.6rem;
            letter-spacing: -3px;
            position: absolute;
            top: 0;
        }
    }
`;