import { useMemo } from "react";

function Angle({cx, cy, radius, angle, ...others}) {

    const d = useMemo(() => {

        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const largeArcFlag = angle > Math.PI ? 1 : 0

        return [
            `M${cx} ${cy}`,
            `L${cx + radius} ${cy}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${cx + (radius * cos)} ${cy - (radius * sin)}`,
            `L${cx} ${cy}`
        ]
        .join(' ');

    }, [cx, cy, radius, angle]);

    return (<>
    
        <path d={d} {...others} />

    </>);
}

export default Angle;