import { useEffect, useId, useState } from "react";
import "./MathFormuleWrapper.css";
import { MathFormule } from "./MathFormule";

function MathFormuleWrapper({n, r, result, showControls, colors = {}}) {

    const id = useId();

    const [formula, setFormula] = useState(false);
    const [ncr, setNcr] = useState(false);

    useEffect(() => {
        
        setFormula(false);
        setNcr(false);

    }, [showControls]);


    return (<div className="Math-formule-wrapper">

        <MathFormule n={n} r={r} result={result} showFormule={formula} ncr={ncr} colors={colors} />

        {
            showControls &&
            <div className="controls">
                <div>
                    <input type="checkbox" className="btn-check" id={`${id}-nCr`} autoComplete="off" 
                    
                        checked={ncr} onChange={() => setNcr(!ncr)}
                    />
                    <label className="btn" htmlFor={`${id}-nCr`}>nCr</label>
                </div>
                <div>
                    <input type="checkbox" className="btn-check" id={`${id}-formula`} autoComplete="off" 
                    
                        checked={formula} onChange={() => setFormula(!formula)}
                    />
                    <label className="btn" htmlFor={`${id}-formula`}>Formula</label>
                </div>
            </div>
        }

    </div>);
}

export default MathFormuleWrapper;