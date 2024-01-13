import { useMemo, useCallback } from "react";
import * as D3Scale from "d3-scale";

export function useCartesianAxis({size = 700, cx = 0, cy = 0, domainX = {}, domainY = {}}) {
 
    const scaleX = useMemo(() => {

        const { min = -10, max = 10 } = domainX;

        const unit = size / (Math.abs(min) + Math.abs(max));

        const range = {

            from: cx - Math.abs(min) * unit,

            to: cx + Math.abs(max) * unit
        };

        return D3Scale.scaleLinear([min, max], [range.from, range.to]);

    }, [size, domainX, cx]);

    const scaleY = useMemo(() => {

        const { min = -10, max = 10 } = domainY;

        const unit = size / (Math.abs(min) + Math.abs(max));

        const range = {

            from: cy - Math.abs(max) * unit,
            
            to: cy + Math.abs(min) * unit
        };

        return D3Scale.scaleLinear([min, max], [range.to, range.from]);

    }, [size, domainY, cy]);

    const origin = useMemo(() => {

        return {
            x: scaleX(0),
            y: scaleY(0)
        }

    }, [scaleX, scaleY]);


    //Distance between 2 points
    const distance = useCallback((pointA, pointB = { x: 0, y: 0 }) => {

        const { x: x1, y: y1 } = pointA;
        const { x: x2, y: y2 } = pointB;

        const distanceX = Math.abs(scaleX(x1) - scaleX(x2)); 
        const distanceY = Math.abs(scaleY(y1) - scaleY(y2));
        
        return Math.hypot(distanceX, distanceY);

    }, [scaleX, scaleY]);

    return {
        scaleX,
        scaleY,
        origin,
        distance,
        x: (x) => scaleX(x),
        y: (y) => scaleY(y)
    }
}