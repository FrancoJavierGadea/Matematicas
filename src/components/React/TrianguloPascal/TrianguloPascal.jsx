import { useMemo, useRef } from "react";
import { generateTrianguloPascal } from "./GenerateTrianguloPascal";
import { LayoutTriangulo } from "./Layout";

const COLORS = {
    0: '#ffffff',
    1: '#e2f0d9',
    2: '#fbe5d6',
    3: '#ccffcc',
    4: '#fff2cc',
    5: '#deebf7',
    6: '#e6cdb4',
    7: '#b7ffff',
    8: '#cfafe7',
    'stroke': '#0032a6'
}


function TrianguloPascal({n = 5, width = 600, height = 600, cellWidth = 50, cellHeight = 40, gap = 20, margin = 20}) {

    const svgRef = useRef();

    const triangulo = useMemo(() => {

        const triangulo = generateTrianguloPascal(n);

        const width = triangulo.at(-1).length * (cellWidth + gap) - gap;
        const height = triangulo.length * (cellHeight + gap) - gap;

        return {
            values: triangulo,
            width,
            height,
        };

    }, [n, cellWidth, cellHeight]);

    const svg = useMemo(() => {

        return {
            width: (width - 2 * margin),
            height: (height - 2 * margin),
            center: {
                x: (width - 2 * margin) / 2,
                y: (height - 2 * margin) / 2
            },
            x: (n = 0) => margin + n,
            y: (n = 0) => margin + n 
        }

    }, [width, height, margin]);




    return (<>
    
        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            {/* <g className="graph">

                {<path {...{

                    d: [
                        `M${svg.x(svg.center.x) } ${svg.y(0)}`,
                        `L${svg.x(svg.center.x + (triangulo.width / 2) + cellWidth)} ${svg.y(triangulo.height + cellHeight * 1.2)}`,
                        `L${svg.x(svg.center.x - (triangulo.width / 2) - cellWidth)} ${svg.y(triangulo.height + cellHeight * 1.2)}`,
                        `L${svg.x(svg.center.x)} ${svg.y(0)}`
                    ].join(' '),        

                    fill: '#dfdddd',
                    stroke: COLORS.stroke
                }}/>}

                {
                    triangulo.values.map((row, i) => {

                        const currentRowWidth = row.length * (cellWidth + gap) - gap;

                        return <g className="row" data-row={i} key={`row-${i}`}
                        
                            transform={`translate(${0}, ${0})`}
                        >
                            {
                                row.map((value, j) => {

                                    const x = svg.x( (svg.center.x - currentRowWidth / 2) + (cellWidth+ gap) * j );   
                                    const y = svg.y( (cellHeight + gap) * i + cellHeight)   

                                    return <g className="cell" data-row={i} data-cell={j} key={`cell-${i}-${j}`}>
                                        
                                        <rect {...{
                                            width: cellWidth,
                                            height: cellHeight,
                                            x,
                                            y, 
                                            fill: COLORS[i],
                                            stroke: COLORS.stroke,
                                            rx: 10,
                                            ry: 10
                                        }}/>

                                        <text {...{
                                            x: x + (cellWidth / 2),
                                            y: y + (cellHeight / 2),
                                            fontSize: 30,
                                            textAnchor: 'middle',
                                            dominantBaseline: 'central',
                                            fontFamily: `"Noto Sans Math", sans-serif`,
                                        }}>
                                            {value}
                                        </text>
                                    </g>
                                })
                            }

                        </g>
                    })
                }

            </g> */}

            <g className="graph">

                {<path {...{

                    d: [
                        `M${svg.x(svg.center.x) } ${svg.y(0)}`,
                        `L${svg.x(svg.center.x + (triangulo.width / 2) + cellWidth)} ${svg.y(triangulo.height + cellHeight * 1.2)}`,
                        `L${svg.x(svg.center.x - (triangulo.width / 2) - cellWidth)} ${svg.y(triangulo.height + cellHeight * 1.2)}`,
                        `L${svg.x(svg.center.x)} ${svg.y(0)}`
                    ].join(' '),        

                    fill: '#dfdddd',
                    stroke: COLORS.stroke
                }}/>}

                {
                    LayoutTriangulo({triangulo: triangulo.values}).map((row, i) => {

                        console.log(row);

                        return <g className="row" data-row={i} key={`row-${i}`}
                        
                            transform={`translate(${0}, ${0})`}
                        >
                            {
                                row.values.map((cell, j) => {

                                    return <g className="cell" data-row={i} data-cell={j} key={`cell-${i}-${j}`}>
                                        
                                        <rect {...{
                                            width: cell.width,
                                            height: cell.height,
                                            x: cell.x,
                                            y: cell.y, 
                                            fill: COLORS[i],
                                            stroke: COLORS.stroke,
                                            rx: 10,
                                            ry: 10
                                        }}/>

                                        <text {...{
                                            x: cell.x + (cell.width / 2),
                                            y: cell.y + (cell.height / 2),
                                            fontSize: 30,
                                            textAnchor: 'middle',
                                            dominantBaseline: 'central',
                                            fontFamily: `"Noto Sans Math", sans-serif`,
                                        }}>
                                            {cell.value}
                                        </text>
                                    </g>
                                })
                            }

                        </g>
                    })
                }

            </g>

        </svg>
        
    </>);
}

export default TrianguloPascal;