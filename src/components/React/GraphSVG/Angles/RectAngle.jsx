import { parseAngle, radToDeg } from "@utils/MathUtils";
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

function Angle({className = "", point, size = 100, region = 4, rotate = 0, ...others}) {

    const position = useMemo(() => {

        return {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

    }, [point]);

    const path = useMemo(() => {

        const {x, y} = position;

        let d;

        switch(region){

            case 1: d = [
                `M${x} ${y}`,
                `l${size} ${0}`,
                `l${0} ${-size}`,
                `l${-size} ${0}`,
                `l${0} ${size}`,
                'Z'
            ].join(' ')
            break;
            
            case 2: d = [
                `M${x} ${y}`,
                `l${-size} ${0}`,
                `l${0} ${-size}`,
                `l${size} ${0}`,
                `l${0} ${size}`,
                'Z'
            ].join(' ')
            break;
        
            case 3: d = [
                `M${x} ${y}`,
                `l${-size} ${0}`,
                `l${0} ${size}`,
                `l${size} ${0}`,
                `l${0} ${-size}`,
                'Z'
            ].join(' ')
            break;

            case 4: d = [
                `M${x} ${y}`,
                `l${size} ${0}`,
                `l${0} ${size}`,
                `l${-size} ${0}`,
                `l${0} ${-size}`,
                'Z'
            ].join(' ')
            break;
        }

        const angle = -radToDeg(parseAngle(rotate));
        
        return {
            angle: {
                d: d,
                transform: rotate && `rotate(${angle} ${x} ${y})`
            }
        }

    }, [position, size, region, rotate]);

    return (<g className={`Graph-svg-angle ${className}`} {...Object.assign(defaultAttributes, others)}>
    
        <path className="Graph-svg-angle-value" d={path.angle.d} transform={path.angle.transform} />
        
    </g>);
}

export default Angle;