import { 
    Container, Sprite, Figure, Types
} from './styles'
import { useState, useEffect  } from 'react'

export default function Card(props) {


    return(
        <Container>
            <div>
                <p>
                    Gen II
                </p>

                <Sprite>
                    <span>
                        #197
                    </span>

                    <Figure>
                        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png" alt="" />
                    </Figure>

                    <Types>
                        <span> Water </span>
                    </Types>
                </Sprite>
                <h2>{props.name}</h2>
            </div>
        </Container>
    );
}