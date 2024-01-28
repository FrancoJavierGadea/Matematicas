import { useMemo } from "react";

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

function Triangulo({className, triangulo, showLabels, showPath, labelsGap = 80, fontSize = 20, margin = 50, ...others}) {

    const d = useMemo(() => {

        return [
            `M${triangulo.centerX} ${0 - margin}`,
            `L${triangulo.width + margin} ${triangulo.height + margin * 0.2}`,
            `L${0 - margin} ${triangulo.height + margin * 0.2}`,
            `L${triangulo.centerX} ${0 - margin}`
        ]
        .join(' '); 

    }, [triangulo, margin]);

    return (<g className={`Triangulo ${className}`} {...others}>

        {   showPath &&
            <path className="Triangulo-bg" {...{
                d,        
                fill: '#dfdddd',
                stroke: COLORS.stroke
            }}/>
        }

        {triangulo.rows.map((row) => {

            return <g className="row" data-row={row.index} key={row.name}>

                {
                    showLabels &&
                    <text {...{
                        x: row.x - labelsGap,
                        y: row.y + row.height / 2,
                        fontSize,
                        textAnchor: 'middle',
                        dominantBaseline: 'central',
                        fontFamily: `"Noto Sans Math", sans-serif`,
                    }}>
                        Fila {row.index}
                    </text>
                }

                {
                    row.cells.map((cell) => {

                        const {width, height, x, y, name, value, rowIndex, index} = cell;

                        return <g className="cell" data-row={rowIndex} data-cell={index} key={name}>
                            
                            <rect {...{
                                width, height,
                                x,
                                y, 
                                fill: COLORS[rowIndex] || '#fff',
                                stroke: COLORS.stroke,
                                rx: 10, ry: 10
                            }}/>

                            <text {...{
                                x: x + (width / 2),
                                y: y + (height / 2),
                                fontSize,
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
        })}

    </g>);
}

export default Triangulo;