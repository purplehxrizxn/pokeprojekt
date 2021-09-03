import styled, { keyframes } from 'styled-components'

const heart = keyframes`
    from {
        transform: scale(1.50);
    }

    to {
        transform: scale(1);
    }
`;

export const Container = styled.div`
    background: #191919;
    transition: .3s ease-in-out;
    box-shadow: 0 5px #131313;
    
    &:hover {
        box-shadow: 0 10px #131313;
        transform: translateY(-5px);
    }

    min-width: 310px;
    max-width: 310px;
    max-height: 310px;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #C9D3E0;
    position: relative;

    p {
        font-size: 0.9rem;
        text-align: right;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1.3rem;
        margin-top: 25px;
        letter-spacing: 1px;
        color: #eee;
        text-align: left;
        position: relative;

        .Image {
            position: absolute;
            transform: translateY(-100%);
            right: 0;
            cursor: pointer;
            z-index: 10;
    
            img {
                width: 20px;
                height: 18px;
                filter: sepia(1);
                transition: .5s ease-out;
                
                &.favorite {
                    animation: ${heart} .5s;
                    filter: sepia(0);
                    transition: .5s cubic-bezier(0.01, 0.75, 0.58, 1);
                }
            }
        }
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
    border: 1px solid #2d2d2d;
    margin: 0 auto;

    span {
        font-size: .9rem;
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
