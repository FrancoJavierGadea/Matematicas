

import CartesianSystem from "@components/React/utils/CartesianSystem";
import "./SumaAngulos.css";
import { useMemo, useRef } from "react";
import Angle from "@components/React/utils/Angle";
import { cos, degToRad, sin } from "@utils/MathUtils";
import LineWithText from "@components/React/utils/LineWithText";


const values = {
    'alfa': 30,
    'beta': 30
}

function SumaAngulos({width = 960, height = 540, margin = 20}) {

    const svgRef = useRef();

    const angles = useMemo(() => {

        const {alfa, beta} = values;

        return {
            alfa: {
                angle: alfa,
                sin: sin(alfa),
                cos: cos(alfa)
            },
            beta: {
                angle: beta,
                sin: sin(beta),
                cos: cos(beta)
            },
            gama: {
                angle: alfa + beta,
                sin: sin(alfa + beta),
                cos: cos(alfa + beta)
            }
        }


    }, [])

    return (<div>

        <svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <CartesianSystem size={2000} cx={margin} cy={height - margin} 

                domainX={{min: -2, max: 2}} domainY={{min: -2, max: 2}}

                showAxis={true} showGrid={false}
            >
            {({x, y, origin, distance}) => {

                const alfa = {
                    ...angles.alfa,
                    x: x(angles.alfa.cos),
                    y: y(angles.alfa.sin)
                }
                const beta = {
                    ...angles.beta,
                    x: x(angles.beta.cos),
                    y: y(angles.beta.sin)
                }
                const gama = {
                    ...angles.gama,
                    x: x(angles.gama.cos),
                    y: y(angles.gama.sin)
                }

                const pivot = {
                    y: y(angles.alfa.sin * angles.beta.cos),
                    x: x(angles.alfa.cos * angles.beta.cos)
                }

            return (<>
            
                <circle className="circle" cx={origin.x} cy={origin.y} r={distance({x: 1, y: 0})} fill={'none'} stroke={'#777'} strokeWidth={2} />
            

                <g className="triangle-A">
                    <path d={`M${origin.x} ${origin.y}L${alfa.x} ${origin.y} L${alfa.x} ${alfa.y} L${origin.x} ${origin.y}`} fill={'#2809c053'}/>
                    
                    <Angle cx={origin.x} cy={origin.y} radius={50} angle={alfa.angle} stroke={'#00f'} fill={'#0000ff37'} />

                    <line x1={origin.x} y1={origin.y} x2={alfa.x} y2={alfa.y} stroke="#000" />

                    <LineWithText x1={origin.x} y1={origin.y} x2={alfa.x} y2={origin.y} color={'#000'} text="cos(A)" gapY={-15} />

                    <LineWithText x1={alfa.x} y1={alfa.y} x2={alfa.x} y2={origin.y} color={'#000'} text="sin(A)" gapX={-25} />

                    <circle cx={alfa.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
                    <circle cx={alfa.x} cy={alfa.y} r={3} fill={'#000'} stroke={'none'} />
                </g>

                <g className="triangle-B" transform={`rotate(${-beta.angle} ${origin.x} ${origin.y})`}>
                
                    <path d={`M${origin.x} ${origin.y}L${beta.x} ${origin.y} L${beta.x} ${beta.y} L${origin.x} ${origin.y}`} fill={'#a509c052'}/>
                    
                    <Angle cx={origin.x} cy={origin.y} radius={50} angle={alfa.angle} stroke={'#9005a5'} fill={'#9005a537'} />

                    <line x1={origin.x} y1={origin.y} x2={beta.x} y2={beta.y} stroke="#000" />

                    <LineWithText x1={origin.x} y1={origin.y} x2={beta.x} y2={origin.y} color={'#000'} text="cos(B)" gapY={-15} />

                    <LineWithText x1={beta.x} y1={beta.y} x2={beta.x} y2={origin.y} color={'#000'} text="sin(B)" gapX={-25} />

                    <circle cx={beta.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
                    <circle cx={beta.x} cy={beta.y} r={3} fill={'#000'} stroke={'none'} />
                </g>

                <g className="triangle-C">
                    <path d={`M${origin.x} ${origin.y}L${gama.x} ${origin.y} L${gama.x} ${gama.y} L${origin.x} ${origin.y}`} fill={'#09c03752'}/>
                    
                    <Angle cx={origin.x} cy={origin.y} radius={20} angle={gama.angle} stroke={'#007e04'} fill={'#007e0437'} />

                    <line x1={origin.x} y1={origin.y} x2={gama.x} y2={gama.y} stroke="#000" />

                    <LineWithText x1={origin.x} y1={origin.y} x2={gama.x} y2={origin.y} color={'#000'} text="cos(A)" gapY={-15} />

                    <LineWithText x1={gama.x} y1={gama.y} x2={gama.x} y2={origin.y} color={'#000'} text="sin(A)" gapX={-25} />

                    <circle cx={gama.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />
                    <circle cx={gama.x} cy={gama.y} r={3} fill={'#000'} stroke={'none'} />
                </g>

                <g className="proyections-lines">

                    <LineWithText x1={pivot.x} y1={pivot.y} x2={pivot.x} y2={origin.y} color={'#777'} text="m" gapX={-15} strokeDasharray={4} />  

                    <LineWithText x1={pivot.x} y1={pivot.y} x2={pivot.x} y2={gama.y} color={'#777'} text="p" gapX={-15} strokeDasharray={4} /> 

                    <line x1={pivot.x} y1={gama.y} x2={gama.x} y2={gama.y} stroke={'#777'} strokeDasharray={4} />

                    <circle cx={pivot.x} cy={pivot.y} r={3} fill={'#777'} stroke={'none'} />
                    <circle cx={pivot.x} cy={gama.y} r={3} fill={'#777'} stroke={'none'} />
                    <circle cx={pivot.x} cy={origin.y} r={3} fill={'#777'} stroke={'none'} />
                </g>

                <Angle cx={pivot.x - 20} cy={origin.y} radius={20} rect stroke={'#007e04'} fill={'#007e0437'} />

                <Angle cx={pivot.x - 20} cy={gama.y + 20} radius={20} rect stroke={'#007e04'} fill={'#007e0437'} />

                <circle className="origin" cx={origin.x} cy={origin.y} r={3} fill={'#000'} stroke={'none'} />

            </>)}}    
            </CartesianSystem>
        </svg>

    </div>);
}

export default SumaAngulos;