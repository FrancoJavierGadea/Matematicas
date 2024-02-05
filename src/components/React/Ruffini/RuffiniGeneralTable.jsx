import { BASICS, PUNTOS } from "@utils/MathSimbols";
import Termino from "../utils/MathML/Termino";
import "./Ruffini.css";
import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";
import Fenced from "../utils/MathML/Fenced";
import Tooltip from "../utils/MathML/Tooltip/Tooltip";
import { useMemo, Fragment } from "react";

const colors = {
    'var-a': '#770000',
    'var-b': '#000077',
    'var-r': '#fd9a04',
    'var-x': '#454545',
}

function RuffiniGeneralTable({n = 6, r = 'r', style = {}, ...others}) {

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

                            const index = (() => {

                                if(i < 3){

                                    return () => <>
                                        <mi>n</mi>
                                        {i > 0 && <mo>{`${BASICS.resta}`}</mo>}
                                        {i > 0 && <mn>{i}</mn>}
                                    </>;
                                }
                                else return length - 1 - i;
                            })();

                            return <Fragment key={`coeficientes-a-${i}`}>

                                {i === 3 && <td>...</td>}

                                <td className="over">

                                    <math>
                                        <Termino cof={'a'} cofIndex={index} />
                                    </math>

                                    <Tooltip>
                                        <math>
                                            <Termino cof={'a'} base={'x'} cofIndex={index} exp={index} />
                                        </math>
                                    </Tooltip>
                                </td>

                            </Fragment>
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

                            const index = (() => {

                                if(i < 3){

                                    return () => <>
                                        <mi>n</mi>
                                        <mo>{`${BASICS.resta}`}</mo>
                                        <mn>{i}</mn>
                                    </>;
                                }
                                else return length - 1 - i;
                            })();

                            return <Fragment key={`coeficientes-b-${i}`}>

                                {i === 3 && <td>...</td>}

                                <td>
                                    <math>
                                        <Termino cof={'b'} cofIndex={index} base={r}/>
                                    </math>
                                </td>
                            </Fragment>
                        })
                    }
                </tr>
                <tr>
                    <td></td> 
                    { 
                        Array.from({length}).map((_, i) => {

                            const isLast = length - 1 === i;

                            const index = (() => {

                                if(i < 3){

                                    return () => <>
                                        <mi>n</mi>
                                        <mo>{`${BASICS.resta}`}</mo>
                                        <mn>{1 + i}</mn>
                                    </>;
                                }
                                else return length - 2 - i;
                            })();

                            const indexPlus1 = (() => {

                                if(i < 3){

                                    return () => <>
                                        <mi>n</mi>
                                        {i > 0 && <mo>{`${BASICS.resta}`}</mo>}
                                        {i > 0 && <mn>{i}</mn>}
                                    </>;
                                }
                                else return length - 1 - i;
                            })();

                            return <Fragment key={`coeficientes-result-${i}`}>

                                {i === 3 && <td>{`${PUNTOS.center}`}</td>}

                                <td className="over">

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
                                                <Termino cof={'a'} cofIndex={indexPlus1} />

                                                {
                                                    i > 0 && <>
                                                        <mo>{`${BASICS.suma}`}</mo>
                                                        <Termino cof={'b'} cofIndex={indexPlus1} base={r} />
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
                            </Fragment>
                        })
                    }
                </tr>  
            </tbody>
        </table>
    </div>);
}

export default RuffiniGeneralTable;