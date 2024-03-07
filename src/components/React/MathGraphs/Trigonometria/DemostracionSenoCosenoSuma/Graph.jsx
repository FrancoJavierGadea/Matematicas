import { Fragment, useMemo, useRef } from "react";
import css from "./Graph.css?raw";
import { useZoom } from "@components/React/GraphSVG/hooks/useZoom";
import CartesianSystem from "@components/React/GraphSVG/CartesianSystem";
import Circle from "@components/React/GraphSVG/Circle/Circle";
import Angle from "@components/React/GraphSVG/Angles/Angle";
import RectAngle from "@components/React/GraphSVG/Angles/RectAngle";
import { cos, middle, parseAngle, radToDeg, sin } from "@utils/MathUtils";
import Point from "@components/React/GraphSVG/Points/Point";
import SimpleLine from "@components/React/GraphSVG/Lines/SimpleLine";
import Polygon from "@components/React/GraphSVG/Polygon/Polygon";
import SimpleArrow from "@components/React/GraphSVG/Arrows/SimpleArrow";
import Text from "@components/React/GraphSVG/Text/Text";

function Graph({width = 960, height = 540, angles = ['30deg', '30deg'], size = 1800, hide = ''}) {

    const svgRef = useRef();
    const zoom = useZoom({SVGRef: svgRef, elements: ['.graph']});

    const values = useMemo(() => {

        const alpha = parseAngle(angles.at(0));
        const beta = parseAngle(angles.at(1));
        const gamma = alpha + beta;

        return {
            alpha: {
                rad: alpha,
                deg: radToDeg(alpha),
                sin: sin(alpha),
                cos: cos(alpha),
                name: '𝛼'
            },
            beta: {
                rad: beta,
                deg: radToDeg(beta),
                sin: sin(beta),
                cos: cos(beta),
                name: '𝛽'
            },
            gamma: {
                rad: gamma,
                deg: radToDeg(gamma),
                sin: sin(gamma),
                cos: cos(gamma),
                name: '𝛼 + 𝛽'
            }
        }

    }, [angles]);

    return (<svg className="Seno-y-coseno-de-una-suma-graph" xmlns='http://www.w3.org/2000/svg' data-hide={hide} ref={svgRef}
    
        width={width} height={height} viewBox={`${0} ${0} ${width} ${height}`}
    >

        <CartesianSystem className="graph" size={size} cx={150} cy={height - 120} 

            domainX={{min: -2, max: 2}} domainY={{min: -2, max: 2}}

            showAxis={true} showGrid={false}
        >
        {({x, y, origin, min, max, distance}) => {

            const {alpha, beta, gamma} = values;

            const h = alpha.cos * beta.cos;
            const m = alpha.sin * beta.cos;

            const Pivot = { x: x(h), y: y(m) };
            const A = { x: x(alpha.cos), y: y(alpha.sin) };
            const G = { x: x(gamma.cos), y: y(gamma.sin) };

            return <>
                <Circle point={origin} size={distance({x: 2, y: 0})} stroke={'#fff'}/>

                <Triangle className="Triangle Triangle-alpha" angle={alpha} draw={{x, y}} origin={origin}/>
                <Triangle className="Triangle Triangle-beta" angle={beta} draw={{x, y}} origin={origin} 
                
                    transform={`rotate(-${alpha.deg} ${origin.x} ${origin.y})`}
                />
                <Triangle className="Triangle Triangle-gamma" angle={gamma} size={40} draw={{x, y}} origin={origin}/>

                <SimpleLine className="proyections" from={[Pivot.x, origin.y]} to={Pivot} />
                <SimpleLine className="proyections" from={Pivot} to={[Pivot.x, G.y]} />
                <SimpleLine className="proyections" from={G} to={[Pivot.x, G.y]} />

                <g className="arrows-guides">
                    <SimpleArrow className='gamma-arrow' from={[origin.x, origin.y + 20]} to={[G.x, origin.y + 20]} arrowStart />
                    <Text className='gamma-arrow-text' point={[middle(origin.x, G.x), origin.y + 20]}>{`cos(${gamma.name})`}</Text>
                    
                    <SimpleArrow from={[G.x, origin.y + 20]} to={[Pivot.x, origin.y + 20]} arrowStart />
                    <Text point={[middle(G.x, Pivot.x), origin.y + 20]}>g</Text>
                    
                    <SimpleArrow from={[origin.x, origin.y + 60]} to={[Pivot.x, origin.y + 60]} arrowStart />
                    <Text point={[middle(origin.x, Pivot.x), origin.y + 60]}>f</Text>
                    
                    <SimpleArrow className='alpha-arrow' from={[origin.x, origin.y + 100]} to={[A.x, origin.y + 100]} arrowStart />
                    <Text point={[middle(origin.x, A.x), origin.y + 100]}>{`cos(${alpha.name})`}</Text>
                    
                    <SimpleArrow from={[origin.x - 20, origin.y]} to={[origin.x - 20, Pivot.y]} arrowStart />
                    <Text point={[origin.x - 20, middle(origin.y, Pivot.y)]} side='left' gap={5}>h</Text>
                    
                    <SimpleArrow from={[origin.x - 20, Pivot.y]} to={[origin.x - 20, G.y]} arrowStart />
                    <Text point={[origin.x - 20, middle(Pivot.y, G.y)]} side='left' gap={5}>p</Text>
                    
                    <SimpleArrow className='gamma-arrow' from={[origin.x - 50, origin.y]} to={[origin.x - 50, G.y]} arrowStart />
                    <Text point={[origin.x - 50, middle(origin.y, G.y)]} side='left' gap={5}>{`sin(${gamma.name})`}</Text>
                </g>

                <RectAngle className="rect guides-rect" point={[Pivot.x, G.y]} region={3} size={20}/>
                <RectAngle className="rect guides-rect" point={[Pivot.x, origin.y]} region={2} size={20}/>

                <Angle className="angle-alpha" point={Pivot} angle={alpha.rad} rotate={'90deg'} size={40} />
                <Angle className="angle-aux" point={Pivot} angle={(Math.PI / 2) - alpha.rad} rotate={-Math.PI + alpha.rad} size={40} />

                <Point className="Pivot-A" point={Pivot} />
                <Point className="Pivot-B" point={[Pivot.x, origin.y]} />
                <Point className="Pivot-C" point={[Pivot.x, G.y]} />    
                <Text className="guides-h" point={[Pivot.x, middle(origin.y, Pivot.y)]} side='left' gap={8}>h</Text>
                <Text className="guides-p" point={[Pivot.x, middle(Pivot.y, G.y)]} side='left' gap={8}>p</Text>
                <Text className="guides-g" point={[middle(G.x, Pivot.x), G.y]} side='top'>g</Text>

                <Point point={origin} />
            </>
        }}
        </CartesianSystem>

        <style>{css}</style>
    </svg>);
}

export default Graph;


function Triangle({className, angle, size = 70, draw, origin, ...others}){

    const Pivot = useMemo(() => {

        const {x, y} = draw;

        return {
            x: x(angle.cos),
            y: y(angle.sin)
        };

    }, [angle, draw]);

    return <g className={className} {...others}>

        <Polygon className="bg" points={[origin, Pivot, [Pivot.x, origin.y]]} />

        <Angle className="angle" point={origin} angle={angle.rad} size={size} />

        <RectAngle className="rect" point={[Pivot.x, origin.y]} region={2} size={20}/>

        <SimpleLine from={origin} to={Pivot} />
        <SimpleLine from={origin} to={[Pivot.x, origin.y]} />
        <SimpleLine from={Pivot} to={[Pivot.x, origin.y]} />    

        <Text point={[(origin.x + Pivot.x) / 2, origin.y]} side="top" gap={10}>{`cos(${angle.name})`}</Text>
        <Text point={[Pivot.x, (origin.y + Pivot.y) / 2]} side="left" gap={5}>{`sin(${angle.name})`}</Text>
        
        <Point point={Pivot}/>
    </g>
}