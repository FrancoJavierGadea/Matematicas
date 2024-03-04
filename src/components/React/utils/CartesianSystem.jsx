import Axis from "./Axis";
import {forwardRef, useImperativeHandle} from "react";
import { useCartesianAxis } from "../hooks/useCartesianAxis";
import Grid from "./Grid";


function CartesianSystem({className = '', size, cx, cy, domainX, domainY, showAxis = true, showGrid = true, children}, ref) {

    const {scaleX, scaleY, x, y, distance, origin, min, max} = useCartesianAxis({ cx, cy, size, domainX, domainY, });

    useImperativeHandle(ref, () => {

        return {scaleX, scaleY, x, y, distance, origin};

    }, [scaleX, scaleY, x, y, distance, origin]);

    return <g className={`Cartesian-system ${className}`}>

        {
            showAxis && <>
            
                <Axis className="axis-y" scale={scaleY} side="left" x={cx} y={0} />
                <Axis className="axis-x" scale={scaleX} side="bottom" x={0} y={cy} />
            
            </>
        }

        {
            showGrid && <>
            
                <Grid scale={scaleX} side="top" from={scaleY(domainY.max)} size={size} />
                <Grid scale={scaleY} side="left" from={scaleX(domainX.min)} size={size} />
            
            </>
        }
    
        { children({x, y, origin, min, max, distance}) }

    </g>;
}

export default forwardRef(CartesianSystem);