
const folder = 'optimized-svg';

const load = async (name, mode = 'raw') => {

    const svg = (await import(`./${folder}/${name}?${mode}`)).default;

    return svg;
}

export const FUNDAMENTAL = {

    name: 'Identidad trigonometrica fundamental',

    svg: await load('identidad-trigonometrica-fundamental-1.svg', 'raw'),
    url: await load('identidad-trigonometrica-fundamental-1.svg', 'url'),

    variantes: [
        {
            svg: await load('identidad-trigonometrica-fundamental-2.svg', 'raw'),
            url: await load('identidad-trigonometrica-fundamental-2.svg', 'url'),
        },
        {
            svg: await load('identidad-trigonometrica-fundamental-3.svg', 'raw'),
            url: await load('identidad-trigonometrica-fundamental-3.svg', 'url'),
        }
    ]
}

export const TANGENTE = {

    name: 'Tangente',

    svg: await load('tangente-1.svg', 'raw'),
    url: await load('tangente-1.svg', 'url'),

    variantes: [
        {
            svg: await load('tangente-2.svg', 'raw'),
            url: await load('tangente-2.svg', 'url'),
        },
        {
            svg: await load('tangente-3.svg', 'raw'),
            url: await load('tangente-3.svg', 'url'),
        }
    ]
}

export const SECANTE = {

    svg: await load('secante-1.svg', 'raw'),
    url: await load('secante-1.svg', 'url'),

    variantes: [
        {
            svg: await load('secante-2.svg', 'raw'),
            url: await load('secante-2.svg', 'url'),
        },
        {
            svg: await load('secante-3.svg', 'raw'),
            url: await load('secante-3.svg', 'url'),
        }
    ]
}

export const COSECANTE = {

    svg: await load('cosecante-1.svg', 'raw'),
    url: await load('cosecante-1.svg', 'url'),

    variantes: [
        {
            svg: await load('cosecante-2.svg', 'raw'),
            url: await load('cosecante-2.svg', 'url'),
        },
        {
            svg: await load('cosecante-3.svg', 'raw'),
            url: await load('cosecante-3.svg', 'url'),
        }
    ]
}

export const COTANGENTE = {

    svg: await load('cotangente-1.svg', 'raw'),
    url: await load('cotangente-1.svg', 'url'),

    variantes: [
        {
            svg: await load('cotangente-2.svg', 'raw'),
            url: await load('cotangente-2.svg', 'url'),
        },
        {
            svg: await load('cotangente-3.svg', 'raw'),
            url: await load('cotangente-3.svg', 'url'),
        }
    ]
}


export const PITAGORICAS = {

    svg: await load('pitagorica-1.svg', 'raw'),
    url: await load('pitagorica-1.svg', 'url'),

    variantes: [
        {
            svg: await load('pitagorica-2.svg', 'raw'),
            url: await load('pitagorica-2.svg', 'url'),
        },
        {
            svg: await load('pitagorica-3.svg', 'raw'),
            url: await load('pitagorica-3.svg', 'url'),
        }
    ]
}

export const COSENO_DE_UNA_SUMA = {
    name: 'Coseno de una suma',

    svg: await load('coseno-de-una-suma.svg', 'raw'),
    url: await load('coseno-de-una-suma.svg', 'url'),
}

export const COSENO_DE_UNA_RESTA = {
    name: 'Coseno de una resta',

    svg: await load('coseno-de-una-resta.svg', 'raw'),
    url: await load('coseno-de-una-resta.svg', 'url'),
}

export const SENO_DE_UNA_SUMA = {
    name: 'Seno de una suma',

    svg: await load('seno-de-una-suma.svg', 'raw'),
    url: await load('seno-de-una-suma.svg', 'url'),
}

export const SENO_DE_UNA_RESTA = {
    name: 'Seno de una resta',

    svg: await load('seno-de-una-resta.svg', 'raw'),
    url: await load('seno-de-una-resta.svg', 'url'),
}

//-----

export const SENO_DE_MENOS_ALFA = {
    name: 'Seno de menos α',

    svg: await load('seno-de-menos-alfa.svg', 'raw'),
    url: await load('seno-de-menos-alfa.svg', 'url'),
}

export const COSENO_DE_MENOS_ALFA = {
    name: 'Coseno de menos α',

    svg: await load('coseno-de-menos-alfa.svg', 'raw'),
    url: await load('coseno-de-menos-alfa.svg', 'url'),
}

export const SENO_PI_MAS_ALFA = {
    name: 'Seno de π mas α',

    svg: await load('seno-pi-mas-alfa.svg', 'raw'),
    url: await load('seno-pi-mas-alfa.svg', 'url'),

    variantes: [
        {
            svg: await load('seno-180-mas-alfa.svg', 'raw'),
            url: await load('seno-180-mas-alfa.svg', 'url'),
        }
    ]
}

export const SENO_PI_MENOS_ALFA = {
    name: 'Seno de π menos α',

    svg: await load('seno-pi-menos-alfa.svg', 'raw'),
    url: await load('seno-pi-menos-alfa.svg', 'url'),

    variantes: [
        {
            svg: await load('seno-180-menos-alfa.svg', 'raw'),
            url: await load('seno-180-menos-alfa.svg', 'url'),
        }
    ]
}

export const CPSENO_PI_MAS_MENOS_ALFA = {
    name: 'Seno de π mas o menos α',

    svg: await load('coseno-pi-mas-menos-alfa.svg', 'raw'),
    url: await load('coseno-pi-mas-menos-alfa.svg', 'url'),

    variantes: [
        {
            svg: await load('coseno-180-mas-menos-alfa.svg', 'raw'),
            url: await load('coseno-180-mas-menos-alfa.svg', 'url'),
        }
    ]
}