import { useMemo, useRef, useState } from "react";
import CartesianSystem from "@React/CartesianSystem";
import { cos, cot, csc, degToRad, sec, sin, tan } from "@utils/MathUtils";
import Angle from "@React/utils/Angle";
import "./RazonesTrigonometricas.css";
import LineWithText from "@React/utils/LineWithText";

const MODES = [
    {value:  'sin-cos', text: 'Seno y Coseno'},
    {value:  'tan', text: 'Tangente'},
    {value:  'cot', text: 'Cotangente'},
    {value:  'sec', text: 'Secante'},
    {value:  'csc', text: 'Cosecante'},
    {value:  'all', text: 'Todos'}
];

const COLORS = {
    'sin': '#930000',
    'cos': '#8901c8',
    'tan': '#031684',
    'cot': '#0063d3',
    'sec': '#007b0c',
    'csc': '#d0a000',
}


function RazonesTrigonometricas({width = 960, height = 540, margin = 20}) {

    const svgRef = useRef();

    const [mode, setMode] = useState(MODES[0].value);
    const [angle, setAngle] = useState(60);

    const handleMode = (e) => {

        const value = e.currentTarget.value;

        setMode(value);
    } 

    const razones = useMemo(() => {

        return {
            sin: sin(angle),
            cos: cos(angle),
            tan: tan(angle),
            cot: cot(angle),
            sec: sec(angle),
            csc: csc(angle)
        };

    }, [angle]);


    return (<div className="Razones-trigonometricas">

        <ul className="nav nav-tabs">{
            MODES.map(({value, text}) => {

                const isActive = value === mode;

                return <li className="nav-item" key={`btn-${value}`}>

                    <button className={`nav-link ${isActive ? 'active' : ''}`} value={value} onClick={handleMode}>{text}</button>
                </li>
            })
        }</ul>

        <div className="Razones-trigonometricas-angle">
            <h4 className="value">{angle}º</h4>

            <input className="form-range" type="range" min={0} max={360} value={angle} onChange={(e) => setAngle(+e.currentTarget.value)} />
        </div>

        <div className="Razones-trigonometricas-values" style={{maxWidth: width}}>
            {['sin-cos', 'all'].includes(mode) && <>
                <div> 
                    <span className="razon">sin({angle}º)</span> <span> = </span> <span className="value">{razones.sin.toFixed(2)}</span>
                </div>

                <div> 
                    <span className="razon">cos({angle}º)</span> <span> = </span> <span className="value">{razones.cos.toFixed(2)}</span>
                </div>
            </>}

            {['tan', 'all'].includes(mode) && <div> 
                <span className="razon">tan({angle}º)</span> <span> = </span> <span className="value">{razones.tan.toFixed(2)}</span>
            </div>}

            {['cot', 'all'].includes(mode) && <div> 
                <span className="razon">cot({angle}º)</span> <span> = </span> <span className="value">{razones.cot.toFixed(2)}</span>
            </div>}

            {['sec', 'all'].includes(mode) && <div> 
                <span className="razon">sec({angle}º)</span> <span> = </span> <span className="value">{razones.sec.toFixed(2)}</span>
            </div>}

            {['csc', 'all'].includes(mode) && <div> 
                <span className="razon">csc({angle}º)</span> <span> = </span> <span className="value">{razones.csc.toFixed(2)}</span>
            </div>}
        </div>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <CartesianSystem size={700} cx={width / 2} cy={height / 2} 

                domainX={{min: -2, max: 2}} domainY={{min: -2, max: 2}}

                showAxis={true} showGrid={false}
            >
            {({x, y, origin, distance}) => {
                    
                const px = x(razones.cos);
                const py = y(razones.sin);

                const tan = { x: x(1), y: y(razones.tan === Infinity ? 1000 : razones.tan) };

                const cot = { x: x(razones.cot === Infinity ? 1000 : razones.cot), y: y(1) };
     
                return (<>
                            
                    <circle className="circle" cx={origin.x} cy={origin.y} r={distance({x: 1, y: 0})} fill={'none'} stroke={'#777'} strokeWidth={2} />

                    <circle className="point" cx={px} cy={py} r={4} fill={'#f00'} stroke={'none'} />

                    <Angle cx={origin.x} cy={origin.y} radius={50} angle={degToRad(angle)} stroke={'#00f'} fill={'#0000ff37'} />

                    <line className="line-origin-to-point" x1={origin.x} y1={origin.y} x2={px} y2={py} stroke={'#777'}/>

                    
                    {['tan', 'sec', 'all'].includes(mode) && <>

                        <line className="tan-axis" x1={tan.x} y1={y(-2)} x2={tan.x} y2={y(2)} stroke={'#777'} strokeWidth={2} strokeDasharray={4} />

                        <line className="tan-line-proyection" x1={px} y1={py} x2={tan.x} y2={tan.y} stroke={'#777'} strokeDasharray={4} />

                        <circle cx={tan.x} cy={origin.y} r={3} fill={'#000000'} stroke={'none'} />

                        <circle cx={tan.x} cy={tan.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}

                    {['cot', 'csc', 'all'].includes(mode) && <>
                    
                        <line className="cot-axis" x1={x(-2)} y1={cot.y} x2={x(2)} y2={cot.y} stroke={'#777'} strokeWidth={2} strokeDasharray={4} />
                        
                        <line className="cot-line-proyection" x1={px} y1={py} x2={cot.x} y2={cot.y} stroke={'#777'} strokeDasharray={4} />

                        <circle cx={cot.x} cy={cot.y} r={3} fill={'#000000'} stroke={'none'} />

                        <circle cx={origin.x} cy={cot.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}
                    
                    {['sin-cos', 'all'].includes(mode) && <>
                     
                        <LineWithText className="cos-value" x1={origin.x} y1={origin.y} x2={px} y2={origin.y} text="Cos" gapY={15} color={COLORS['cos']} />

                        <LineWithText className="sin-value" x1={px} y1={py} x2={px} y2={origin.y} text="Sin" gapX={15} color={COLORS['sin']} />

                        <circle cx={px} cy={origin.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}

                    {['tan', 'all'].includes(mode) && <>

                        <LineWithText className="tan-value" x1={tan.x} y1={origin.y} x2={tan.x} y2={tan.y} text="Tan" gapX={15} color={COLORS['tan']} />
                    </>}
                
                    {['cot', 'all'].includes(mode) && <>
                    
                        <LineWithText className="cot-value" x1={origin.x} y1={cot.y} x2={cot.x} y2={cot.y} text="Cot" gapY={-15} color={COLORS['cot']} />
                    </>}

                    {['sec', 'all'].includes(mode) && <>

                        <LineWithText className="sec-value" x1={origin.x} y1={origin.y} x2={tan.x} y2={tan.y} text="Sec" gapX={15} gapY={15} color={COLORS['sec']} />
                    </>}

                    {['csc', 'all'].includes(mode) && <>

                        <LineWithText className="csc-value" x1={origin.x} y1={origin.y} x2={cot.x} y2={cot.y} text="Csc" gapX={-15} gapY={-15} color={COLORS['csc']} />
                    </>}

                    <circle className="origin" cx={origin.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
            </>)}}
            </CartesianSystem>

        </svg>
    </div>);
}

export default RazonesTrigonometricas;