import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#000',
    fill: 'none',
    strokeOpacity: 1,
    fillOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}

function Circle({className = '', point, size = 50, ...others}) {

    const position = useMemo(() => {

        return {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

    }, [point]);

    return (<circle className={`Graph-svg-circle ${className}`} 

        cx={position.x} cy={position.y} r={size / 2}

        {...Object.assign(defaultAttributes, others)}
    />);
}

export default Circle;