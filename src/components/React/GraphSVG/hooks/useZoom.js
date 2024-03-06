import * as D3 from "d3";
import { useCallback, useEffect, useMemo, useRef } from "react";


export function useZoom({SVGRef, elements = [], defaultZoom = {}}){

    const transformRef = useRef();

    const initialTransform = useMemo(() => {

        //Set Default Zoom
        const {x = 0, y = 0, scale = 1} = defaultZoom;

        return D3.zoomIdentity.translate(x, y).scale(scale);

    }, [defaultZoom]);


    const zoom = useMemo(() => {

        const handleZoom = (e) => {

            const { transform } = e;

            transformRef.current = transform;

            elements.forEach(className => {

                const SVG = D3.select(SVGRef.current);

                SVG.selectAll(className)
                    .attr('transform', transform); 
            })
        }

        const zoom = D3.zoom()
            .scaleExtent([0.2, 10])
            .on('zoom', handleZoom); 

        return zoom;

    }, []);


    const reset = useCallback(() => {

        const SVG = D3.select(SVGRef.current);

        SVG.transition()
            .duration(750)
            .call(zoom.transform, initialTransform);

    }, [zoom, initialTransform]);


    useEffect(() => {

        const SVG = D3.select(SVGRef.current);

        SVG.call(zoom);

        //Set Default Zoom
        SVG.call(zoom.transform, initialTransform);

        return () => {

            const SVG = D3.select(SVGRef.current);

            SVG.on(".zoom", null);
        }

    }, [zoom, initialTransform]);

    return {reset}
}