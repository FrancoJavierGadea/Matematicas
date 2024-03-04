import { cos, parseAngle, radToDeg, sin } from "@utils/MathUtils";
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

function Angle({className = "", point, size = 100, angle, rotate, ...others}) {

    const position = useMemo(() => {

        return {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

    }, [point]);

    const path = useMemo(() => {

        const {x, y} = position;

        const largeArcFlag = parseAngle(angle) > Math.PI ? 1 : 0;

        const ang = -radToDeg(parseAngle(rotate));

        return {
            angle: {
                d: [
                    `M${x} ${y}`,
                    `L${x + size} ${y}`,
                    `A ${size} ${size} 0 ${largeArcFlag} 0 ${x + size * cos(angle)} ${y - size * sin(angle)}`,
                    `L${x} ${y}`,
                    'Z'
                ].join(' '),

                transform: rotate && `rotate(${ang} ${x} ${y})`
            }
        }

    }, [position, size, angle, rotate]);

    return (<g className={`Graph-svg-angle ${className}`} {...Object.assign(defaultAttributes, others)}>
    
        
        <path className="Graph-svg-angle-value" d={path.angle.d} transform={path.angle.transform} />
        
    </g>);
}

export default Angle;