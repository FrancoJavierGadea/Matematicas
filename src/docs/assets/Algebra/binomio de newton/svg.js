const folder = 'optimized-svg';

const getPath = (name) => {

    return `/src/docs/assets/Algebra/binomio de newton/${folder}/${name}`;
}

const load = async (name, mode = 'raw') => {

    if(import.meta.env.SSR){

        //In server

        const svg = (await import(/* @vite-ignore */`./${folder}/${name}?${mode}`)).default;
    
        return svg;
    }
    else {

        //In Client

        if(mode === 'url') return new URL(getPath(name), import.meta.url).href;
    }
}





export const BINOMIO_0 = {
    name: 'Binomio a mas menos b elevado a 0',
    svg: await load('binomio-elevado-0.svg', 'raw'),
    url: await load('binomio-elevado-0.svg', 'url'),
    path: getPath('binomio-elevado-0.svg'),
    width: 109,
    height: 24,
    aspectRatio: [109,24]
}

// Suma
export const BINOMIO_SUMA_1 = {
    name: 'Binomio a mas b elevado a 1',
    svg: await load('binomio-suma-elevado-1.svg', 'raw'),
    url: await load('binomio-suma-elevado-1.svg', 'url'),
    path: getPath('binomio-suma-elevado-1.svg'),
    width: 145,
    height: 24,
    aspectRatio: [145,24]
}


export const BINOMIO_SUMA_2 = {
    name: 'Binomio a mas b elevado a 2',
    svg: await load('binomio-suma-elevado-2.svg', 'raw'),
    url: await load('binomio-suma-elevado-2.svg', 'url'),
    path: getPath('binomio-suma-elevado-2.svg'),
    width: 279,
    height: 24,
    aspectRatio: [93,8]
}

export const BINOMIO_SUMA_3 = {
    name: 'Binomio a mas b elevado a 3',
    svg: await load('binomio-suma-elevado-3.svg', 'raw'),
    url: await load('binomio-suma-elevado-3.svg', 'url'),
    path: getPath('binomio-suma-elevado-3.svg'),
    width: 398,
    height: 24,
    aspectRatio: [199,12]
}

export const BINOMIO_SUMA_4 = {
    name: 'Binomio a mas b elevado a 4',
    svg: await load('binomio-suma-elevado-4.svg', 'raw'),
    url: await load('binomio-suma-elevado-4.svg', 'url'),
    path: getPath('binomio-suma-elevado-4.svg'),
    width: 518,
    height: 25,
    aspectRatio: [518,25]
}

export const BINOMIO_SUMA_5 = {
    name: 'Binomio a mas b elevado a 5',
    svg: await load('binomio-suma-elevado-5.svg', 'raw'),
    url: await load('binomio-suma-elevado-5.svg', 'url'),
    path: getPath('binomio-suma-elevado-5.svg'),
    width: 532,
    height: 19,
    aspectRatio: [28,1]
}

export const BINOMIO_SUMA_6 = {
    name: 'Binomio a mas b elevado a 6',
    svg: await load('binomio-suma-elevado-6.svg', 'raw'),
    url: await load('binomio-suma-elevado-6.svg', 'url'),
    path: getPath('binomio-suma-elevado-6.svg'),
    width: 558,
    height: 19,
    aspectRatio: [558,19]
}

export const BINOMIO_SUMA_7 = {
    name: 'Binomio a mas b elevado a 7',
    svg: await load('binomio-suma-elevado-7.svg', 'raw'),
    url: await load('binomio-suma-elevado-7.svg', 'url'),
    path: getPath('binomio-suma-elevado-7.svg'),
    width: 515,
    height: 12,
    aspectRatio: [515,12]
}

// Resta
export const BINOMIO_RESTA_1 = {
    name: 'Binomio a menos b elevado a 1',
    svg: await load('binomio-resta-elevado-1.svg', 'raw'),
    url: await load('binomio-resta-elevado-1.svg', 'url'),
    path: getPath('binomio-resta-elevado-1.svg'),
    width: 146,
    height: 24,
    aspectRatio: [73,12]
}

export const BINOMIO_RESTA_2 = {
    name: 'Binomio a menos b elevado a 2',
    svg: await load('binomio-resta-elevado-2.svg', 'raw'),
    url: await load('binomio-resta-elevado-2.svg', 'url'),
    path: getPath('binomio-resta-elevado-2.svg'),
    width: 279,
    height: 24,
    aspectRatio: [93,8]
}

export const BINOMIO_RESTA_3 = {
    name: 'Binomio a menos b elevado a 3',
    svg: await load('binomio-resta-elevado-3.svg', 'raw'),
    url: await load('binomio-resta-elevado-3.svg', 'url'),
    path: getPath('binomio-resta-elevado-3.svg'),
    width: 399,
    height: 24,
    aspectRatio: [133,8]
}

export const BINOMIO_RESTA_4 = {
    name: 'Binomio a menos b elevado a 4',
    svg: await load('binomio-resta-elevado-4.svg', 'raw'),
    url: await load('binomio-resta-elevado-4.svg', 'url'),
    path: getPath('binomio-resta-elevado-4.svg'),
    width: 519,
    height: 25,
    aspectRatio: [519,25]
}

