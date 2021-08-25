import { Screen, Glass, Title, TurnedOff, Button, Animation } from './styles'
import { useState, useEffect } from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai'


export default function Container(props){

    const [turnedOn, setTurnedOn] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [lightOn, setLightOn] = useState(false);

    useEffect( () => {
        if (animation) {
            setTimeout( () => { 
                setTurnedOn(true);
                setAnimation(false);
            }, 5000);
        }
    }, [animation])

    const styleIcon = {
        fontSize: '3.2rem',
        color: '#7C7C7C'
    };

    if (!turnedOn) {
        return (
            <Glass>
                <Screen style={{overflow: 'hidden'}}>
                    <TurnedOff />
                    { animation ? (
                        <Animation>
                            <div className="Letters">
                                <span>P</span>
                                <span>o</span>
                                <span>k</span>
                                <span>é</span>
                                <span>P</span>
                                <span>r</span>
                                <span>o</span>
                                <span>j</span>
                                <span>e</span>
                                <span>k</span>
                                <span>t</span>
                            </div>
                            <h3> Purplehxrizxn <span>®</span> </h3>
                        </Animation>
                    ) : false }
                </Screen>
                <Title>PokéProjekt</Title>
                <a href="https://github.com/purplehxrizxn" target="_blank" rel="noreferrer">github/purplehxrizxn</a>
                <Button onClick={ () => { setAnimation(true); setLightOn(true); } }>
                    <AiOutlinePoweroff style={styleIcon} />
                    <div className={ lightOn ? 'Light on' : 'Light' }></div>
                </Button>
            </Glass>
        );
    } else {
        return (
            <Glass>
                <Screen>
                    {props.children}
                </Screen>
                <Title>PokéProjekt</Title>
                <a href="https://github.com/purplehxrizxn" target="_blank" rel="noreferrer">github/purplehxrizxn</a>
                <Button onClick={ () => { setTurnedOn(false); setLightOn(false); } }>
                    <AiOutlinePoweroff style={styleIcon} />
                    <div className={ lightOn ? 'Light on' : 'Light' }></div>
                </Button>
            </Glass>
        );
    }
}