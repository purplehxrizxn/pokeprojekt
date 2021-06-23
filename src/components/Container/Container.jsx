import { Body } from './styles'

export default function Container(props){
    return (
        <Body>
            {props.children}
        </Body>
    );
}