import { BASICS } from "@utils/MathSimbols";
import Termino from "../utils/MathML/Termino";
import "./Ruffini.css";
import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";
import Fenced from "../utils/MathML/Fenced";
import Tooltip from "../utils/MathML/Tooltip/Tooltip";
import { useMemo } from "react";


function RuffiniTable({n = 5, r = 'r', colors = {}, style = {}, ...others}) {

    const length = useMemo(() => {

        return typeof n === 'number' ? n + 1 : 3;

    }, [n]);

    const varColors = useMemo(() => {

        return Object.entries(colors).reduce((acc, [key, value]) => {

            acc[`--${key}`] = value;

            return acc;
        }, {});

    }, [colors]);

    return (<div className="Ruffini"
    
        style={{...varColors, ...style}} {...others}
    >

        <table>
            <tbody>
                <tr>
                    <td></td>
                    { 
                        Array.from({length}).map((_, i) => {

                            const index = length - 1 - i;

                            return <td className="over" key={`coeficientes-a-${i}`}>

                                <math>
                                    <Termino cof={'a'} cofIndex={index} />
                                </math>

                                <Tooltip>
                                    <math>
                                        <Termino cof={'a'} base={'x'} cofIndex={index} exp={index} />
                                    </math>
                                </Tooltip>
                            </td>;
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
                                <Fenced stretchy gap={'0.2em'}>
                                    <mi>x</mi>
                                    <mo>{`${BASICS.resta}`}</mo>
                                    <mi>{r}</mi>
                                </Fenced>
                            </math> 
                        </Tooltip>
                    </td>
                    
                    { 
                        Array.from({length}).map((_, i) => {

                            if(i === 0) return <td key={`coeficientes-b-${i}`}></td>;

                            const index = length - 1 - i;

                            return <td key={`coeficientes-b-${i}`}>
                                <math>
                                    <Termino cof={'b'} cofIndex={index} base={r}/>
                                </math>
                            </td>
                        })
                    }
                </tr>
                <tr>
                    <td></td> 
                    { 
                        Array.from({length}).map((_, i) => {

                            const isLast = length - 1 === i;

                            const index = length - 2 - i;

                            return <td className="over" key={`coeficientes-result-${i}`}>

                                <math 
                                    className={cc({
                                        'resto': isLast, 
                                        'resultado-coeficiente': !isLast
                                    })}
                                >
                                    {
                                        isLast ? 
                                        <math> 
                                            <Termino cof={'s'} /> 
                                        </math>
                                        :
                                        <math>
                                            <Termino cof={'b'} cofIndex={index} />
                                        </math>
                                    }
                                </math>

                                <Tooltip>
                                    {
                                        <math>
                                            <Termino cof={isLast ? 's' : 'b'} cofIndex={isLast ? undefined : index} />
                                            <mo>{`${BASICS.igual}`}</mo>
                                            <Termino cof={'a'} cofIndex={index + 1} />

                                            {
                                                i > 0 && <>
                                                    <mo>{`${BASICS.suma}`}</mo>
                                                    <Termino cof={'b'} cofIndex={index + 1} base={r} />
                                                </>
                                            }
                                        </math>
                                    }
                                </Tooltip>

                                {!isLast &&
                                    <Tooltip side="bottom">
                                        <math>
                                            <Termino cof={'b'} base={'x'} cofIndex={index} exp={index} />
                                        </math>
                                    </Tooltip>
                                }
                            </td>
                        })
                    }
                </tr>  
            </tbody>
        </table>
    </div>);
}

export default RuffiniTable;