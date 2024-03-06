import { useMemo } from "react";

const defaultAttributesPoint = {
    stroke: '#000',
    fill: '#fff',
    strokeOpacity: 1,
    fillOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 1
}

const defaultAttributesLines = {
    stroke: '#fff',
    fill: 'none',
    strokeOpacity: 0.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5,
    strokeDasharray: '4 10',
    strokeDashoffset: '12' 
}

function Point({className = '', point, origin = [0, 0], size = 10, pointAttr = {}, linesAttr = {}}) {

    const position = useMemo(() => {

        return {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,
            originX: Array.isArray(origin) ? origin.at(0) : origin.x,
            originY: Array.isArray(origin) ? origin.at(1) : origin.y,   
        }

    }, [point, origin]);

    const paths = useMemo(() => {

        return {
            lineX: {
                d: [
                    `M${position.x} ${position.y}`,
                    `L${position.x} ${position.originY}`,
                    'Z'
                ].join(' ')
            },
            lineY: {
                d: [
                    `M${position.x} ${position.y}`,
                    `L${position.originX} ${position.y}`,
                    'Z'
                ].join(' ')
            },
        }

    }, [position]);

    return (<g className={className}>

        <path className={`Graph-svg-line proyection proyection-x`} d={paths.lineX.d}

            {...Object.assign(defaultAttributesLines, linesAttr)}
        />

        <path className={`Graph-svg-line proyection proyection-y`} d={paths.lineY.d}

            {...Object.assign(defaultAttributesLines, linesAttr)}
        />

        <circle className={`Graph-svg-point`} 

            cx={position.x} cy={position.y} r={size / 2}

            {...Object.assign(defaultAttributesPoint, pointAttr)}
        />

    </g>);
}

export default Point;