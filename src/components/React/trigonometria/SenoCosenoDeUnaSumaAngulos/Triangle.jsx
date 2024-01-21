import Angle from "@components/React/utils/Angle";
import LineWithText from "@components/React/utils/LineWithText";

function Triangle({className, origin, angle, angleRadius = 30, ...others}){

    const {name, color} = angle;

    return <g className={`triangle ${className || ''}`} {...others}>

        <path className="bg" {...{
            d: [  
                `M${origin.x} ${origin.y}`,
                `L${angle.x} ${origin.y}`,
                `L${angle.x} ${angle.y}`,
                `L${origin.x} ${origin.y}`
            ].join(''),
            fill: `${color}`,
        }} />

        <Angle {...{
            cx: origin.x,   cy: origin.y,
            radius: angleRadius,
            angle: angle.angle,
            stroke: color,  fill: `${color}60`, 
        }}/>

        <line  {...{
            x1: origin.x,   y1: origin.y,
            x2: angle.x,    y2: angle.y,
            stroke: color
        }}/>

        <LineWithText  {...{
            x1: origin.x,   y1: origin.y,
            x2: angle.x,    y2: origin.y,
            color: color,
            text: `cos(${name})`,
            gapY: -15,
        }}/>

        <LineWithText  {...{
            x1: angle.x,    y1: angle.y,
            x2: angle.x,    y2: origin.y,
            color: color,
            text: `sin(${name})`,
            gapX: -(20 + 5 * name.length)
        }}/>

        <Angle  {...{
            cx: angle.x - 15,
            cy: origin.y,
            radius: 15,
            rect: true,
            stroke: '#007e04',  fill: '#007e0437',
        }}/>

        <circle  {...{
            cx: angle.x,    cy: origin.y,
            r: 3,
            fill: '#000',   stroke: 'none'
        }}/>

        <circle  {...{
            cx: angle.x,    cy: angle.y,
            r: 3,
            fill: '#000',   stroke: 'none'
        }}/>
    </g>
}

export default Triangle;