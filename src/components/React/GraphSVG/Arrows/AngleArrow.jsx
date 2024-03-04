import { parseAngle, radToDeg, cos, sin } from "@utils/MathUtils";
import { useMemo } from "react";


const defaultAttributes = {
    stroke: '#fff',
    strokeOpacity: 1,
    // strokeLinecap: 'round',
    // strokeLinejoin: 'round',
    // strokeMiterlimit: 10,
}

function AngleArrow({className = '', point, angle, size = 200, center = false, gapX = 14, gapY = 7, arrowEnd = true, arrowStart = false, ...others} = {}) {

    const position = useMemo(() => {

        const {x, y} = {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

        if(center){

            return {
                x1: x - (size / 2) * cos(angle),
                y1: y - (size / 2) * -sin(angle),
                x2: x + (size / 2) * cos(angle),
                y2: y + (size / 2) * -sin(angle)   
            }
        }
        else {

            return {
                x1: x,
                y1: y,
                x2: x + size * cos(angle),
                y2: y + size * -sin(angle) 
            }
        }

    }, [point, angle, size, center]);

    const paths = useMemo(() => {
        
        const ang = -radToDeg(parseAngle(angle));

        return {
            line: {
                d: [
                    `M${position.x1} ${position.y1}`,
                    `L${position.x2} ${position.y2}`,
                    'Z'
                ].join(' ')
            },

            arrowEnd: {
                d: [
                    `M${position.x2} ${position.y2}`,
                    `l${-gapX} ${-gapY}`,
                    `M${position.x2} ${position.y2}`,
                    `l${-gapX} ${gapY}`,
                    'Z'
                ].join(' '),

                transform: `rotate(${ang} ${position.x2} ${position.y2})`
            },

            arrowStart: {
                d: [
                    `M${position.x1} ${position.y1}`,
                    `l${gapX} ${-gapY}`,
                    `M${position.x1} ${position.y1}`,
                    `l${gapX} ${gapY}`,
                    'Z',
                ].join(' '),

                transform: `rotate(${ang} ${position.x1} ${position.y1})`
            }
        }

    }, [position, angle]);

    return (<g className={`Graph-svg-arrow`}>

        <path className="Graph-svg-arrow-line" d={paths.line.d} 
        
            {...Object.assign(defaultAttributes, others)} 
        />

        {
            arrowStart &&
            <path className="Graph-svg-arrow-head" d={paths.arrowStart.d} transform={paths.arrowStart.transform} 
            
                {...Object.assign(defaultAttributes, others)}
            />
        }
        {
            arrowEnd &&
            <path className="Graph-svg-arrow-head" d={paths.arrowEnd.d} transform={paths.arrowEnd.transform} 
            
                {...Object.assign(defaultAttributes, others)}
            />
        }

    </g>);
}

export default AngleArrow;