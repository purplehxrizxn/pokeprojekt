import { 
    Container, Sprite, Figure, Types
} from './styles'

import Heart from '../../assets/heart.png'

export default function Card({ 
    gen, 
    id, 
    name, 
    sprite, 
    types,
    getFilter,
    favoritePokemon,
    favorite
}) {

    function returnWithZeros(number) {
        let result = number.toString();

        if (result.length === 1) {
            return `#00${result}`;
        } else if (result.length === 2) {
            return `#0${result}`;
        } else {
            return `#${result}`;
        }
    }

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
                return 'Variation';
         }
    }

    return(
        <Container>
            <div>
                <p>
                    {returnGen(gen)}
                </p>

                <Sprite>
                    <span>
                        {returnWithZeros(id)}
                    </span>

                    <Figure className={types[0].type.name}>
                        <img src={sprite} alt="" />
                    </Figure>

                    <Types>
                        {types.map(
                            (type, i) => {
                                return <span key={i} onClick={ () => {getFilter(type.type.name)}  } className={type.type.name}>{type.type.name.toUpperCase()}</span>
                            }
                        )}
                    </Types>
                </Sprite>
                <h2>
                    {capitalize(name)} 
                    <div className="Image" onClick={ () => favoritePokemon(id) }>
                        <img src={Heart} className={ favorite ? 'favorite' : ''} alt="" />
                    </div>
                </h2>
            </div>
        </Container>
    );
}