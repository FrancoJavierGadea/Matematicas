import { useMemo } from "react";


function Text({className = '', point, side = 'bottom', gap = 20, children}) {

    const position = useMemo(() => {

        const {x, y} = {
            x: Array.isArray(point) ? point.at(0) : point.x,
            y: Array.isArray(point) ? point.at(1) : point.y,  
        }

        switch(side){

            case 'bottom': return {
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                x: x,
                y: y + gap  
            }
            case 'top': return {
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                x: x,
                y: y - gap  
            }
            case 'right': return {
                textAnchor: 'start',
                dominantBaseline: 'middle',
                x: x + gap,
                y: y  
            }
            case 'left': return {
                textAnchor: 'end',
                dominantBaseline: 'middle',
                x: x - gap,
                y: y  
            }
        }

    }, [side, point, gap]);
    
    return (<g className={`Graph-svg-text ${className}`}>
        {
            typeof children === 'string' &&
            
            <text {...position}>{children}</text>
        }
    </g>);
}

export default Text;