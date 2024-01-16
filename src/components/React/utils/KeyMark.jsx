import {useMemo} from 'react';
import {radToDeg} from '@utils/MathUtils.js';

function KeyMark({className, x1, y1, x2, y2, gap = 50, radius = 20, text = '', fontSize = 14, color = '#000', rotate, ...others}) {

    const data = useMemo(() => {

        const distance = Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));

        const sin = Math.abs(y1 - y2) / distance;
        const cos = Math.abs(x1 - x2) / distance;

        const pivotA = {
            x: x1 + (gap * sin),
            y: y1 + (gap * cos),
        }
        const pivotB = {
            x: x2 + (gap * sin),
            y: y2 + (gap * cos),
        }

        const pivotCenter = {
            x: (pivotA.x + pivotB.x) / 2,
            y: (pivotA.y + pivotB.y) / 2
        }

        const centerA = {
            x: (x1 + pivotA.x) / 2,
            y: (y1 + pivotA.y) / 2
        }
        const centerB = {
            x: (x2 + pivotB.x) / 2,
            y: (y2 + pivotB.y) / 2
        }

        const round = {
            x: radius * sin * Math.sign(gap),
            y: radius * cos * Math.sign(gap)
        };

        const d = [
            `M${x1} ${y1}`,
            `L${centerA.x} ${centerA.y}`,
            `C${centerA.x + round.x} ${centerA.y + round.y}, ${pivotCenter.x - round.x} ${pivotCenter.y - round.y}, ${pivotCenter.x} ${pivotCenter.y}`,
            `C${pivotCenter.x - round.x} ${pivotCenter.y - round.y}, ${centerB.x + round.x} ${centerB.y + round.y}, ${centerB.x} ${centerB.y}`,
            `L${x2} ${y2}`
        ]
        .join(' ');

        return {
            d,
            angle: radToDeg(Math.asin(sin)),
            textPosition: {
                x: pivotCenter.x + (fontSize * sin),
                y: pivotCenter.y + (fontSize * cos),
            },
        }

    }, [x1, y1, x2, y2, gap, fontSize, radius]);


    return (<g className={`keymark ${className || ''}`}>

        <path d={data.d} fill="none" stroke='#000' {...others} />

        <text x={data.textPosition.x} y={data.textPosition.y} 
        
            textAnchor="middle" dominantBaseline="middle" fill={color} fontSize={fontSize} fontFamily="regular latin"

            transform={rotate && `rotate(${-data.angle} ${data.textPosition.x} ${data.textPosition.y})`}
        >
            {text}
        </text>

    </g>);
}

export default KeyMark;