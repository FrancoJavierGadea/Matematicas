import CartesianSystem from "@React/utils/CartesianSystem";
import "./SenoCosenoDeUnaSumaAngulos.css";
import { useMemo, useRef, useState } from "react";
import Angle from "@React/utils/Angle";
import { cos, sin } from "@utils/MathUtils";
import LineWithText from "@React/utils/LineWithText";
import KeyMark from "@React/utils/KeyMark";
import Triangle from "./Triangle";
import { useZoom } from "@components/React/hooks/useZoom";

const MODES = [
    { value: 'triangle-A', text: 'Triangulo A' },
    { value: 'triangle-B', text: 'Triangulo B' },
    { value: 'triangle-C', text: 'Triangulo C' },
    { value: 'proyections', text: 'Proyecciones' },
    { value: 'all', text: 'Todos' }
];

function SenoCosenoDeUnaSumaAngulos({ width = 640, height = 640, marginLeft = 50, marginBottom = 150}) {

    const svgRef = useRef();

    const zoom = useZoom({SVGRef: svgRef, elements: ['.graph']});

    const [alfa, setAlfa] = useState(30);
    const [beta, setBeta] = useState(30);
    
    const handleAlfa = (e) => {
        const value = Number(e.currentTarget.value);

        if((beta + value) >= 0 && (beta + value) <= 90){
            setAlfa(value);
        };
    }

    const handleBeta = (e) => {
        const value = Number(e.currentTarget.value);

        if((alfa + value) >= 0 && (alfa + value) <= 90){
            setBeta(value);
        };
    }

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
    }, [alfa, beta]);

    return (<div className="Seno-Coseno-de-una-suma-demostracion">

        <div className="controls">
            <ul className="modes">{
                MODES.map(({ value, text }, i) => {

                    const isActive = mode.includes('all') || mode.includes(value);

                    return <li key={`btn-check-${i}`}>
                        <input type="checkbox" className="btn-check" id={`btn-check-${i}`} autoComplete="off" value={value} checked={isActive} onChange={handleMode} />
                        <label className="btn" htmlFor={`btn-check-${i}`}>{text}</label>
                    </li>
                })
            }</ul>
            
            <div className="angles">
                <div>
                    <h4 className="value">α: {alfa}º</h4>
                    <input className="form-range" type="range" min={0} max={90} value={alfa} onChange={handleAlfa} />
                </div>
                <div>
                    <h4 className="value">β: {beta}º</h4>
                    <input className="form-range" type="range" min={0} max={90} value={beta} onChange={handleBeta} />
                </div>
            </div>
        </div>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>
            <g className="graph">
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

                        <circle className="circle"  {...{
                            cx: origin.x,   cy: origin.y,
                            r: distance({x: 1, y: 0}),
                            fill: 'none',   stroke: '#777',
                            strokeWidth: 2,
                        }}/>

                        {mode.find(v => ['triangle-A', 'all'].includes(v)) && <Triangle className="Triangle-A" origin={origin} angle={alfa} angleRadius={50} /> }

                        {mode.find(v => ['triangle-B', 'all'].includes(v)) && <Triangle className="Triangle-B" origin={origin} angle={beta} angleRadius={50} transform={`rotate(${-alfa.angle}, ${origin.x}, ${origin.y})`} />}

                        {mode.find(v => ['triangle-C', 'all'].includes(v)) && <Triangle className="Triangle-C" origin={origin} angle={gama} angleRadius={30} />}

                        {mode.find(v => ['proyections', 'all'].includes(v)) && <g className="proyections-lines">

                            <LineWithText className="line-m" {...{
                                x1: pivot.x,    y1: pivot.y, 
                                x2: pivot.x,    y2: origin.y, 
                                color: '#777', 
                                text: 'm', 
                                gapX: -15, 
                                strokeDasharray: 4,
                            }}/>

                            <LineWithText className="line-p" {...{
                                x1: pivot.x,    y1: pivot.y, 
                                x2: pivot.x,    y2: gama.y, 
                                color: '#777', 
                                text: 'p' ,
                                gapX: -15, 
                                strokeDasharray: 4,
                            }}/>

                            <line x1={pivot.x} y1={gama.y} x2={gama.x} y2={gama.y} stroke={'#777'} strokeDasharray={4} {...{

                            }}/>

                            <Angle  {...{
                                cx: pivot.x - 15,
                                cy: origin.y,
                                radius: 15,
                                rect: true,
                                stroke: '#007e04',
                                fill: '#007e0437',
                            }}/>

                            <Angle  {...{
                                cx: pivot.x - 15,   cy: gama.y + 15,
                                radius: 15, 
                                rect: true, 
                                stroke: '#007e04',  fill: '#007e0437',
                            }}/>

                            <Angle  {...{
                                cx: pivot.x,    cy: pivot.y, 
                                radius: 30, 
                                angle: 90 - alfa.angle, 
                                rotate: 180 - alfa.angle, 
                                stroke: '#6d6d6d',  fill: '#6d6d6d37',
                            }} />

                            <Angle  {...{
                                cx: pivot.x,    cy: pivot.y,
                                radius: 30,
                                angle: alfa.angle,
                                rotate: -90,
                                stroke: alfa.color, fill: `${alfa.color}40`,
                            }}/>

                            <circle cx={pivot.x} cy={pivot.y} r={3} fill={'#777'} stroke={'none'} />
                            <circle cx={pivot.x} cy={gama.y} r={3} fill={'#777'} stroke={'none'} />
                            <circle cx={pivot.x} cy={origin.y} r={3} fill={'#777'} stroke={'none'} />

                            <KeyMark {...{
                                x1: origin.x,   y1: origin.y, 
                                x2: alfa.x,     y2: origin.y, 
                                gap: 125, 
                                radius: 70, 
                                text: `Cos(${alfa.name})`,
                                color: alfa.color,
                                stroke: alfa.color,
                                strokeDasharray: 4
                            }} />

                            <KeyMark  {...{
                                x1: origin.x,   y1: origin.y,
                                x2: gama.x,     y2: origin.y,
                                gap: 20,
                                radius: 20,
                                text: `Cos(${gama.name})`,
                                color: gama.color,  stroke: gama.color,
                                strokeDasharray: 4,
                            }}/>

                            <KeyMark className="line-g" {...{
                                x1: gama.x,     y1: origin.y, 
                                x2: pivot.x,    y2: origin.y, 
                                gap: 20, 
                                radius: 20, 
                                text: "g", 
                                color: '#777',  stroke: '#777', 
                                strokeDasharray: 4
                            }} />

                            <KeyMark className="line-h" {...{
                                x1: origin.x,   y1: origin.y, 
                                x2: pivot.x,    y2: origin.y, 
                                gap: 70, 
                                radius: 40, 
                                text: "h", 
                                color: '#777', stroke: '#777777', 
                                strokeDasharray: 4
                            }} />
                        </g>}

                        <circle className="origin" {...{
                            cx: origin.x,   cy: origin.y, 
                            r: 3, 
                            fill: '#000', stroke: 'none' 
                        }} />

                    </>)
                }}
                </CartesianSystem>
            </g>
        </svg>
    </div>);
};

export default SenoCosenoDeUnaSumaAngulos;