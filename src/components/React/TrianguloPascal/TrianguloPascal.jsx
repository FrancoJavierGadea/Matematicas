import { useEffect, useMemo, useRef } from "react";
import { generateTrianguloPascal } from "./GenerateTrianguloPascal";
import { LayoutTriangulo } from "./Layout";
import { useZoom } from "../hooks/useZoom";
import SimpleArrow from "../utils/SimpleArrow";
import ArrowHead from "../assets/ArrowHead";
import Triangulo from "./Triangulo";
import * as D3Select from "d3-selection";
import "./TrianguloPascal.css";
import Equation from "@components/Equation.astro";
import svg from "@docs/assets/Algebra/binomio de newton/optimized-svg/binomio-resta-elevado-7.svg?raw";


function TrianguloPascal({n = 7, width = 600, height = 600, cellWidth = 50, cellHeight = 40, gap = 20, ...others}) {

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

    //Events
    const toltipRef = useRef();


    useEffect(() => {

        const handleClick = (e) => {

            toltipRef.current.classList.toggle('show');
            toltipRef.current.style.top = `${e.offsetY - 80}px`;
            toltipRef.current.style.left = `${e.offsetX}px`;
        }

        const rows = D3Select.select(svgRef.current)
            .selectAll('.row-over');

            rows
            .on("click", handleClick)
            

        return () => {

            rows
            .on("click", null);
        }

    }, []);


    return (<div className="Triangulo-pascal">

        <div className="toltip" style={{position: 'absolute', visibility: 'hidden'}} ref={toltipRef}>

            
        
        </div>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <ArrowHead id="triangulo-pascal-arrow" />

            <g className="graph" transform={`translate(${defaultTransform.x}, ${defaultTransform.y})`}>

                <Triangulo triangulo={triangulo}  showPath margin={50} />

                {
                    triangulo.rows.map(row => {

                        return <rect className="row-over" {...{
                            width: row.width, 
                            height: row.height,
                            x: row.x,   y: row.y, 
                            fill: '#00000000',
                            stroke: 'none',
                            rx: 10, ry: 10,

                            key: row.name
                        }}/>
                    })
                }

            </g>

        </svg>
        
    </div>);
}

export default TrianguloPascal;