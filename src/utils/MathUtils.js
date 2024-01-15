

export function degToRad(angle = 0){

    return angle * (Math.PI / 180);
}

export function radToDeg(angle = 0){

    return angle * (180 / Math.PI);
}


//Razones trigonometricas
export function sin(angle = 0){

    if([0, 180, 360].includes(angle)) return 0;

    const rad = degToRad(angle);

    return Math.sin(rad);
}

export function cos(angle = 0){

    if([90, 270].includes(angle)) return 0;

    const rad = degToRad(angle);

    return Math.cos(rad);
}

export function tan(angle = 0){

    if([90, 270].includes(angle)) return Infinity;

    const rad = degToRad(angle);

    return Math.tan(rad);
}

export function cot(angle = 0){

    if([0, 180, 360].includes(angle)) return Infinity;

    const rad = degToRad(angle);

    return 1 / Math.tan(rad);
}

export function sec(angle = 0){

    if([90, 270].includes(angle)) return Infinity;

    const rad = degToRad(angle);

    return 1 / Math.cos(rad);
}

export function csc(angle = 0){

    if([0, 180, 360].includes(angle)) return Infinity;

    const rad = degToRad(angle);

    return 1 / Math.sin(rad);
}


