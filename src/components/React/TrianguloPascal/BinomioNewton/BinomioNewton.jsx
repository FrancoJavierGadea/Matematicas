import { useEffect, useId, useMemo, useRef, useState } from "react";
import { generateTrianguloPascal } from "../GenerateTrianguloPascal";
import { LayoutTriangulo } from "../Layout";
import { useZoom } from "../../hooks/useZoom";
import SimpleArrow from "../../utils/SimpleArrow";
import ArrowHead from "../../assets/ArrowHead";
import Triangulo from "../Triangulo";
import * as D3Select from "d3-selection";
import "./BinomioNewton.css";
import * as EQ from "@assets/algebra/binomio-de-newton/svg.js";
import MathFormuleWrapper from "./MathFormuleWrapper";

const colors = {
    'var-a': '#770000',
    'var-b': '#000077'
}

function BinomioNewton({n = 7, width = 940, height = 600, cellWidth = 50, cellHeight = 40, gap = 20, ...others}) {

    const svgRef = useRef();

    const triangulo = useMemo(() => {

        const triangulo = generateTrianguloPascal(n > 7 ? 7 : n);

        return {
            values: triangulo,
            layout: LayoutTriangulo({triangulo, cellWidth, cellHeight, gap})
        }

    }, [n, cellWidth, cellHeight, gap]);

    const defaultTransform = useMemo(() => {

        return {
            x: (width / 2) - (triangulo.layout.centerX),
            y: (height / 2) - (triangulo.layout.centerY),
        }

    }, [triangulo, width, height, cellWidth, cellHeight]);

    const zoom = useZoom({
        SVGRef:svgRef,
        elements: ['.graph'],
        defaultZoom: defaultTransform
    });

    //Events
    const [currentRow, setCurrentRow] = useState(null);

    const tooltipRef = useRef();
    const $tooltip = useMemo(() => {

        return {
            show: (x, y) => {
                tooltipRef.current.style.visibility = 'visible';
                tooltipRef.current.style.top = `${y}px`;
                tooltipRef.current.style.left = `${x}px`;
            },
            hide: () => {
                tooltipRef.current.style.visibility = '';
                tooltipRef.current.style.top = '';
                tooltipRef.current.style.left = '';
            }
        }
    }, []);

    const showRef = useRef(false);
    const [show, setShow] = useState(false);

    useEffect(() => {

        showRef.current = show;
        tooltipRef.current.classList.toggle('show', show);

    }, [show]);


    useEffect(() => {

        const handleClick = (e) => {

            setShow(true);
            
            const target = e.currentTarget;

            const rowIndex = Number(target.getAttribute('data-row-index'));

            setCurrentRow(rowIndex);
            
            const gap = rowIndex > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleEnter = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const rowIndex = Number(target.getAttribute('data-row-index'));

            setCurrentRow(rowIndex);
            
            const gap = rowIndex > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleMove = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const rowIndex = Number(target.getAttribute('data-row-index'));

            const gap = rowIndex > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleLeave = (e) => {

            if(showRef.current) return;
            
            setCurrentRow(null);
            $tooltip.hide();
        }

        const rows = D3Select.select(svgRef.current)
            .selectAll('.row-over');

            rows.on("click", handleClick);
            rows.on("mousemove", handleMove);
            rows.on("mouseenter", handleEnter);
            rows.on("mouseleave", handleLeave);
            
        return () => {

            rows.on("click", null);
            rows.on("mousemove", null);
            rows.on("mouseenter", null);
            rows.on("mouseleave", null);
        }

    }, [$tooltip]);

    const handleClick = () => {
        
        setShow(false);
        setCurrentRow(null);

        $tooltip.hide();
    }


    const arrowHeadID = useId();

    return (<div className="Triangulo-pascal-binomio-newton ">

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <ArrowHead id={arrowHeadID} />

            <g className="graph" transform={`translate(${defaultTransform.x}, ${defaultTransform.y})`}>

                <Triangulo triangulo={triangulo.layout}  showPath showLabels margin={50} />

                {//Events
                    triangulo.layout.rows.map(row => {

                        return <rect className="row-over" {...{
                            width: row.width, 
                            height: row.height,
                            x: row.x,   y: row.y, 
                            fill: '#00000000',
                            stroke: 'none',
                            rx: 10, ry: 10,

                            'data-row-index': row.index,
                            key: row.name
                        }}/>
                    })
                }

                {//Arrow images
                    triangulo.layout.rows.map(row => {

                        const x = row.x + row.width;
                        const y = row.y + row.height / 2;

                        const src = EQ[`EXPONENTE_${row.index}`].path;

                        const height = 30;

                        return <g key={`arrow-${row.name}`}>
                        
                            <SimpleArrow {...{

                                from: { x: x + 10, y },
                                to: { x: x + 80, y, },
                                stroke: '#000',
                                head: arrowHeadID
                            }}/>
                        
                            <image href={src} x={x + 85} y={y - height / 2} height={height} />  
                        </g>
                    })
                }
            </g>
        </svg>

        <div className="toltip" style={{position: 'absolute', visibility: 'hidden'}} ref={tooltipRef}>

            <MathFormuleWrapper n={currentRow} coeficientes={triangulo.values[currentRow]} showControls={show} colors={colors} />

            {
                show &&
                <button className="btn close-btn" onClick={handleClick}>
                    <i className="bi bi-x"/>
                </button>
            }
        </div>    
    </div>);
}

export default BinomioNewton;