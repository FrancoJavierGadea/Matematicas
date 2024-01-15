import { useEffect, useMemo, useRef,  } from "react";
import CartesianSystem from "@React/utils/CartesianSystem";

function Graph({width = 960, height = 540, margin = 20}) {

    const svgRef = useRef();

    const systemRef = useRef();


    return (<svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

        <CartesianSystem size={1400} cx={margin} cy={height - margin} 
        
            domainX={{min: 0, max: 20}} domainY={{min: 0, max: 20}}

            showAxis={true} 
        >
        {
            ({x, y}) => (<>
                        
                <circle cx={x(3)} cy={y(3)} r={50} fill={'none'} stroke={'#777'} />
                    
            </>)
        }
        </CartesianSystem>

    </svg>);
}

export default Graph;