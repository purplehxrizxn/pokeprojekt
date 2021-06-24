import { 
    Container, Sprite, Figure, Types
} from './styles'

export default function Card(props) {

    return(
        <Container>
            <div>
                <p>
                    Gen II
                </p>

                <Sprite>
                    <span>
                        #{props.id}
                    </span>

                    <Figure>
                        <img src={props.sprite} alt="" />
                    </Figure>

                    <Types>
                        {props.types.map(
                            (type, i) => {
                                return <span key={i}>{type.type.name}</span>
                            }
                        )}
                    </Types>
                </Sprite>
                <h2>{props.name}</h2>
            </div>
        </Container>
    );
}