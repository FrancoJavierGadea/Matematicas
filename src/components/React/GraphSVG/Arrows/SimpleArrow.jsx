
import { useMemo } from "react";
import { radToDeg } from "@utils/MathUtils.js";

const defaultAttributes = {
    stroke: '#fff',
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
}


function SimpleArrow({className = '', from, to, gapX = 14, gapY = 7, arrowEnd = true, arrowStart = false, ...others} = {}) {

    const position = useMemo(() => {

        return {
            x1: Array.isArray(from) ? from.at(0) : from.x,
            y1: Array.isArray(from) ? from.at(1) : from.y, 
            x2: Array.isArray(to) ? to.at(0) : to.x, 
            y2: Array.isArray(to) ? to.at(1) : to.y,  
        }

    }, [from, to]);

    const paths = useMemo(() => {

        const angle = radToDeg(
            Math.atan((position.y2 - position.y1) / (position.x2 - position.x1))
        );

        return {
            line: {
                d: [
                    `M${position.x1} ${position.y1}`,
                    `L${position.x2} ${position.y2}`,
                    'Z'
                ].join(' '),
            },

            arrowEnd: {
                d: [
                    `M${position.x2} ${position.y2}`,
                    `l${-gapX} ${-gapY}`,
                    `M${position.x2} ${position.y2}`,
                    `l${-gapX} ${gapY}`,
                    'Z'
                ].join(' '),

                transform: `rotate(${angle} ${position.x2} ${position.y2})`
            },

            arrowStart: {
                d: [
                    `M${position.x1} ${position.y1}`,
                    `l${gapX} ${-gapY}`,
                    `M${position.x1} ${position.y1}`,
                    `l${gapX} ${gapY}`,
                    'Z',
                ].join(' '),

                transform: `rotate(${angle} ${position.x1} ${position.y1})`
            }
        }

    }, [position, gapX, gapY]);


    return (<g className={`Graph-svg-arrow ${className}`} {...Object.assign(defaultAttributes, others)}>

        <path className="Graph-svg-arrow-line" d={paths.line.d} />

        {
            arrowStart &&
            <path className="Graph-svg-arrow-head" d={paths.arrowStart.d} transform={paths.arrowStart.transform} />
        }
        {
            arrowEnd &&
            <path className="Graph-svg-arrow-head" d={paths.arrowEnd.d} transform={paths.arrowEnd.transform} />
        }

    </g>);
}

export default SimpleArrow;