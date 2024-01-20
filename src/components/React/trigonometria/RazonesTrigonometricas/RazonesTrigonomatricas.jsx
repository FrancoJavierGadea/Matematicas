import { useMemo, useRef, useState } from "react";
import CartesianSystem from "@React/utils/CartesianSystem";
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


function RazonesTrigonometricas({width = 960, height = 540, margin = 20, size = 800}) {

    const svgRef = useRef();

    const [angle, setAngle] = useState(60);
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


    return (<div className="Graph-Razones-trigonometricas">

        <ul className="controls">{
            MODES.map(({ value, text }, i) => {

                const isActive = mode.includes('all') || mode.includes(value);

                return <li key={`btn-check-${i}`}>
                    <input type="checkbox" className="btn-check" id={`btn-check-${i}`} autoComplete="off" value={value} checked={isActive} onChange={handleMode} />
                    <label className="btn" htmlFor={`btn-check-${i}`}>{text}</label>
                </li>
            })
        }</ul>

        <div className="Razones-trigonometricas-angle">
            <h4 className="value">{angle}º</h4>

            <input className="form-range" type="range" min={0} max={360} value={angle} onChange={(e) => setAngle(+e.currentTarget.value)} />
        </div>

        <div className="Razones-trigonometricas-values" style={{maxWidth: width}}>
            {mode.find(v => ['sin-cos', 'all'].includes(v)) && <>
                <div> 
                    sin(<span className="angle">{angle}º</span>) =  <span className="value">{razones.sin.toFixed(2)}</span>
                </div>

                <div> 
                    cos(<span className="angle">{angle}º</span>) = <span className="value">{razones.cos.toFixed(2)}</span>
                </div>
            </>}

            {mode.find(v => ['tan', 'all'].includes(v)) && <div> 
                tan(<span className="angle">{angle}º</span>) = <span className="value">{razones.tan.toFixed(2)}</span>
            </div>}

            {mode.find(v => ['cot', 'all'].includes(v)) && <div> 
                cot(<span className="angle">{angle}º</span>) =  <span className="value">{razones.cot.toFixed(2)}</span>
            </div>}

            {mode.find(v => ['sec', 'all'].includes(v)) && <div> 
                sec(<span className="angle">{angle}º</span>) = <span className="value">{razones.sec.toFixed(2)}</span>
            </div>}

            {mode.find(v => ['csc', 'all'].includes(v)) && <div> 
                csc(<span className="angle">{angle}º</span>) = <span className="value">{razones.csc.toFixed(2)}</span>
            </div>}
        </div>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <CartesianSystem size={size} cx={width / 2} cy={height / 2} 

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

                    <Angle cx={origin.x} cy={origin.y} radius={50} angle={angle} stroke={'#00f'} fill={'#0000ff37'} />

                    <line className="line-origin-to-point" x1={origin.x} y1={origin.y} x2={px} y2={py} stroke={'#777'}/>

                    
                    {mode.find(v => ['tan', 'sec', 'all'].includes(v)) && <>

                        <line className="tan-axis" x1={tan.x} y1={y(-2)} x2={tan.x} y2={y(2)} stroke={'#777'} strokeWidth={2} strokeDasharray={4} />

                        <line className="tan-line-proyection" x1={px} y1={py} x2={tan.x} y2={tan.y} stroke={'#777'} strokeDasharray={4} />

                        <circle cx={tan.x} cy={origin.y} r={3} fill={'#000000'} stroke={'none'} />

                        <circle cx={tan.x} cy={tan.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}

                    {mode.find(v => ['cot', 'csc', 'all'].includes(v)) && <>
                    
                        <line className="cot-axis" x1={x(-2)} y1={cot.y} x2={x(2)} y2={cot.y} stroke={'#777'} strokeWidth={2} strokeDasharray={4} />
                        
                        <line className="cot-line-proyection" x1={px} y1={py} x2={cot.x} y2={cot.y} stroke={'#777'} strokeDasharray={4} />

                        <circle cx={cot.x} cy={cot.y} r={3} fill={'#000000'} stroke={'none'} />

                        <circle cx={origin.x} cy={cot.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}
                    
                    {mode.find(v => ['sin-cos', 'all'].includes(v)) && <>
                     
                        <LineWithText className="cos-value" x1={origin.x} y1={origin.y} x2={px} y2={origin.y} text="Cos" gapY={15} color={COLORS['cos']} />

                        <LineWithText className="sin-value" x1={px} y1={py} x2={px} y2={origin.y} text="Sin" gapX={15} color={COLORS['sin']} />

                        <circle cx={px} cy={origin.y} r={3} fill={'#000000'} stroke={'none'} />
                    </>}

                    {mode.find(v => ['tan', 'all'].includes(v)) && <>

                        <LineWithText className="tan-value" x1={tan.x} y1={origin.y} x2={tan.x} y2={tan.y} text="Tan" gapX={15} color={COLORS['tan']} />
                    </>}
                
                    {mode.find(v => ['cot', 'all'].includes(v)) && <>
                    
                        <LineWithText className="cot-value" x1={origin.x} y1={cot.y} x2={cot.x} y2={cot.y} text="Cot" gapY={-15} color={COLORS['cot']} />
                    </>}

                    {mode.find(v => ['sec', 'all'].includes(v)) && <>

                        <LineWithText className="sec-value" x1={origin.x} y1={origin.y} x2={tan.x} y2={tan.y} text="Sec" gapX={15} gapY={15} color={COLORS['sec']} />
                    </>}

                    {mode.find(v => ['csc', 'all'].includes(v)) && <>

                        <LineWithText className="csc-value" x1={origin.x} y1={origin.y} x2={cot.x} y2={cot.y} text="Csc" gapX={-15} gapY={-15} color={COLORS['csc']} />
                    </>}

                    <circle className="origin" cx={origin.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
            </>)}}
            </CartesianSystem>

        </svg>
    </div>);
}

export default RazonesTrigonometricas;