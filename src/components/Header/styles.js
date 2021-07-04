import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 25px;
    text-shadow: 3px 3px #131313;

    display: flex;
    flex-direction: column;
    height: 30vh;
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

    @media screen and (max-width: 400px) {
        h1 {
            font-size: 2.4rem;
        }
    }
`; 

