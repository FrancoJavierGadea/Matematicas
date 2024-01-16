

import CartesianSystem from "@React/utils/CartesianSystem";
import "./SenoCosenoDeUnaSumaAngulos.css";
import { useMemo, useRef, useState } from "react";
import Angle from "@React/utils/Angle";
import { cos, sin } from "@utils/MathUtils";
import LineWithText from "@React/utils/LineWithText";
import KeyMark from "@React/utils/KeyMark";

const values = {
    'alfa': 30,
    'beta': 30
}

const MODES = [
    { value: 'triangle-A', text: 'Triangulo A' },
    { value: 'triangle-B', text: 'Triangulo B' },
    { value: 'triangle-C', text: 'Triangulo C' },
    { value: 'proyections', text: 'Proyecciones' },
    { value: 'all', text: 'Todos' }
]

function SenoCosenoDeUnaSumaAngulos({ width = 960, height = 540, marginLeft = 20, marginBottom }) {

    const svgRef = useRef();

    const [mode, setMode] = useState([...MODES.map(mode => mode.value)]);

    const handleMode = (e) => {

        const value = e.currentTarget.value;
        const checked = e.currentTarget.checked;

        setMode(old => {
            if (checked) {
                if (value === 'all') return [...MODES.map(mode => mode.value)];

                return [...old, value];
            }
            else {
                if (value === 'all') return [];

                return [...old.filter(v => v !== value && v !== 'all')];
            };
        });
    }

    const angles = useMemo(() => {

        const { alfa, beta } = values;

        return {
            alfa: {
                name: 'α',
                angle: alfa,
                sin: sin(alfa),
                cos: cos(alfa),
                color: '#0000ff'
            },
            beta: {
                name: 'β',
                angle: beta,
                sin: sin(beta),
                cos: cos(beta),
                color: '#9005a5'
            },
            gama: {
                name: 'α + β',
                angle: alfa + beta,
                sin: sin(alfa + beta),
                cos: cos(alfa + beta),
                color: '#c56900'
            }
        }
    }, []);

    return (<div className="Seno-Coseno-de-una-suma-demostracion">

        <ul className="controls">{
            MODES.map(({ value, text }, i) => {

                const isActive = mode.includes('all') || mode.includes(value);

                return <li key={`btn-check-${i}`}>
                    <input type="checkbox" className="btn-check" id={`btn-check-${i}`} autoComplete="off" value={value} checked={isActive} onChange={handleMode} />
                    <label className="btn" htmlFor={`btn-check-${i}`}>{text}</label>
                </li>
            })
        }</ul>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <CartesianSystem size={2000} cx={marginLeft} cy={height - marginBottom}

                domainX={{ min: -2, max: 2 }} domainY={{ min: -2, max: 2 }}

                showAxis={true} showGrid={false}
            >
                {({ x, y, origin, distance }) => {

                    const alfa = {
                        ...angles.alfa,
                        x: x(angles.alfa.cos),
                        y: y(angles.alfa.sin)
                    }
                    const beta = {
                        ...angles.beta,
                        x: x(angles.beta.cos),
                        y: y(angles.beta.sin)
                    }
                    const gama = {
                        ...angles.gama,
                        x: x(angles.gama.cos),
                        y: y(angles.gama.sin)
                    }

                    const pivot = {
                        y: y(angles.alfa.sin * angles.beta.cos),
                        x: x(angles.alfa.cos * angles.beta.cos)
                    }

                    return (<>

                        <circle className="circle" cx={origin.x} cy={origin.y} r={distance({ x: 1, y: 0 })} fill={'none'} stroke={'#777'} strokeWidth={2} />

                        {mode.find(v => ['triangle-A', 'all'].includes(v)) && <g className="triangle triangle-A">

                            <path className="bg" d={`M${origin.x} ${origin.y}L${alfa.x} ${origin.y} L${alfa.x} ${alfa.y} L${origin.x} ${origin.y}`} fill={`${alfa.color}`} />

                            <Angle cx={origin.x} cy={origin.y} radius={50} angle={alfa.angle} stroke={alfa.color} fill={`${alfa.color}60`} />

                            <line x1={origin.x} y1={origin.y} x2={alfa.x} y2={alfa.y} stroke={alfa.color} />

                            <LineWithText {...{x1: origin.x, y1: origin.y, x2: alfa.x, y2: origin.y}} {...{color: alfa.color, text: `cos(${alfa.name})`, gapY: -15}} />

                            <LineWithText {...{x1: alfa.x, y1: alfa.y, x2: alfa.x, y2: origin.y}} {...{color: alfa.color, text: `sin(${alfa.name})`, gapX: -25}} />

                            <KeyMark {...{x1: origin.x, y1: origin.y, x2: alfa.x, y2: origin.y, gap: 125, radius: 70}} {...{text: `Cos(${alfa.name})`, color: alfa.color, stroke: alfa.color, strokeDasharray: 4}} />

                            <circle {...{cx: alfa.x, cy: origin.y, r: 3, fill: '#000', stroke: 'none'}} />
                            <circle {...{cx: alfa.x, cy: alfa.y, r: 3, fill: '#000', stroke: 'none'}} />
                        </g>}

                        {mode.find(v => ['triangle-B', 'all'].includes(v)) && <g className="triangle triangle-B" transform={`rotate(${-beta.angle} ${origin.x} ${origin.y})`}>

                            <path className="bg" d={`M${origin.x} ${origin.y}L${beta.x} ${origin.y} L${beta.x} ${beta.y} L${origin.x} ${origin.y}`} fill={`${beta.color}`} />

                            <Angle cx={origin.x} cy={origin.y} radius={50} angle={alfa.angle} stroke={beta.color} fill={`${beta.color}60`} />

                            <line x1={origin.x} y1={origin.y} x2={beta.x} y2={beta.y} stroke={beta.color} />

                            <LineWithText x1={origin.x} y1={origin.y} x2={beta.x} y2={origin.y} color={beta.color} text={`cos(${beta.name})`} gapY={-15} />

                            <LineWithText x1={beta.x} y1={beta.y} x2={beta.x} y2={origin.y} color={beta.color} text={`sin(${beta.name})`} gapX={-25} />

                            <Angle cx={beta.x - 15} cy={origin.y} radius={15} rect stroke={'#007e04'} fill={'#007e0437'} />

                            <circle cx={beta.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
                            <circle cx={beta.x} cy={beta.y} r={3} fill={'#000'} stroke={'none'} />
                        </g>}

                        {mode.find(v => ['triangle-C', 'all'].includes(v)) && <g className="triangle triangle-C">

                            <path className="bg" d={`M${origin.x} ${origin.y}L${gama.x} ${origin.y} L${gama.x} ${gama.y} L${origin.x} ${origin.y}`} fill={`${gama.color}`} />

                            <Angle cx={origin.x} cy={origin.y} radius={30} angle={gama.angle} stroke={gama.color} fill={`${gama.color}60`} />

                            <line x1={origin.x} y1={origin.y} x2={gama.x} y2={gama.y} stroke={gama.color} />

                            <LineWithText x1={origin.x} y1={origin.y} x2={gama.x} y2={origin.y} color={gama.color} text={`cos(${gama.name})`} gapY={-15} />

                            <LineWithText x1={gama.x} y1={gama.y} x2={gama.x} y2={origin.y} color={gama.color} text={`sin(${gama.name})`} gapX={-40} />

                            <KeyMark x1={origin.x} y1={origin.y} x2={gama.x} y2={origin.y} gap={20} radius={20} text={`Cos(${gama.name})`} color={gama.color} stroke={gama.color} strokeDasharray={4} />

                            <circle cx={gama.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
                            <circle cx={gama.x} cy={gama.y} r={3} fill={'#000'} stroke={'none'} />
                        </g>}

                        {mode.find(v => ['proyections', 'all'].includes(v)) && <g className="proyections-lines">

                            <LineWithText x1={pivot.x} y1={pivot.y} x2={pivot.x} y2={origin.y} color={'#777'} text="m" gapX={-15} strokeDasharray={4} />

                            <LineWithText x1={pivot.x} y1={pivot.y} x2={pivot.x} y2={gama.y} color={'#777'} text="p" gapX={-15} strokeDasharray={4} />

                            <line x1={pivot.x} y1={gama.y} x2={gama.x} y2={gama.y} stroke={'#777'} strokeDasharray={4} />

                            <Angle cx={pivot.x - 15} cy={origin.y} radius={15} rect stroke={'#007e04'} fill={'#007e0437'} />

                            <Angle cx={pivot.x - 15} cy={gama.y + 15} radius={15} rect stroke={'#007e04'} fill={'#007e0437'} />

                            <Angle cx={pivot.x} cy={pivot.y} radius={30} angle={90 - alfa.angle} rotate={180 - alfa.angle} stroke={'#6d6d6d'} fill={'#6d6d6d37'} />

                            <Angle cx={pivot.x} cy={pivot.y} radius={30} angle={alfa.angle} rotate={-90} stroke={alfa.color} fill={`${alfa.color}40`} />

                            <circle cx={pivot.x} cy={pivot.y} r={3} fill={'#777'} stroke={'none'} />
                            <circle cx={pivot.x} cy={gama.y} r={3} fill={'#777'} stroke={'none'} />
                            <circle cx={pivot.x} cy={origin.y} r={3} fill={'#777'} stroke={'none'} />

                            <KeyMark {...{ x1: gama.x, y1: origin.y, x2: pivot.x, y2: origin.y, gap: 20, radius: 20, text: "g", color: '#777', stroke: '#777', strokeDasharray: 4 }} />

                            <KeyMark {...{ x1: origin.x, y1: origin.y, x2: pivot.x, y2: origin.y, gap: 70, radius: 40, text: "h", color: '#777', stroke: '#777', strokeDasharray: 4 }} />
                        </g>}

                        <circle {...{ className: 'origin', cx: origin.x, cy: origin.y, r: 3, fill: '#000', stroke: 'none' }} />

                    </>)
                }}
            </CartesianSystem>
        </svg>

    </div>);
}

export default SenoCosenoDeUnaSumaAngulos;