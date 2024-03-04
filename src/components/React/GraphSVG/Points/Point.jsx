import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#000',
    fill: '#fff',
    strokeOpacity: 1,
    fillOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 1
}

function Point({className = '', point, size = 10, ...others}) {

    const position = useMemo(() => {

        return {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

    }, [point]);

    return (<circle className={`Graph-svg-point ${className}`} 

        cx={position.x} cy={position.y} r={size / 2}

        {...Object.assign(defaultAttributes, others)}
    />);
}

export default Point;