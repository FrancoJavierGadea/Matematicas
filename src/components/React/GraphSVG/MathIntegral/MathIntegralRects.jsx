import { getFunctionValues } from "@utils/MathUtils";
import { useMemo } from "react";

const defaultAttributes = {
    stroke: '#000',
    fill: 'none',
    fillOpacity: 0.7,
    strokeOpacity: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2.5
}

function MathIntegral({className = '', fx, min = -5, max = 5, increment = 0.1, n = 10, draw = {x: (i) => i, y: (i) => i}, origin = {x: 0, y: 0}, side = 'left', ...others}) {

    const values = useMemo(() => {

        console.log('generate functions points');

        const dx = Math.abs(min - max) / n;

        const rects = Array.from({length: n}).map((_, i) => {

            const x = min + dx * i;
            const y = side === 'left' ? fx(x) : fx(min + dx * (i + 1));
            const width = dx;
            const height = y;

            return {
                x, 
                y, 
                width, 
                height
            }
        })

        return {
            dx,

            rects
        };

    }, [fx, min, max, increment, n, side]);

    

    return (<g className={`Graph-svg-integral-rects ${className}`}
    
        {...Object.assign(defaultAttributes, others)}
    >

        {
            values.rects.map((rect, i) => {

                const {x, y} = draw;

                const width = Math.abs(origin.x - x(rect.width));
                const height = Math.abs(origin.y - y(rect.height));

                return <rect x={x(rect.x)} y={y(rect.y)} width={width} height={height} key={`rect-${i}`}/>
            })
        }

    </g>);
}

export default MathIntegral;