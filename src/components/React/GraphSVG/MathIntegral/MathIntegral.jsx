import { getFunctionValues } from "@utils/MathUtils";
import { useMemo } from "react";

const defaultAttributes = {
    stroke: 'none',
    fill: '#fff',
    fillOpacity: 0.7,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}

function MathIntegral({className = '', fx, min = -5, max = 5, increment = 0.1, draw = {}, origin = {}, ...others}) {

    const values = useMemo(() => {

        console.log('generate functions points');

        return {
            pointA: {
                x: min,
                y: fx(min)
            },
            pointB: {
                x: max,
                y: fx(max)
            },

            func: getFunctionValues(fx, {increment, min, max})
        };

    }, [fx, min, max, increment]);

    const d = useMemo(() => {

        console.log('generate D path');

        const {func, pointA, pointB} = values;

        const {x = (i) => i, y = (i) => i} = draw;

        const d = [
            `M${x(pointB.x)} ${y(pointB.y)}`,
            `L${x(pointB.x)} ${origin.y}`,
            `L${x(pointA.x)} ${origin.y}`,
            `L${x(pointA.x)} ${y(pointA.y)}`,
        ].join(' ')

        return func.reduce((acc, point) => {

            acc += ` L${x(point.x)} ${y(point.y)}`;
            
            return acc;
        }, d);

    }, [values, draw, origin]);

    return (<g className={`Graph-svg-integral ${className}`}
    
        {...Object.assign(defaultAttributes, others)}
    >

        <path className="Graph-svg-function-curve" d={d} />

    </g>);
}

export default MathIntegral;