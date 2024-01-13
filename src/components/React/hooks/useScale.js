import { useCallback, useMemo } from "react";
import * as D3Scale from "d3-scale";

export function useScale({domain = {}, range = {}}){

    const scale = useMemo(() => {

        const {min, max} = domain;
        const {from, to} = range;

        return D3Scale.scaleLinear([min, max], [from, to]);

    }, [domain, range]);

    const origin = useMemo(() => {

        return scale(0);

    }, [scale]);

    const distanceBetween = useCallback((x1, x2 = 0) => {

        return Math.abs( scale(x1) - scale(x2) );

    }, [scale]);

    return {scale, distanceBetween, origin};
}