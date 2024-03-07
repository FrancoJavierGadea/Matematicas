import { useMemo, useRef, useState } from "react";
import "./RazonesTrigonometricas.css";
import Graph from "./Graph";
import Dropdown from "@components/React/Dropdown";

const MODES = [
    {value:  'sin', text: 'Seno'},
    {value:  'cos', text: 'Coseno'},
    {value:  'tan', text: 'Tangente'},
    {value:  'cot', text: 'Cotangente'},
    {value:  'sec', text: 'Secante'},
    {value:  'csc', text: 'Cosecante'},
];


function RazonesTrigonometricas() {

    const [angle, setAngle] = useState(55);
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


    return (<div className="Graph-Razones-trigonometricas">

        <div className="controls">
            <Dropdown text="Mostrar">
                {
                    MODES.map(({value, text}, i) => {

                        const isActive = !hide.includes(value);

                        return <div className="form-check" key={`btn-check-${i}`}>
                            <input className="form-check-input" type="checkbox" value={value} checked={isActive} onChange={handleHide} id={`btn-check-${i}`} />
                            <label className="form-check-label" htmlFor={`btn-check-${i}`}>{text}</label>
                        </div>
                    })
                }
            </Dropdown>

            <div className="Razones-trigonometricas-angle">
                <h4 className="value">{angle}º</h4>

                <input className="form-range" type="range" min={0} max={360} value={angle} onChange={(e) => setAngle(+e.currentTarget.value)} />
            </div>
        </div>

     

        <Graph angle={`${angle}deg`} hide={hide} />
    </div>);
}

export default RazonesTrigonometricas;