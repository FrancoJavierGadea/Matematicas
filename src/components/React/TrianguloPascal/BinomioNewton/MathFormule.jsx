
import { BASICS as $ } from "@utils/MathSimbols.js";
import "./MathFormule.css";
import { useMemo } from "react";

function MathFormule({n = 'n', coeficientes = [], resta = false, showAll = false, colors = {}, style = {}, ...others}) {

    const varColors = useMemo(() => {

        return Object.entries(colors).reduce((acc, [key, value]) => {

            acc[`--${key}`] = value;

            return acc;
        }, {});

    }, [colors])

    return (<math className="Binomio-Newton-formule" display="block" 
    
        style={{...varColors, ...style}} {...others}
    >
   
        <mrow>
            <msup>
                <mrow>
                    <mo>(</mo>
                        <mi className="var-a">a</mi>
                        <mo>{resta ? $.resta.toString() : $.suma.toString()}</mo>
                        <mi className="var-b">b</mi>
                    <mo>)</mo>
                </mrow>
                <mn className="var-n">{n}</mn>
            </msup>

            <mo lspace="0.5em" rspace="0.5em">{$.igual.toString()}</mo>

            {
                coeficientes.map((value, i) => {

                    return <mrow className="Termino" key={`termino-${i + 1}`}>

                        {//Signo
                            (i > 0) &&
                            <mo lspace="0.5em" rspace="0.5em">
                            {
                                (() => {

                                    if(!resta) return $.suma.toString();

                                    return i % 2 === 0 ?
                                        $.suma.toString()
                                    :
                                        $.resta.toString();
                                })()
                            }
                            </mo>
                        }

                        {//Coeficiente
                            (showAll || value !== 1 || n === 0) && <>
                            
                                <mn className="coeficiente">{value}</mn>
                            </>
                        }
                        {
                            (showAll || value !== 1) && <>
                            
                                <mo>{$.productoEscalar.toString()}</mo> 
                            </>
                        }
                        <Factor base="a" exponente={n - i} showExp0={showAll} showExp1={showAll} />
                        {
                            (showAll || (i !== 0 && n - i !== 0)) && <>
                            
                                <mo>{$.productoEscalar.toString()}</mo>
                            </>
                        }
                        <Factor base="b" exponente={i} showExp0={showAll} showExp1={showAll} />
                    </mrow>
                })

            }
        </mrow>
    
    </math>);
}

export default MathFormule;


function Factor({base = 'a', exponente = 0, showExp1, showExp0}){

    return (<>
        {
            (exponente !== 0 || showExp0) && <>
                {
                    (exponente === 1 && !showExp1) ?

                        <mi className={`var-${base}`}>{base}</mi>

                    :
                        <msup>
                            <mi className={`var-${base}`}>{base}</mi>
                            <mn className={`exponente exponente-${base}`}>{exponente}</mn>
                        </msup>
                }
            </>
        }
    </>);
}