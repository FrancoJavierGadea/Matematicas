import CartesianSystem from "@components/React/GraphSVG/CartesianSystem";
import Point from "@components/React/GraphSVG/Points/Point";
import PointWithProyections from "@components/React/GraphSVG/Points/PointWithProyections";
import AngleLine from "@components/React/GraphSVG/Lines/AngleLine";
import { useZoom } from "@components/React/GraphSVG/hooks/useZoom";
import Polygon from "@components/React/GraphSVG/Polygon/Polygon";
import { useMemo, useRef} from "react";
import MathFunction from "@components/React/GraphSVG/MathFunction/MathFunction";
import css from "./Graph.css?raw";
import SimpleArrow from "@components/React/GraphSVG/Arrows/SimpleArrow";
import Text from "@components/React/GraphSVG/Text/Text";
import MathIntegral from "@components/React/GraphSVG/MathIntegral/MathIntegral";
import MathIntegralRects from "@components/React/GraphSVG/MathIntegral/MathIntegralRects";
import SimpleLine from "@components/React/GraphSVG/Lines/SimpleLine";


const fx = (x) => 0.3 * Math.pow(x, 2);
const dx = (x) => 0.3 * 2 * x;

const n = 30;

function Graph({width = 960, height = 540, points = [1, 2.5], size = 1800, hide = ''}) {

    const svgRef = useRef();
    const zoom = useZoom({SVGRef: svgRef, elements: ['.graph']});
    
    const values = useMemo(() => {

        const pointA = {
            x: points.at(0), 
            y: fx(points.at(0))
        };

        const pointB = {
            x: points.at(1), 
            y: fx(points.at(1))
        };
       
        return {
            pointA, 
            pointB,
        }

    }, [points]);

    return (<svg className="Definicion-derivada" xmlns='http://www.w3.org/2000/svg' data-hide={hide} ref={svgRef}
    
        width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} 
    >

        <CartesianSystem className="graph" size={size} cx={90} cy={height - 50} 

            domainX={{min: -3, max: 3}} domainY={{min: -1, max: 5}}

            showAxis={true} showGrid={false}
        >
        {({x, y, origin, min, max, distance}) => {

            const {pointA, pointB} = values;

            // const pivotA = {
            //     x: x(pointB.x),
            //     y: y(pointA.y)
            // };
            // const pivotB = {
            //     x: x(pointB.x),
            //     y: y(pointA.y + dy)
            // };
            const A = {
                x: x(pointA.x),
                y: y(pointA.y)
            }
            const B = {
                x: x(pointB.x),
                y: y(pointB.y)
            }
            // const middlePoint = {
            //     x: (A.x + B.x) / 2,
            //     y: (A.y + B.y) / 2,
            // }

            return <>
            
                <MathFunction fx={fx} min={-1} max={5} increment={0.05} draw={{x,y}} />

                <MathIntegral fx={fx} min={points.at(0)} max={points.at(1)} increment={0.05} draw={{x,y}} origin={origin}/>

                <MathIntegralRects fx={fx} n={50} min={points.at(0)} max={points.at(1)} increment={0.05} draw={{x,y}} origin={origin}/>

                <SimpleLine from={A} to={[A.x, origin.y]} />
                <SimpleLine from={B} to={[B.x, origin.y]} />

                <Point point={[A.x, origin.y]} />
                <Point point={[B.x, origin.y]} />
                <Point point={A} />
                <Point point={B} />
            </>
        }}
        </CartesianSystem>
        <style>{css}</style>
    </svg>);
}

export default Graph;
