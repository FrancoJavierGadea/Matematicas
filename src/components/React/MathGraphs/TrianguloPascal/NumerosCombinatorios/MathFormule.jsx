
import { useMemo } from "react";
import "./MathFormule.css";

export function MathFormule({n = 'n', r = 'r', result = 'k', ncr, showFormule = true,  colors = {}, style = {}, ...others}){

    const varColors = useMemo(() => {

        return Object.entries(colors).reduce((acc, [key, value]) => {

            acc[`--${key}`] = value;

            return acc;
        }, {});

    }, [colors])


    return (<math className="Numeros-conbinatorios-formule" display="block" 
    
        style={{...varColors, ...style}} {...others}
    >
        <mrow>
            {
                ncr ? <>
                    <mn className="var-n">{n}</mn>
                    <mo style={{fontSize: '1.5em'}} lspace="0.1em" rspace="0.1em">C</mo>
                    <mn className="var-r">{r}</mn>
                </>     
                :
                <mrow>
                    <mo>(</mo>
                    <mfrac linethickness="0">
                        <mn className="var-n">{n}</mn>
                        <mn className="var-r">{r}</mn>
                    </mfrac>
                    <mo>)</mo>
                </mrow>
            }

            {
                showFormule && <>
                    <mo lspace="0.5em" rspace="0.5em"> = </mo>
                    <mfrac linethickness="1px">
                        <mrow>
                            <mn className="var-n">{n}</mn>
                            <mo>!</mo>
                        </mrow>
                        <mrow>
                            <mn className="var-r">{r}</mn>
                            <mo>!</mo>
                            <mo lspace="0.5em" rspace="0.3em">&sdot;</mo>
                            <mrow>
                            <mo>(</mo>
                                <mn className="var-n">{n}</mn>
                                <mo>&minus;</mo>
                                <mn className="var-r">{r}</mn>
                            <mo>)</mo>
                            </mrow>
                            <mo>!</mo>
                        </mrow>
                    </mfrac>
                </>
            }
            
            <mo lspace="0.5em" rspace="0.5em"> = </mo>

            <mn className="result">{result}</mn>
        </mrow>
    </math>);
} 