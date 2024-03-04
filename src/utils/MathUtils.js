

export function degToRad(angle = 0){

    return angle * (Math.PI / 180);
}

export function radToDeg(angle = 0){

    return angle * (180 / Math.PI);
}

export function parseAngle(angle){

    if(typeof angle === 'number') return angle;

    if(typeof angle === 'string') {

        const value = Number(angle.slice(0, -3));
        const units = angle.slice(-3);

        if(['deg', 'degrees', 'º'].includes(units)) return degToRad(value);

        if(['rad', 'radians'].includes(units)) return value;
    }
}


//Razones trigonometricas
export function sin(angle){

    const value = parseAngle(angle);

    return Math.sin(value);
}

export function cos(angle){

    const value = parseAngle(angle);

    return Math.cos(value);
}


export function distanceBeetween2Points(pointA, pointB){

    const {x1, y1, x2, y2} = {
        x1: Array.isArray(pointA) ? pointA.at(0) : pointA.x,
        y1: Array.isArray(pointA) ? pointA.at(1) : pointA.y, 
        x2: Array.isArray(pointB) ? pointB.at(0) : pointB.x, 
        y2: Array.isArray(pointB) ? pointB.at(1) : pointB.y,  
    }

    return Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));
}