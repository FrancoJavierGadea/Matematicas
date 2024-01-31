import Tabs from "@components/React/utils/Tabs/Tabs";
import "./NumerosCombinatorios.css";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { generateTrianguloPascal } from "../GenerateTrianguloPascal";
import { LayoutTriangulo } from "../Layout";
import { useZoom } from "../../hooks/useZoom";
import SimpleArrow from "../../utils/SimpleArrow";
import ArrowHead from "../../assets/ArrowHead";
import Triangulo from "../Triangulo";
import * as D3Select from "d3-selection";
import { MathFormule } from "./MathFormule";

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
    const showRef = useRef(false);

    const [values, setValues] = useState(null);
    const [formula, setFormula] = useState(false);
    const [ncr, setNcr] = useState(false);

    useEffect(() => {

        const handleClick = (e) => {

            showRef.current = true;
            
            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');
            const r = +target.getAttribute('data-cell-index');
            const result = +target.getAttribute('data-value');

            setValues({n, r, result});
            
            const gap = n > 5 ? -50 : 70;
            tooltipRef.current.style.visibility = 'visible';
            tooltipRef.current.style.top = `${e.offsetY + gap}px`;
            tooltipRef.current.style.left = `${e.offsetX}px`;

            tooltipRef.current.classList.add('show');
        }

        const handleEnter = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');
            const r = +target.getAttribute('data-cell-index');
            const result = +target.getAttribute('data-value');

            setValues({n, r, result});
            
            const gap = n > 5 ? -50 : 70;
            tooltipRef.current.style.visibility = 'visible';
            tooltipRef.current.style.top = `${e.offsetY + gap}px`;
            tooltipRef.current.style.left = `${e.offsetX}px`;
        }

        const handleMove = (e) => {

            if(showRef.current) return;

            const target = e.currentTarget;

            const n = +target.getAttribute('data-row-index');

            const gap = n > 5 ? -50 : 70;
            tooltipRef.current.style.visibility = 'visible';
            tooltipRef.current.style.top = `${e.offsetY + gap}px`;
            tooltipRef.current.style.left = `${e.offsetX}px`;
        }

        const handleLeave = (e) => {

            if(showRef.current) return;
            
            setValues(null);

            tooltipRef.current.style.visibility = '';
            tooltipRef.current.style.top = '';
            tooltipRef.current.style.left = '';
        }

        const rows = D3Select.select(svgRef.current)
            .selectAll('.cell-over');

            rows.on("click", handleClick);
            rows.on("mousemove", handleMove);
            rows.on("mouseenter", handleEnter);
            rows.on("mouseleave", handleLeave);
            
        return () => {

            rows.on("click", null);
        }

    }, []);

    const handleClick = () => {
        
        showRef.current = false;
            
        setValues(null);
        setFormula(false);
        setNcr(false);

        tooltipRef.current.style.visibility = '';
        tooltipRef.current.style.top = '';
        tooltipRef.current.style.left = '';

        tooltipRef.current.classList.toggle('show', false);
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
                                fill: '#000',
                                stroke: 'none',
                                opacity: 0,
                                'data-row-index': rowIndex,
                                'data-cell-index': index,
                                'data-value': value,
                                key: name
                            }}/>
                        });
                    })
                    .flat(1)
                }

            </g>
        </svg>

        <div className="custom-tooltip" style={{visibility: 'hidden', position: 'absolute'}}  ref={tooltipRef}>
            
            <MathFormule n={values?.n} r={values?.r} result={values?.result} showFormule={formula} ncr={ncr} />
            
            <button className="btn close-btn" onClick={handleClick}>
                <i className="bi bi-x"/>
            </button> 

            <div className="controls">
                <div>
                    <input type="checkbox" className="btn-check" id="NumerosConbinatoris-ncr-btn" autoComplete="off" checked={ncr} 
                    
                        onChange={() => setNcr(!ncr)}
                    />
                    <label className="btn" htmlFor="NumerosConbinatoris-ncr-btn">nCr</label>
                </div>
                <div>
                    <input type="checkbox" className="btn-check" id="NumerosConbinatorios-formula-btn" autoComplete="off" checked={formula}  
                    
                        onChange={() => setFormula(!formula)}
                    />
                    <label className="btn" htmlFor="NumerosConbinatorios-formula-btn">Formula</label>
                </div>
            </div>   
        </div>

    </div>);
}

export default NumerosCombinatorios;