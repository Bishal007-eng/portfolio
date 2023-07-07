import { useEffect, useRef, useState } from 'react'

export function Typed(textToType, interKeyStrokeDuration) {

    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
      const intervalId = setInterval(() => {

        setCurrentPosition ((value) => value + 1);
        currentPositionRef.current +=1;

        if(currentPositionRef.current > textToType.length){
          clearInterval(intervalId); 
          currentPositionRef.current = 0;
          setCurrentPosition(0);         
        }
        
      }, interKeyStrokeDuration );

      return () => {
        clearInterval(intervalId);
      }

    }, [interKeyStrokeDuration, textToType]);

    return textToType.substring(0, currentPosition);
 
}
