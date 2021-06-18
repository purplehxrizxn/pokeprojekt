import styled from 'styled-components'

export const Container = styled.div`
    background: #191919;
    border: 5px solid #6990F0;

    min-width: 380px;
    max-width: 380px;
    min-height: 380px;
    max-height: 380px;
    border-radius: 20px;
    box-shadow: 3px 3px #575757;
    padding: 30px 20px 20px;
    display: flex;
    flex-direction: column;
`; 



export const CardTitle = styled.h3`
    color: #C9D3E0;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
`;

export const Sprite = styled.div`
    display: flex;
    justify-content: center;

    div {
        width: 200px;
        height: 200px;
        background: #000;
        margin-bottom: 20px;

    }
`;


export const Data = styled.div`
    margin-top: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
        div {
            &:nth-child(1) {
                place-self: center;
                margin-bottom: 20px;

                span {
                    display: block;
                    font-size: 12px;
                    color: #f2f2f2;
                    padding: 7px 15px;
                    background: #6990F0;
                    border-radius: 5px;
                    box-shadow: 2px 2px #7F7F7F;
                }
            }

            &:nth-child(2) {
                margin-top: auto;

                span {
                    font-size: 14px;
                    color: #C9D3E0;
                }
            }
        }
    }
`;