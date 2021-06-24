import { 
    Container, Sprite, Figure, Types
} from './styles'

export default function Card(props) {

    function upperFirstLetter(string){

        let str = string.split('');
        let newStr = '';

        str.forEach( (letter, i) => {
            (i === 0) ? newStr += letter.toUpperCase() : newStr += letter;
        });
        return newStr;
    }

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
                                return <span key={i}>{type.type.name.toUpperCase()}</span>
                            }
                        )}
                    </Types>
                </Sprite>
                <h2>{upperFirstLetter(props.name)}</h2>
            </div>
        </Container>
    );
}