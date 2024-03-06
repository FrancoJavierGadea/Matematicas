import { getFunctionValues } from "@utils/MathUtils";
import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#fff',
    fill: 'none',
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}

function MathFunction({className = '', fx, min = -5, max = 5, increment = 0.1, draw = {}, ...others}) {

    const values = useMemo(() => {

        console.log('generate functions points');

        return getFunctionValues(fx, {increment, min, max});

    }, [fx, min, max, increment]);

    const d = useMemo(() => {

        console.log('generate D path');

        const {x = (i) => i, y = (i) => i} = draw;

        return values.reduce((acc, point, index) => {

            if(index === 0){

                acc += `M${x(point.x)} ${y(point.y)}`;
            }
            else {
                acc += ` L${x(point.x)} ${y(point.y)}`;
            }

            return acc;
        }, '');

    }, [values, draw]);

    return (<g className={`Graph-svg-function ${className}`}
    
        {...Object.assign(defaultAttributes, others)}
    >

        <path className="Graph-svg-function-curve" d={d} />

    </g>);
}

export default MathFunction;