import { 
    BodyContainer
} from './styles.js'

export default function Body(props){
    return(
        <BodyContainer>
            { props.children}
        </BodyContainer>
    );
}
