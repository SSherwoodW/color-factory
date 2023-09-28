import React from 'react';
import { useParams } from 'react-router-dom';
import Color from './Color';

function SelectColor({ colors }) {
    const { name } = useParams(); 
    console.log(name)
    if (name) {
        const currColor = colors.find(
            color => color.name.toLowerCase() === name.toLowerCase()
        );

        return <Color color={currColor}/>
    }
    return null;
    
}

export default SelectColor;