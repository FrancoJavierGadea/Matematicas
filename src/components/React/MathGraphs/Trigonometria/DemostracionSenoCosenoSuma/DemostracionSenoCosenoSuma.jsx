
import "./DemostracionSenoCosenoSuma.css";
import { useMemo, useRef, useState } from "react";
import { cos, sin } from "@utils/MathUtils";
import { useZoom } from "@components/React/GraphSVG/hooks/useZoom";
import Graph from "./Graph";

const MODES = [
    { value: 'triangle-alpha', text: 'Triangulo Alpha' },
    { value: 'triangle-beta', text: 'Triangulo Beta' },
    { value: 'triangle-gamma', text: 'Triangulo Alpha + beta' },
    { value: 'triangle-texts', text: 'Textos triangulos' },
    { value: 'arrows-guides', text: 'Flechas' },
    { value: 'aux-guides', text: 'Guias' }
];


function SenoCosenoDeUnaSumaAngulos() {

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

    const [hide, setHide] = useState('');

    const handleHide = (e) => {

        const value = e.currentTarget.value;
        const checked = e.currentTarget.checked;

        setHide(old => {
            if (!checked) {
                return old.concat(` ${value}`);
            }
            else {
                return old.replaceAll(value, '');   
            };
        });
    }

    return (<div className="Seno-Coseno-de-una-suma-demostracion">

        <div className="controls">

            <ul className="hide-controls">{
                MODES.map(({value, text}, i) => {

                    const isActive = !hide.includes(value);

                    return <li key={`btn-check-${i}`}>
                        <input type="checkbox" className="btn-check" id={`btn-check-${i}`} autoComplete="off" value={value} checked={isActive} onChange={handleHide} />
                        <label className="btn" htmlFor={`btn-check-${i}`}>{text}</label>
                    </li>
                })
            }</ul>
            
            <div className="angles">
                <div>
                    <h4 className="value">{alfa}º</h4>

                    <input className="form-range" type="range" min={0} max={90} value={alfa} onChange={handleAlfa} />
                </div>
                <div>
                    <h4 className="value">{beta}º</h4>

                    <input className="form-range" type="range" min={0} max={90} value={beta} onChange={handleBeta} />
                </div>
            </div>
        </div>

        <Graph angles={[`${alfa}deg`, `${beta}deg`]} hide={hide}/>
    </div>);
};

export default SenoCosenoDeUnaSumaAngulos;