import { useMemo, useRef } from "react";
import { generateTrianguloPascal } from "./GenerateTrianguloPascal";
import { LayoutTriangulo } from "./Layout";
import { useZoom } from "../hooks/useZoom";
import SimpleArrow from "../utils/SimpleArrow";
import ArrowHead from "../assets/ArrowHead";
import Triangulo from "./Triangulo";


function TrianguloPascal({n = 10, width = 600, height = 600, cellWidth = 50, cellHeight = 40, gap = 20}) {

    const svgRef = useRef();

    const triangulo = useMemo(() => {

        const triangulo = generateTrianguloPascal(n);

        return LayoutTriangulo({triangulo, cellWidth, cellHeight, gap})

    }, [n, cellWidth, cellHeight, gap]);

    const defaultTransform = useMemo(() => {

        return {
            x: (width / 2) - (triangulo.centerX),
            y: (height / 2) - (triangulo.centerY),
        }

    }, [triangulo, width, height, cellWidth, cellHeight]);

    const zoom = useZoom({
        SVGRef:svgRef,
        elements: ['.graph'],
        defaultZoom: defaultTransform
    });

    return (<>
    
        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <ArrowHead id="triangulo-pascal-arrow" />

            <g className="graph" transform={`translate(${defaultTransform.x}, ${defaultTransform.y})`}>

                <Triangulo triangulo={triangulo}  showPath margin={50} showLabels />

            </g>

        </svg>
        
    </>);
}

export default TrianguloPascal;