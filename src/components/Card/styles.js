import styled from 'styled-components'

export const Container = styled.div`
    background: #191919;
    transition: .2s;
    box-shadow: 4px 4px #131313;

    
    &:hover {
        box-shadow: 6px 6px #131313;;
    }

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
    display: flex;
    align-items: center;
    justify-content: center;

    &.normal {
        border: 3px solid #A5AB76;
    }

    &.fighting {
        border: 3px solid #B72529;
    }
    
    &.flying {
        border: 3px solid #AD7EF0;
    }

    &.poison {
        border: 3px solid #98269B;
    }
    
    &.ground {
        border: 3px solid #D8C564;
    }

    &.rock {
        border: 3px solid #AFA534;
    }

    &.bug {
        border: 3px solid #A1C014;
    }

    &.ghost {
        border: 3px solid #734A98;
    }

    &.steel {
        border: 3px solid #B9B4CF;
    }

    &.fire {
        border: 3px solid #E6802E;
    }

    &.water {
        border: 3px solid #6990F0;
    }

    &.grass {
        border: 3px solid #75CF49;
    }

    &.electric {
        border: 3px solid #EED727;
    }

    &.psychic {
        border: 3px solid #EE4788;
    }

    &.ice {
        border: 3px solid #9ED8D7;
    }

    &.dark {
        border: 3px solid #6B5847;
    }

    &.fairy {
        border: 3px solid #FA41D5;
    }

    &.dragon {
        border: 3px solid #8200FA;
    }

`;

export const Types = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;

    span {
        display: block;
        width: max-content;
        padding: 5px 7px;
        border-radius: 3px;
        color: #D0D6E0;
        text-shadow: 1px 1px #424242;
        box-shadow: 2px 2px #131313;
        font-size: .8rem !important;
        transition: .2s;

        &:nth-child(2){
            margin-left: 10px;
        }

        &:hover {
            box-shadow: 2px 2px black;
            cursor: pointer;
        }

        &.normal {
            background: #A5AB76;
        }

        &.fighting {
            background: #B72529;
        }
        
        &.flying {
            background: #AD7EF0;
        }

        &.poison {
            background: #98269B;
        }
        
        &.ground {
            background: #D8C564;
        }

        &.rock {
            background: #AFA534;
        }

        &.bug {
            background: #A1C014;
        }

        &.ghost {
            background: #734A98;
        }

        &.steel {
            background: #B9B4CF;
        }

        &.fire {
            background: #E6802E;
        }

        &.water {
            background: #6990F0;
        }

        &.grass {
            background: #75CF49;
        }

        &.electric {
            background: #EED727;
        }

        &.psychic {
            background: #EE4788;
        }

        &.ice {
            background: #9ED8D7;
        }

        &.dark {
            background: #6B5847;
        }

        &.fairy {
            background: #FA41D5;
        }

        &.dragon {
            background: #8200FA;
        }

    }
`;
