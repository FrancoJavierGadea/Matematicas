
import { useMemo, useRef } from "react";
import "./Ruffini.css";
import { CalculateRuffini } from "./CalcRuffini";
import { BASICS } from "@utils/MathSimbols.js";
import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";
import Termino from "@components/React/utils/MathML/Termino";
import Tooltip from "@components/React/utils/MathML/Tooltip/Tooltip.jsx";



const n = 3;
const coeficientes = [2, 3, 0, -4];
const r = -1;


function Ruffini() {

    const values = useMemo(() => {

        return CalculateRuffini({n, r, coeficientes})

    }, [n, r, coeficientes]);

    return (<div className="Ruffini">

        <table>
            <tbody>
                <tr>
                    <td></td>
                    {
                        coeficientes.map((value, i) => {

                            return <td className="over" key={`coeficientes-a-${i}`}>

                                <math>
                                    <Termino cof={value} />
                                </math>

                                <Tooltip>
                                    <math>
                                        <Termino 
                                            cof={value}
                                            base={'a'}
                                            exp={n - i}
                                        />
                                    </math>
                                </Tooltip>
                            </td>
                        })
                    }
                </tr>
                <tr>
                    <td className="over">
                        <math>
                            <Termino cof={r} />
                        </math>

                        <Tooltip>
                            <math>
                                <mrow>
                                    <mo>(</mo>
                                        <mi>a</mi>
                                        <mo>{r > 0 ? BASICS.resta.toString() : BASICS.suma.toString()}</mo>
                                        <mn>{Math.abs(r)}</mn>
                                    <mo>)</mo>
                                </mrow>
                            </math>
                        </Tooltip>
                    </td>

                    {
                        values.result.map((value, i, array) => {

                            if(i === 0) return <td key={`coeficientes-b-${i}`}></td>;

                            //b = r * prev + cof
                            const cof = coeficientes[i];
                            const b = value - cof;
                            const prev = array[i - 1];

                            const text = b < 0 ? `${BASICS.resta}${Math.abs(b)}` : b;

                            return <td className="over" key={`coeficientes-b-${i}`}>
                                <math>
                                    <mn>{text}</mn>
                                </math>

                                <Tooltip>
                                    <math>
                                        <mrow>
                                            <mn>{prev < 0 ? `${BASICS.resta}${Math.abs(prev)}` : prev}</mn>
                                            <mo>{BASICS.productoEscalar.toString()}</mo>
                                            <mn>{r < 0 ? `${BASICS.resta}${Math.abs(r)}` : r}</mn>
                                            <mo>{BASICS.igual.toString()}</mo>
                                            <mn>{b < 0 ? `${BASICS.resta}${Math.abs(b)}` : b}</mn>
                                        </mrow>
                                    </math>
                                </Tooltip>
                            </td>
                        })
                    }
                </tr>
                <tr>
                    <td></td>
                    {
                        values.result.map((value, i, array) => {

                            const isLast = array.length - 1 === i;

                            return <td className="over" key={`coeficientes-result-${i}`}>

                                <math 
                                    className={cc({
                                        'resto': isLast, 
                                        'resultado-coeficiente': !isLast
                                    })}
                                >
                                    <Termino cof={value} />
                                </math>

                                <Tooltip>
                                    {
                                        isLast ? 
                                        <math>
                                            <Termino cof={value} />
                                        </math>
                                        :
                                        <math>
                                            <Termino cof={value} base={'b'} exp={n - 1 - i} />
                                        </math>
                                    }
                                </Tooltip>
                            </td>
                        })
                    }
                </tr>  

            </tbody>
        </table>

    </div>);
}

export default Ruffini;