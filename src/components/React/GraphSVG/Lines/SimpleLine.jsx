import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#fff',
    strokeOpacity: 0.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}


function SimpleLine({className = '', from, to, ...others} = {}) {

    const d = useMemo(() => {

        const position = {
            x1: Array.isArray(from) ? from.at(0) : from.x,
            y1: Array.isArray(from) ? from.at(1) : from.y, 
            x2: Array.isArray(to) ? to.at(0) : to.x, 
            y2: Array.isArray(to) ? to.at(1) : to.y,  
        }

        return [
            `M${position.x1} ${position.y1}`,
            `L${position.x2} ${position.y2}`,
        ]
        .join(' ');

    }, [from, to]);


    return (<path className={`Graph-svg-line ${className}`} d={d}

        {...Object.assign(defaultAttributes, others)}
    />);
}

export default SimpleLine;