
import { loadAndStyleSVG } from "@utils/SVGUtils.js";
import { useEffect, useMemo, useState } from "react";




function Equation({SVGPath, colors = {}, ...others}) {

    const [equation, setEquation] = useState(null);

    useEffect(() => {

        if(!SVGPath) return;

        loadAndStyleSVG(SVGPath, colors)
        .then(value => {

            setEquation(value.url);
        });

    }, [SVGPath, colors]);

    return (<>
    
        <img src={equation} {...others} />
    
    </>);
}

export default Equation;