export const BINOMIO_RESTA_5 = {
    name: 'Binomio a menos b elevado a 5',
    svg: await load('binomio-resta-elevado-5.svg', 'raw'),
    url: await load('binomio-resta-elevado-5.svg', 'url'),
    path: getPath('binomio-resta-elevado-5.svg'),
    width: 532,
    height: 19,
    aspectRatio: [28,1]
}

export const BINOMIO_RESTA_6 = {
    name: 'Binomio a menos b elevado a 6',
    svg: await load('binomio-resta-elevado-6.svg', 'raw'),
    url: await load('binomio-resta-elevado-6.svg', 'url'),
    path: getPath('binomio-resta-elevado-6.svg'),
    width: 558,
    height: 19,
    aspectRatio: [558, 19]
}

export const BINOMIO_RESTA_7 = {
    name: 'Binomio a menos b elevado a 7',
    svg: await load('binomio-resta-elevado-7.svg', 'raw'),
    url: await load('binomio-resta-elevado-7.svg', 'url'),
    path: getPath('binomio-resta-elevado-7.svg'),
    width: 517,
    height: 12,
    aspectRatio: [517, 12]
}

//Exponentes
export const EXPONENTE_0 = {
    name: 'Exponente 0',
    svg: await load('exponente-0.svg', 'raw'),
    url: await load('exponente-0.svg', 'url'),
    path: getPath('exponente-0.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_1 = {
    name: 'Exponente 1',
    svg: await load('exponente-1.svg', 'raw'),
    url: await load('exponente-1.svg', 'url'),
    path: getPath('exponente-1.svg'),
    width: 69,
    height: 24,
    aspectRatio: [23,8]
}

export const EXPONENTE_2 = {
    name: 'Exponente 2',
    svg: await load('exponente-2.svg', 'raw'),
    url: await load('exponente-2.svg', 'url'),
    path: getPath('exponente-2.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_3 = {
    name: 'Exponente 3',
    svg: await load('exponente-3.svg', 'raw'),
    url: await load('exponente-3.svg', 'url'),
    path: getPath('exponente-3.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_4 = {
    name: 'Exponente 4',
    svg: await load('exponente-4.svg', 'raw'),
    url: await load('exponente-4.svg', 'url'),
    path: getPath('exponente-4.svg'),
    width: 70,
    height: 25,
    aspectRatio: [14,5]
}

export const EXPONENTE_5 = {
    name: 'Exponente 5',
    svg: await load('exponente-5.svg', 'raw'),
    url: await load('exponente-5.svg', 'url'),
    path: getPath('exponente-5.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_6 = {
    name: 'Exponente 6',
    svg: await load('exponente-6.svg', 'raw'),
    url: await load('exponente-6.svg', 'url'),
    path: getPath('exponente-6.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_7 = {
    name: 'Exponente 7',
    svg: await load('exponente-7.svg', 'raw'),
    url: await load('exponente-7.svg', 'url'),
    path: getPath('exponente-7.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

export const EXPONENTE_8 = {
    name: 'Exponente 8',
    svg: await load('exponente-8.svg', 'raw'),
    url: await load('exponente-8.svg', 'url'),
    path: getPath('exponente-8.svg'),
    width: 70,
    height: 24,
    aspectRatio: [35,12]
}

// Formula general
export const GENERAL_SUMA = {
    name: 'Formula general Binomio de Newton suma',
    svg: await load('binomio-suma-elevado-n.svg', 'raw'),
    url: await load('binomio-suma-elevado-n.svg', 'url'),
    path: getPath('binomio-suma-elevado-n.svg'),
    width: 302,
    height: 59,
    aspectRatio: [302,59]
}

export const GENERAL_RESTA = {
    name: 'Formula general Binomio de Newton resta',
    svg: await load('binomio-resta-elevado-n.svg', 'raw'),
    url: await load('binomio-resta-elevado-n.svg', 'url'),
    path: getPath('binomio-resta-elevado-n.svg'),
    width: 369,
    height: 59,
    aspectRatio: [369,59]
}

export const GENERAL_SUMA_NCR = {
    name: 'Formula general Binomio de Newton suma NCR',
    svg: await load('binomio-suma-elevado-n-var-ncr.svg', 'raw'),
    url: await load('binomio-suma-elevado-n-var-ncr.svg', 'url'),
    path: getPath('binomio-suma-elevado-n-var-ncr.svg'),
    width: 296,
    height: 59,
    aspectRatio: [296,59]
}

export const GENERAL_RESTA_NCR = {
    name: 'Formula general Binomio de Newton resta NCR',
    svg: await load('binomio-resta-elevado-n-var-ncr.svg', 'raw'),
    url: await load('binomio-resta-elevado-n-var-ncr.svg', 'url'),
    path: getPath('binomio-resta-elevado-n-var-ncr.svg'),
    width: 363,
    height: 59,
    aspectRatio: [363,59]
}



