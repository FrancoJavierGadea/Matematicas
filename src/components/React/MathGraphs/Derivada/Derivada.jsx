import { useState } from "react";
import Graph from "./Graph";
import './Derivada.css';

const MODES = [
    {value:  'tangente', text: 'Recta tangente'},
    {value:  'secante', text: 'Recta secante'},
    {value:  'triangles', text: 'Pendientes'},
];

function Derivada() {

    const [h, setH] = useState(0.8);
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

    return (<div className="Definicion-de-la-derivada">

        <ul className="controls">{
            MODES.map(({value, text}, i) => {

                const isActive = !hide.includes(value);

                return <li key={`btn-check-${i}`}>
                    <input type="checkbox" className="btn-check" id={`btn-check-${i}`} autoComplete="off" value={value} checked={isActive} onChange={handleHide} />
                    <label className="btn" htmlFor={`btn-check-${i}`}>{text}</label>
                </li>
            })
        }</ul>

        <div className="h-value-control">
            <h4 className="value">{h}</h4>

            <input className="form-range" type="range" min={0} max={2} step={0.01} value={h} onChange={(e) => setH(+e.currentTarget.value)} />
        </div>

        <Graph h={h} hide={hide} />
    
    </div>);
}

export default Derivada;