import { 
    Container, CardTitle,
    Data, Sprite
} from './styles.js'

export default function Card(props) {
    return(
        <Container>
            <CardTitle>
                Blastoise
            </CardTitle>

            <Sprite>
                <div></div>
            </Sprite>

        <Data>
            <div>
                <span>Water</span>
            </div>

            <div>
                <span>Gen I</span>
            </div>
        </Data>
            
        </Container>
    );
}