import Circle from "@components/React/GraphSVG/Circle/Circle";
import AngleLine from "@components/React/GraphSVG/Lines/AngleLine";
import SimpleLine from "@components/React/GraphSVG/Lines/SimpleLine";
import Point from "@components/React/GraphSVG/Points/Point";
import CartesianSystem from "@components/React/GraphSVG/CartesianSystem";
import { cos, sin } from "@utils/MathUtils";
import { useMemo, useRef } from "react";

import "./Graph.css";
import Angle from "@components/React/GraphSVG/Angles/Angle";
import { useZoom } from "@components/React/GraphSVG/hooks/useZoom";


function Graph({width = 960, height = 540, angle = '30deg', size = 1800, hide = ''}) {

    const svgRef = useRef();
    const zoom = useZoom({SVGRef: svgRef, elements: ['.graph']});

    const values = useMemo(() => {

        const values = {
            cos: cos(angle),
            sin: sin(angle),
        }

        values.tan = values.cos === 0 ? 1000 : values.sin / values.cos;
        values.cot = values.sin === 0 ? 1000 : values.cos / values.sin;

        return values;

    }, [angle]);

    return (<svg className="Razones-trigonometricas-graph" width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} data-hide={hide} ref={svgRef}>

        <CartesianSystem className="graph" size={size} cx={width / 2} cy={height / 2} 

            domainX={{min: -5, max: 5}} domainY={{min: -5, max: 5}}

            showAxis={true} showGrid={false}
        >
        {({x, y, origin, min, max, distance}) => {

            const Pivot = {
                x: x(values.cos),
                y: y(values.sin)
            };

            const TanPivot = {
                x: x(1),
                y: y(values.tan)
            }

            const CotPivot = {
                x: x(values.cot),
                y: y(1),
            }

            return <>

                <Circle point={origin} size={distance({x: 2, y: 0})} stroke={'#fff'}/>

                <Angle point={origin} angle={angle} size={70} />

                <AngleLine className="tan-axis" point={[x(1), origin.y]} angle={'90deg'} center size={800} />
                <AngleLine className="cot-axis" point={[origin.x, y(1)]} angle={'0deg'} center size={1200} />

                <SimpleLine from={origin} to={Pivot} />

                <SimpleLine className="cos-proyection" from={Pivot} to={[Pivot.x, origin.y]} />
                <SimpleLine className="tan-proyection" from={Pivot} to={TanPivot} />
                <SimpleLine className="cot-proyection" from={Pivot} to={CotPivot} />

                <SimpleLine className="reason-value cos" from={[Pivot.x, origin.y]} to={origin} />
                <SimpleLine className="reason-value sin" from={[Pivot.x, origin.y]} to={Pivot} />
                <SimpleLine className="reason-value tan" from={[TanPivot.x, origin.y]} to={TanPivot} />
                <SimpleLine className="reason-value cot" from={[origin.x, CotPivot.y]} to={CotPivot} />
                <SimpleLine className="reason-value sec" from={origin} to={TanPivot} />
                <SimpleLine className="reason-value csc" from={origin} to={CotPivot} />
                
                <Point point={[x(1), origin.y]} />
                <Point point={[origin.x, y(1)]} />
                <Point className="sin-cos-point" point={[Pivot.x, origin.y]} />
                <Point className="tan-sec-point" point={TanPivot} />
                <Point className="cot-csc-point" point={CotPivot} />
                <Point point={Pivot} />
                <Point point={origin} />
            </>
        }}
        </CartesianSystem>
    
    </svg>);
}

export default Graph;