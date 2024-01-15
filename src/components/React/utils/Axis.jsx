import { useEffect, useRef } from "react";
import * as D3Axis from "d3-axis";
import * as D3Select from "d3-selection";



function Axis({className, scale, side = 'bottom', x = 0, y = 0}) {

    const axisRef = useRef();

    useEffect(() => {

        const axis = (() => {

            switch(side){

                case 'top': return D3Axis.axisTop(scale);
                case 'bottom': return D3Axis.axisBottom(scale);
                case 'left': return D3Axis.axisLeft(scale);
                case 'right': return D3Axis.axisRight(scale);
            }

        })();

        const [min, max] = scale.domain();

        axis.ticks(Math.abs(min) + Math.abs(max));

        D3Select.select(axisRef.current)
            .call(axis);    

    }, [side, scale]);

    return (<>
    
        <g className={`axis ${className || ''}`} transform={`translate(${x}, ${y})`} ref={axisRef}></g>
    
    </>);
}

export default Axis;