import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#000',
    fill: '#fff',
    strokeOpacity: 1,
    fillOpacity: 0.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}

function Point({className = '', points = [], size = 10, ...others}) {

    const pointsPath = useMemo(() => {

        return points.map((point) => {
            
            const x = Array.isArray(point) ? point.at(0) : point.x;
            const y = Array.isArray(point) ? point.at(1) : point.y; 

            return `${x},${y}`
        })
        .join(' ')

    }, [points]);

    return (<polygon className={`Graph-svg-polygon ${className}`} 

        points={pointsPath}

        {...Object.assign(defaultAttributes, others)}
    />);
}

export default Point;