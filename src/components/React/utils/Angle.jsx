import { cos, sin } from "@utils/MathUtils";
import { useMemo } from "react";

function Angle({cx, cy, radius, angle, rect = false, rotate, ...others}) {

    const d = useMemo(() => {

        if(rect) return '';

        const sinAngle = sin(angle);
        const cosAngle = cos(angle);

        const largeArcFlag = angle > 180 ? 1 : 0

        return [
            `M${cx} ${cy}`,
            `L${cx + radius} ${cy}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${cx + (radius * cosAngle)} ${cy - (radius * sinAngle)}`,
            `L${cx} ${cy}`
        ]
        .join(' ');

    }, [cx, cy, radius, angle]);

    return (<>
    
        {
            rect ? 
                <rect x={cx} y={cy - radius} width={radius} height={radius} {...others} 
                
                    transform={rotate && `rotate(${rotate} ${cx} ${cy})`}
                />
            :
                <path d={d} {...others} 
                
                    transform={rotate && `rotate(${rotate} ${cx} ${cy})`}
                />
        }

    </>);
}

export default Angle;