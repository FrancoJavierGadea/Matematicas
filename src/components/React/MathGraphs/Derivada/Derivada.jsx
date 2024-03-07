import { useState } from "react";
import Graph from "./Graph";
import './Derivada.css';
import Dropdown from "@components/React/Dropdown";

const MODES = [
    {value:  'tangente', text: 'Recta tangente'},
    {value:  'secante', text: 'Recta secante'},
    {value:  'triangles', text: 'Pendientes'},
    {value:  'triangle-sec', text: 'Pendiente secante'},
    {value:  'triangle-tan', text: 'Pendiente tangente'},
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

            <div className="h-value-control">
                <h4 className="value">{h}</h4>

                <input className="form-range" type="range" min={0} max={2} step={0.01} value={h} onChange={(e) => setH(+e.currentTarget.value)} />
            </div>
        </div>       
        <Graph h={h} hide={hide} />
    
    </div>);
}

export default Derivada;