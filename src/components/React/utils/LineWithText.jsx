import { useMemo } from "react";


function LineWithText({className, x1, y1, x2, y2, text, align = 'center', gapX = 0, gapY = 0, showText = true, color, ...others}) {

    const textPosition = useMemo(() => {

        return {
            x: ((x1 + x2) / 2) + gapX,
            y: ((y1 + y2) / 2) + gapY
        }

    }, [x1, y1, x2, y2]);

    return (<g className={`line-text ${className || ''}`}>
        
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color || '#777'} {...others} />

        {
            showText &&
            <text x={textPosition.x} y={textPosition.y} 
            
                textAnchor="middle" dominantBaseline="middle"

                fill={color || '#777'}
            >
                {text}
            </text>
        }

    </g>);
}

export default LineWithText;