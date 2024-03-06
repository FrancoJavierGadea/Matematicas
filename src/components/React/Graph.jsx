import { useEffect, useMemo, useRef,  } from "react";
import Line from "@components/React/GraphSVG/Lines/AngleLine";
import Point from "./GraphSVG/Points/Point";
import Text from "./GraphSVG/Text/Text";
import SimpleArrow from "./GraphSVG/Arrows/AngleArrow";
import RectAngle from "./GraphSVG/Angles/Angle";
import Polygon from "./GraphSVG/Polygon/Polygon";

function Graph({width = 960, height = 540, margin = 20}) {

    const svgRef = useRef();

    


    return (<svg width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} ref={svgRef}>

            

        {/* <SimpleArrow point={[300, 300]} size={200} angle={'0deg'} arrowStart stroke='#f00'

            strokeWidth="2" strokeDasharray="4"
            strokeDashoffset="10"
        />

         */}

        {/* <RectAngle point={[300, 300]} angle={'200deg'} region={1} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={2} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={3} rotate={'20deg'}/>
        <RectAngle point={[300, 300]} angle={'200deg'} region={4} rotate={'20deg'}/> */}

        {/* <Polygon points={[
                [100, 100], [200, 100],
                [200, 300], [170, 350],
                [100, 450], [150, 200]
            ]}
        /> */}

        <Point point={[300, 300]} text="Punto" />

        <Text point={[300, 300]} side="bottom">Esto es una prueba</Text>
        <Text point={[300, 300]} side="top">Esto es una prueba</Text>
        <Text point={[300, 300]} side="left">Esto es una prueba</Text>
        <Text point={[300, 300]} side="right">Esto es una prueba</Text>

    </svg>);
}

export default Graph;