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

    function returnBorderColor(color) {
        const colors = {
            normal: "#A5AB76",
            fighting: "#B72529",
            flying: "#AD7EF0",
            poison: "#98269B",
            ground: "#D8C564",
            rock: "#AFA534",
            bug: "#A1C014",
            ghost: "#734A98",
            steel: "#B9B4CF",
            fire: "#E6802E",
            water: "#6990F0",
            grass: "#75CF49",
            electric: "#EED727",
            psychic: "#EE4788",
            ice: "#9ED8D7",
            dark: "#6B5847",
            fairy: "#FA41D5",
            dragon: "#8200FA"   
        };

        return colors[color];
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

                    <Figure style={{ borderColor: returnBorderColor(types[0].type.name) }}>
                        <img src={sprite} alt="" />
                    </Figure>

                    <Types>
                        {types.map(
                            (type, i) => {
                                return <span key={i} onClick={() => getFilter(type.type.name)} style={{ background: returnBorderColor(type.type.name) }}>{type.type.name.toUpperCase()}</span>
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