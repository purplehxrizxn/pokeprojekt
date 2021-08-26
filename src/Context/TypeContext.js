import { createContext, useState } from 'react'

export const TypeContext = createContext({});

export const TypeProvider = (props) => {

    const [type, setType] = useState({
        name: ''
    });

    return (
        <TypeContext.Provider value={{ type, setType }}>
            { props.children }
        </TypeContext.Provider>
    )
}