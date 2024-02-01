import "./NumerosCombinatorios.css";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { generateTrianguloPascal } from "../GenerateTrianguloPascal";
import { LayoutTriangulo } from "../Layout";
import { useZoom } from "../../hooks/useZoom";
import Triangulo from "../Triangulo";
import * as D3Select from "d3-selection";
import MathFormuleWrapper from "./MathFormuleWrapper";

const colors = {
    'var-n': '#960909',
    'var-r': '#1b04ad'
}

function NumerosCombinatorios({n = 7, width = 940, height = 600, cellWidth = 50, cellHeight = 40, gap = 20, ...others}) {

    const svgRef = useRef();

    const triangulo = useMemo(() => {

        const triangulo = generateTrianguloPascal(n > 7 ? 7 : n);

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

    const [values, setValues] = useState(null);


    useEffect(() => {

        const handleClick = (e) => {

            setShow(true);
            
            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');
            const r = +target.getAttribute('data-cell-index');
            const result = +target.getAttribute('data-value');

            setValues({n, r, result});
            
            const gap = n > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleEnter = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');
            const r = +target.getAttribute('data-cell-index');
            const result = +target.getAttribute('data-value');

            setValues({n, r, result});
            
            const gap = n > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleMove = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');

            const gap = n > 5 ? -70 : 70;
            $tooltip.show(e.offsetX, e.offsetY + gap);
        }

        const handleLeave = (e) => {

            if(showRef.current) return;
            
            setValues(null);

            $tooltip.hide();
        }

        const rows = D3Select.select(svgRef.current)
            .selectAll('.cell-over');

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

    }, []);

    const handleClick = () => {
        
        setShow(false);    
        setValues(null);

        $tooltip.hide();
    }


    return (<div className="Triangulo-pascal-numeros-combinatorios">

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <g className="graph" transform={`translate(${defaultTransform.x}, ${defaultTransform.y})`}>

                <Triangulo triangulo={triangulo}  showPath showLabels margin={50} />

                {
                    triangulo.rows.map((row) => {

                        return row.cells.map((cell) => {

                            const {width, height, x, y, value, name, rowIndex, index} = cell;

                            return <rect className="cell-over" {...{
                                width, height,
                                x,
                                y, 
                                fill: '#00000000',
                                stroke: 'none',
                                'data-row-index': rowIndex,
                                'data-cell-index': index,
                                'data-value': value,
                                rx: 10,
                                key: name
                            }}/>
                        });
                    })
                    .flat(1)
                }

            </g>
        </svg>

        <div className="custom-tooltip" style={{visibility: 'hidden', position: 'absolute'}}  ref={tooltipRef}>
            
            <MathFormuleWrapper n={values?.n} r={values?.r} result={values?.result} showControls={show} colors={colors}/>
            
            {
                show &&
                <button className="btn close-btn" onClick={handleClick}>
                    <i className="bi bi-x"/>
                </button> 
            }
        </div>

    </div>);
}

export default NumerosCombinatorios;