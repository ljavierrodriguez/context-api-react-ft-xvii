import { useEffect, useState } from "react";
import { generateColor } from "../libs/utils";

const useGenerateColors = (size) => {

    const [colors, setColors] = useState([]);
    
    useEffect(() => {
        fillColors(size);
    }, [size])

    const fillColors = (length) => {
        for(let i = 0; i < length; i++){
            setColors(prevState => [...prevState, generateColor()]);
        }
    }

    return [colors];
}

export default useGenerateColors;