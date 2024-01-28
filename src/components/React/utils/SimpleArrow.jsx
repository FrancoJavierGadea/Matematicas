import { useMemo } from "react";


function SimpleArrow({className, from, to, head = 'arrow', ...others}) {

    const d = useMemo(() => {

        return [
            `M${from.x} ${from.y}`,
            `L${to.x} ${to.y}`
        ]
        .join(' ');

    }, []);

    return (<>
    
        <path className={`arrow ${className}`} d={d} 
        
            markerEnd={`url(#${head})`}

            {...others} 
        />

    </>);
}

export default SimpleArrow;