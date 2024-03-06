import CartesianSystem from "@components/React/GraphSVG/CartesianSystem";
import Point from "@components/React/GraphSVG/Points/Point";
import PointWithProyections from "@components/React/GraphSVG/Points/PointWithProyections";
import AngleLine from "@components/React/GraphSVG/Lines/AngleLine";
import { useZoom } from "@components/React/GraphSVG/hooks/useZoom";
import Polygon from "@components/React/GraphSVG/Polygon/Polygon";
import { useMemo, useRef} from "react";
import MathFunction from "@components/React/GraphSVG/MathFunction/MathFunction";
import "./Graph.css";
import SimpleArrow from "@components/React/GraphSVG/Arrows/SimpleArrow";
import Text from "@components/React/GraphSVG/Text/Text";


const fx = (x) => 0.3 * Math.pow(x, 2);
const dx = (x) => 0.3 * 2 * x;

function Graph({width = 960, height = 540, valueX = 1.2, h = 0.9, size = 1800, hide = ''}) {

    const svgRef = useRef();
    const zoom = useZoom({SVGRef: svgRef, elements: ['.graph']});
    
    const values = useMemo(() => {

        const pointA = {
            x: valueX, 
            y: fx(valueX)
        };

        const pointB = {
            x: valueX + h, 
            y: fx(valueX + h)
        };

        const secAngle = Math.atan((pointA.y - pointB.y) / (pointA.x - pointB.x));

        const tanAngle = Math.atan(dx(valueX));

        const dy = dx(valueX) * h;
       
        return {
            pointA, 
            pointB,
            secAngle,
            tanAngle,
            dy
        }

    }, [valueX, h]);

    return (<svg className="Definicion-derivada" width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`} data-hide={hide} ref={svgRef}>

        <CartesianSystem className="graph" size={size} cx={90} cy={height - 50} 

            domainX={{min: -3, max: 3}} domainY={{min: -1, max: 5}}

            showAxis={true} showGrid={false}
        >
        {({x, y, origin, min, max, distance}) => {

            const {pointA, pointB, dy, secAngle, tanAngle} = values;

            const pivotA = {
                x: x(pointB.x),
                y: y(pointA.y)
            };
            const pivotB = {
                x: x(pointB.x),
                y: y(pointA.y + dy)
            };
            const A = {
                x: x(pointA.x),
                y: y(pointA.y)
            }
            const B = {
                x: x(pointB.x),
                y: y(pointB.y)
            }
            const middlePoint = {
                x: (A.x + B.x) / 2,
                y: (A.y + B.y) / 2,
            }

            return <>
            

                <Polygon className="triangle triangle-rec-secante" points={[A, B, pivotA]} />  
                <Polygon className="triangle triangle-rec-tangente" points={[A, pivotB, pivotA]} /> 

                <MathFunction fx={fx} min={-1} max={5} increment={0.05} draw={{x,y}}/>

                <AngleLine className="secante" point={A} angle={secAngle || tanAngle} size={1800} center/>

                <AngleLine className="tangente" point={A} angle={tanAngle} size={1800} center/>
                

                <SimpleArrow className="" from={[A.x, origin.y - 40]} to={[B.x, origin.y - 40]} arrowStart gapX={10}/>
                <Text point={[middlePoint.x, origin.y - 40]}>h</Text>

                <SimpleArrow className="dx-arrow" from={[A.x, A.y + 20]} to={[B.x, A.y + 20]} arrowStart gapX={10}/>
                <Text className="dx-text" point={[middlePoint.x, A.y + 20]}>dx = Δx</Text>
                
                <SimpleArrow className="dy-arrow" from={[pivotB.x + 20, pivotB.y]} to={[pivotA.x + 20, pivotA.y]} arrowStart gapX={10}/>
                <Text className="dy-text" point={[B.x + 20, (pivotA.y + pivotB.y) / 2]} side="right" gap={5}>dy</Text>
                
                <SimpleArrow className="delta-y-arrow" from={[B.x + 60, B.y]} to={[pivotA.x + 60, pivotA.y]} arrowStart gapX={10}/>
                <Text className="delta-y-text" point={[B.x + 60, middlePoint.y]} side="right" gap={5}>Δy</Text>


                <PointWithProyections className="point-A" point={A} origin={origin}/>

                <PointWithProyections className="point-B" point={B} origin={origin}/>

                <Point className="pivot-A" point={pivotA} />
                <Point className="pivot-B" point={pivotB} />

                <Point point={[origin.x, A.y]} />
                <Point point={[origin.x, B.y]} />
                <Point point={[A.x, origin.y]} />
                <Point point={[B.x, origin.y]} />
                <Point point={origin} />

                <Text point={[A.x, origin.y]} gap={30}>x</Text>
                <Text point={[B.x, origin.y]} gap={30}>x + h</Text>
                <Text point={[origin.x, A.y]} side="left" gap={10}>f(x)</Text>
                <Text point={[origin.x, B.y]} side="left" gap={10}>f(x + h)</Text>
            </>
        }}
        </CartesianSystem>

    </svg>);
}

export default Graph;