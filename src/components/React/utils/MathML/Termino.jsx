import { BASICS } from "@utils/MathSimbols";

const parse = (n) => {

    return n >= 0 ? n : `${BASICS.resta}${Math.abs(n)}` 
}

function Termino({cof, cofIndex, base, exp}){

    return (<mrow>

        {cof !== undefined && <>
        
            {cofIndex !== undefined ?
                <msub>
                    <mrow>
                        { typeof cof === 'string' && <mi className={`var-${cof}`}>{cof}</mi> }
                        { typeof cof === 'number' && <mn>{parse(cof)}</mn> }
                        { typeof cof === 'function' && <>{cof()}</> } 
                    </mrow>
                    <mrow>
                        { typeof cofIndex === 'string' && <mi>{cofIndex}</mi> }
                        { typeof cofIndex === 'number' && <mn>{parse(cofIndex)}</mn> }
                        { typeof cofIndex === 'function' && <>{cofIndex()}</>  }
                    </mrow>
                </msub>
                :
                <>
                    { typeof cof === 'string' && <mi className={`var-${cof}`}>{cof}</mi> }
                    { typeof cof === 'number' && <mn>{parse(cof)}</mn> }
                    { typeof cof === 'function' && <>{cof()}</> } 
                </>
            }
        </>}

        {
            (cof !== undefined && base !== undefined) && <mo>{`${BASICS.productoEscalar}`}</mo>
        }

        {base !== undefined && <>
        
            {exp !== undefined ?
                <msup>
                    <mrow>
                        { typeof base === 'string' && <mi className={`var-${base}`}>{base}</mi> }
                        { typeof base === 'number' && <mn>{parse(base)}</mn> }
                        { typeof base === 'function' && <>{base()}</> } 
                    </mrow>
                    <mrow>
                        { typeof exp === 'string' && <mi>{exp}</mi> }
                        { typeof exp === 'number' && <mn>{parse(exp)}</mn> }
                        { typeof exp === 'function' && <>{exp()}</> }
                    </mrow>
                </msup>
                :
                <>
                    { typeof base === 'string' && <mi className={`var-${base}`}>{base}</mi> }
                    { typeof base === 'number' && <mn>{parse(base)}</mn> }
                    { typeof base === 'function' && <>{base()}</>} 
                </>
            }
        </>}

    </mrow>);
}

export default Termino;