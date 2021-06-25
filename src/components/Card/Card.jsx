import { 
    Container, Sprite, Figure, Types
} from './styles'

export default function Card(props) {

    function capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    // function returnGen(game){
    //     switch (game) {
    //         case 'red':
    //         case 'gold':

    //         default: 'none';
    //     }
    // }

    return(
        <Container>
            <div>
                <p>
                    {props.gen}
                </p>

                <Sprite>
                    <span>
                        #{props.id}
                    </span>

                    <Figure className={props.types[0].type.name}>
                        <img src={props.sprite} alt="" />
                    </Figure>

                    <Types>
                        {props.types.map(
                            (type, i) => {
                                return <span key={i} className={type.type.name}>{type.type.name.toUpperCase()}</span>
                            }
                        )}
                    </Types>
                </Sprite>
                <h2>{capitalize(props.name)}</h2>
            </div>
        </Container>
    );
}