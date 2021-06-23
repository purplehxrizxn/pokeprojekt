import styled from 'styled-components'

export const Container  = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;

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