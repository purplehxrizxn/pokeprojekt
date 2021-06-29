import { 
    Container, Sprite, Figure, Types
} from './styles'

export default function Card(props) {

    function capitalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

     function returnGen(game){
         switch (game) {
            case 'red':
                 return 'Gen I';

            case 'gold':
                 return 'Gen II';

            case 'omega-ruby':
            case 'leafgreen':
            case 'firered':
            case 'emerald':
                 return 'Gen III';

            case 'diamond':
            case 'ruby':
            case 'platinum':
                 return 'Gen IV';

            case 'black':
            case 'black-2':
                 return 'Gen V';

            case 'x':
                 return 'Gen VI';

            case 'sun':
                 return 'Gen VII';

            case 'sword':
                 return 'Gen VIII';

             default: 
                    return 'Variant';
         }
    }

    // const sprites = Object.values(props.sprite);

    // function getSprites(obj) {
    //     const data = obj.map(
    //         (sprite) => {
    //             return sprite !== null ? sprite : '';
    //         }
    //     );

    //     return data;
    // }

    // console.log(getSprites(sprites));

    return(
        <Container>
            <div>
                <p>
                    { returnGen(props.gen) }
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