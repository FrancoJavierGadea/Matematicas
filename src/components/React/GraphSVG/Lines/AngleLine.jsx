import { cos, sin } from "@utils/MathUtils";
import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#fff',
    strokeOpacity: 0.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}


function Line({className = '', point, angle, size = 200, center = false, ...others} = {}) {

    const d = useMemo(() => {

        const position = {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

        if(center){

            const pivotA = {
                x: position.x - (size / 2) * cos(angle),
                y: position.y - (size / 2) * -sin(angle)
            }

            const pivotB = {
                x: position.x + (size / 2) * cos(angle),
                y: position.y + (size / 2) * -sin(angle)
            }
    
            return [
                `M${pivotA.x} ${pivotA.y}`,
                `L${pivotB.x} ${pivotB.y}`,
            ]
            .join(' ');
        }
        else {

            const pivot = {
                x: position.x + size * cos(angle),
                y: position.y + size * -sin(angle)
            }
    
            return [
                `M${position.x} ${position.y}`,
                `L${pivot.x} ${pivot.y}`,
            ]
            .join(' ');
        }


    }, [point, angle, size, center]);


    return (<path className={`Graph-svg-line ${className}`} d={d}

        {...Object.assign(defaultAttributes, others)}
    />);
}

export default Line;