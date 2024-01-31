import { useEffect, useId, useMemo, useRef, useState } from "react";
import { generateTrianguloPascal } from "../GenerateTrianguloPascal";
import { LayoutTriangulo } from "../Layout";
import { useZoom } from "../../hooks/useZoom";
import SimpleArrow from "../../utils/SimpleArrow";
import ArrowHead from "../../assets/ArrowHead";
import Triangulo from "../Triangulo";
import * as D3Select from "d3-selection";
import "./BinomioNewton.css";
import * as EQ from "@docs/assets/Algebra/binomio de newton/svg.js";
import Equation from "@components/React/utils/Equation.jsx";
import Tabs from "@components/React/utils/Tabs/Tabs.jsx";


const BINOMIOS_NEWTON = [
    { suma: EQ.BINOMIO_0, resta: EQ.BINOMIO_0 },
    { suma: EQ.BINOMIO_SUMA_1,  resta: EQ.BINOMIO_RESTA_1 },
    { suma: EQ.BINOMIO_SUMA_2,  resta: EQ.BINOMIO_RESTA_2 },
    { suma: EQ.BINOMIO_SUMA_3,  resta: EQ.BINOMIO_RESTA_3 },
    { suma: EQ.BINOMIO_SUMA_4,  resta: EQ.BINOMIO_RESTA_4 },
    { suma: EQ.BINOMIO_SUMA_5,  resta: EQ.BINOMIO_RESTA_5 },
    { suma: EQ.BINOMIO_SUMA_6,  resta: EQ.BINOMIO_RESTA_6 },
    { suma: EQ.BINOMIO_SUMA_7,  resta: EQ.BINOMIO_RESTA_7 }
]
const colors = {
    'var-a': '#770000',
    'var-b': '#000077'
}

function BinomioNewton({n = 7, width = 940, height = 600, cellWidth = 50, cellHeight = 40, gap = 20, ...others}) {

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
    const [currentRow, setCurrentRow] = useState(null);

    useEffect(() => {

        const handleClick = (e) => {

            const rowIndex = Number(e.currentTarget.getAttribute('data-row-index'));

            const gap = rowIndex > 5 ? -200 : 30;

            setCurrentRow({index: rowIndex, top: `${e.offsetY + gap}px`});
        }

        const rows = D3Select.select(svgRef.current)
            .selectAll('.row-over');

            rows.on("click", handleClick);
            
        return () => {

            rows.on("click", null);
        }

    }, []);


    const arrowHeadID = useId();

    return (<div className="Triangulo-pascal-binomio-newton ">

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <ArrowHead id={arrowHeadID} />

            <g className="graph" transform={`translate(${defaultTransform.x}, ${defaultTransform.y})`}>

                <Triangulo triangulo={triangulo}  showPath showLabels margin={50} />

                {//Events
                    triangulo.rows.map(row => {

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
                    triangulo.rows.map(row => {

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

        {//Tooltip
            (() => {

                if(!currentRow) return;

                const {index, top} = currentRow;

                const suma = BINOMIOS_NEWTON[index].suma;
                const resta = BINOMIOS_NEWTON[index].resta;
    
                return <div className="toltip" style={{position: 'absolute', top}}>

                    {index == 0 ?
                        <Equation style={{height: '30px', aspectRatio: suma.aspectRatio.join(' / ')}} SVGPath={suma.path} colors={colors} />
                        :
                        <Tabs fill maxWidth="800px">

                            <Equation style={{height: '30px', aspectRatio: suma.aspectRatio.join(' / ')}} SVGPath={suma.path} slot="Suma" colors={colors} />
                            
                            <Equation style={{height: '30px', aspectRatio: resta.aspectRatio.join(' / ')}} SVGPath={resta.path} slot="Resta"  colors={colors} />
                        </Tabs>
                    }

                    <button className="btn close-btn" onClick={() => setCurrentRow(null)}>
                        <i className="bi bi-x"/>
                    </button>
                </div>
            })()
        }    
    </div>);
}

export default BinomioNewton;