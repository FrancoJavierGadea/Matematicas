import { useEffect, useId, useState } from "react";
import MathFormule from "./MathFormule";
import "./MathFormuleWrapper.css";

function MathFormuleWrapper({n, coeficientes, showControls = false, colors = {}}) {

    const id = useId();

    const [resta, setResta] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        
        setResta(false);
        setShowAll(false);

    }, [showControls]);

    return (<div className="Math-formule-wrapper">

        <MathFormule n={n} coeficientes={coeficientes} resta={resta} showAll={showAll} colors={colors}/>

        {
            showControls &&
            <div className="controls">
                <div>
                    <input type="checkbox" className="btn-check" id={`${id}-resta`} autoComplete="off" 
                    
                        checked={resta} onChange={() => setResta(v => !v)}
                    />
                    <label className="btn" htmlFor={`${id}-resta`}>Resta</label>
                </div>
                <div>
                    <input type="checkbox" className="btn-check" id={`${id}-showAll`} autoComplete="off" 
                    
                        checked={showAll} onChange={() => setShowAll(v => !v)}
                    />
                    <label className="btn" htmlFor={`${id}-showAll`}>Mostrar todo</label>
                </div>
            </div>
        }

    </div>);
}

export default MathFormuleWrapper;