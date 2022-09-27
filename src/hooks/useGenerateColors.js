import React, { useEffect, useState } from 'react';
import { generateColor } from '../libs/utils';

const useGenerateColors = (size) => {

    const [colors, setColors] = useState([]);

    useEffect(() => {
        fillColors(size);
    }, [size]);

    const fillColors = (length) => {
        let _colors = [];
        for(let i = 0; i < length; i++){
            colors.push(generateColor());
        }
        setColors(_colors);
    }

    return [colors];
}

export default useGenerateColors;