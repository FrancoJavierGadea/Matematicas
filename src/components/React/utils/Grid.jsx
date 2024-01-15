import { useMemo } from "react";


function Grid({className, scale, size = 500, from = 0, side = 'bottom'}) {

    const ticks = useMemo(() => {

        const [min, max] = scale.domain();


        const aux = (() => {

            switch(side){

                case 'top': return { y1: from, y2: from + size };
                case 'bottom': return { y1: from, y2: from - size };
                case 'left': return { x1: from, x2: from + size };
                case 'right': return {x1: from, x2: from - size};
            }
        })();

        const values = scale.ticks(Math.abs(min - max)).reduce((acc, tick) => {

            if(tick === 0) return acc;

            let point;

            if(['top', 'bottom'].includes(side)) {

                point = {
                    ...aux,
                    x1: scale(tick),
                    x2: scale(tick)
                }
            }

            if(['left', 'right'].includes(side)) {

                point = {
                    ...aux,
                    y1: scale(tick),
                    y2: scale(tick)
                }
            }            

            acc.push(point);

            return acc;

        }, []);

        return values;

    }, [scale]);


    return (<g className={`grid ${className || ''}`}>

        {
            ticks.map(({x1, y1, x2, y2}, i) => {

                return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={'#0000004a'} key={`tick-${i}`} /> 
            })
        }

    </g>);
}

export default Grid;