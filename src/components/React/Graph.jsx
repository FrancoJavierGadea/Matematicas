import { useEffect, useMemo, useRef,  } from "react";
import Line from "@components/React/GraphSVG/Lines/AngleLine";
import Point from "./GraphSVG/Points/PointWithProyections";
import SimpleArrow from "./GraphSVG/Arrows/AngleArrow";
import RectAngle from "./GraphSVG/Angles/Angle";
import Polygon from "./GraphSVG/Polygon/Polygon";

function Graph({width = 960, height = 540, margin = 20}) {

    const svgRef = useRef();

    


    return (<svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            <defs>
                <marker 
                    id="arrow"
                    viewBox="0 0 12 12"
                    refX="10"
                    refY="6"
                    markerWidth="12"
                    markerHeight="12"
                    markerUnits="strokeWidth"
                    orient="auto">
                    <path d="M 1 1 L 10 6 L 1 11" stroke="context-stroke"
                    
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </marker>
            </defs>

        {/* <SimpleArrow point={[300, 300]} size={200} angle={'0deg'} arrowStart stroke='#f00'

            strokeWidth="2" strokeDasharray="4"
            strokeDashoffset="10"
        />

        <Point point={[300, 300]} /> */}

        {/* <RectAngle point={[300, 300]} angle={'200deg'} region={1} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={2} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={3} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={4} rotate={'20deg'}/> */}

        <Polygon points={[
                [100, 100], [200, 100],
                [200, 300], [170, 350],
                [100, 450], [150, 200]
            ]}
        />

    </svg>);
}

export default Graph;