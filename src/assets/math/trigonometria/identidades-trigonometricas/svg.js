import { MultipleFilesLoader } from "@utils/ImportUtils"
  
const loader = new MultipleFilesLoader({

    path: `/src/assets/math/trigonometria/identidades-trigonometricas/svg`,

    rawFiles: import.meta.glob(`/src/assets/math/trigonometria/identidades-trigonometricas/svg/*.svg`, {
        query: '?raw',
    }),

    urlFiles: import.meta.glob(`/src/assets/math/trigonometria/identidades-trigonometricas/svg/*.svg`, {
        query: '?url',
    }),
    
    logs: false,
});



export const FUNDAMENTAL = {

    name: 'Identidad trigonometrica fundamental',

    svg: await loader.load('identidad-trigonometrica-fundamental-1.svg', 'raw'),
    url: await loader.load('identidad-trigonometrica-fundamental-1.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('identidad-trigonometrica-fundamental-2.svg', 'raw'),
            url: await loader.load('identidad-trigonometrica-fundamental-2.svg', 'url'),
        },
        {
            svg: await loader.load('identidad-trigonometrica-fundamental-3.svg', 'raw'),
            url: await loader.load('identidad-trigonometrica-fundamental-3.svg', 'url'),
        }
    ]
}

export const TANGENTE = {

    name: 'Tangente',

    svg: await loader.load('tangente-1.svg', 'raw'),
    url: await loader.load('tangente-1.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('tangente-2.svg', 'raw'),
            url: await loader.load('tangente-2.svg', 'url'),
        },
        {
            svg: await loader.load('tangente-3.svg', 'raw'),
            url: await loader.load('tangente-3.svg', 'url'),
        }
    ]
}

export const SECANTE = {

    name: 'Secante',

    svg: await loader.load('secante-1.svg', 'raw'),
    url: await loader.load('secante-1.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('secante-2.svg', 'raw'),
            url: await loader.load('secante-2.svg', 'url'),
        },
        {
            svg: await loader.load('secante-3.svg', 'raw'),
            url: await loader.load('secante-3.svg', 'url'),
        }
    ]
}

export const COSECANTE = {

    name: 'Cosecante',

    svg: await loader.load('cosecante-1.svg', 'raw'),
    url: await loader.load('cosecante-1.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('cosecante-2.svg', 'raw'),
            url: await loader.load('cosecante-2.svg', 'url'),
        },
        {
            svg: await loader.load('cosecante-3.svg', 'raw'),
            url: await loader.load('cosecante-3.svg', 'url'),
        }
    ]
}

export const COTANGENTE = {

    name: 'Cotangente',

    svg: await loader.load('cotangente-1.svg', 'raw'),
    url: await loader.load('cotangente-1.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('cotangente-2.svg', 'raw'),
            url: await loader.load('cotangente-2.svg', 'url'),
        },
        {
            svg: await loader.load('cotangente-3.svg', 'raw'),
            url: await loader.load('cotangente-3.svg', 'url'),
        }
    ]
}


export const PITAGORICA_SENO = {

    name: 'Seno',

    svg: await loader.load('pitagorica-1.svg', 'raw'),
    url: await loader.load('pitagorica-1.svg', 'url'),
}

export const PITAGORICA_COSENO = {
    name: 'Coseno',

    svg: await loader.load('pitagorica-2.svg', 'raw'),
    url: await loader.load('pitagorica-2.svg', 'url'),
}

export const PITAGORICA_TANGENTE = {
    name: 'Tangente',

    svg: await loader.load('pitagorica-3.svg', 'raw'),
    url: await loader.load('pitagorica-3.svg', 'url'),
}

export const COSENO_DE_UNA_SUMA = {

    name: 'Coseno de una suma',

    svg: await loader.load('coseno-de-una-suma.svg', 'raw'),
    url: await loader.load('coseno-de-una-suma.svg', 'url'),
}

export const COSENO_DE_UNA_RESTA = {

    name: 'Coseno de una resta',

    svg: await loader.load('coseno-de-una-resta.svg', 'raw'),
    url: await loader.load('coseno-de-una-resta.svg', 'url'),
}

export const SENO_DE_UNA_SUMA = {

    name: 'Seno de una suma',

    svg: await loader.load('seno-de-una-suma.svg', 'raw'),
    url: await loader.load('seno-de-una-suma.svg', 'url'),
}

export const SENO_DE_UNA_RESTA = {

    name: 'Seno de una resta',

    svg: await loader.load('seno-de-una-resta.svg', 'raw'),
    url: await loader.load('seno-de-una-resta.svg', 'url'),
}

export const TANGENTE_DE_UNA_SUMA = {

    name: 'Tangente de una suma',

    svg: await loader.load('tangente-de-una-suma.svg', 'raw'),
    url: await loader.load('tangente-de-una-suma.svg', 'url'),
}

export const TANGENTE_DE_UNA_RESTA = {

    name: 'Tangente de una resta',

    svg: await loader.load('tangente-de-una-resta.svg', 'raw'),
    url: await loader.load('tangente-de-una-resta.svg', 'url'),
}

//-----

export const SENO_DE_MENOS_ALPHA = {

    name: 'Seno de menos 𝛼',

    svg: await loader.load('seno-de-menos-alfa.svg', 'raw'),
    url: await loader.load('seno-de-menos-alfa.svg', 'url'),
}

export const COSENO_DE_MENOS_ALPHA = {

    name: 'Coseno de menos 𝛼',

    svg: await loader.load('coseno-de-menos-alfa.svg', 'raw'),
    url: await loader.load('coseno-de-menos-alfa.svg', 'url'),
}

export const SENO_PI_MAS_ALPHA = {

    name: 'Seno de π mas 𝛼',

    svg: await loader.load('seno-pi-mas-alfa.svg', 'raw'),
    url: await loader.load('seno-pi-mas-alfa.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('seno-180-mas-alfa.svg', 'raw'),
            url: await loader.load('seno-180-mas-alfa.svg', 'url'),
        }
    ]
}

export const SENO_PI_MENOS_ALPHA = {

    name: 'Seno de π menos 𝛼',

    svg: await loader.load('seno-pi-menos-alfa.svg', 'raw'),
    url: await loader.load('seno-pi-menos-alfa.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('seno-180-menos-alfa.svg', 'raw'),
            url: await loader.load('seno-180-menos-alfa.svg', 'url'),
        }
    ]
}

export const COSENO_PI_MAS_MENOS_ALPHA = {

    name: 'Seno de π mas o menos 𝛼',

    svg: await loader.load('coseno-pi-mas-menos-alfa.svg', 'raw'),
    url: await loader.load('coseno-pi-mas-menos-alfa.svg', 'url'),

    variantes: [
        {
            svg: await loader.load('coseno-180-mas-menos-alfa.svg', 'raw'),
            url: await loader.load('coseno-180-mas-menos-alfa.svg', 'url'),
        }
    ]
}


export const SENO_2_ALPHA = {
    name: 'Seno de 2 por 𝛼',

    svg: await loader.load('seno-de-2-alfa.svg', 'raw'),
    url: await loader.load('seno-de-2-alfa.svg', 'url'),
}

export const COSENO_2_ALPHA = {
    name: 'Coseno de 2 por 𝛼',

    svg: await loader.load('coseno-de-2-alfa.svg', 'raw'),
    url: await loader.load('coseno-de-2-alfa.svg', 'url'),
}

export const TANGENTE_2_ALPHA = {
    name: 'Tangente de 2 por 𝛼',

    svg: await loader.load('tangente-de-2-alfa.svg', 'raw'),
    url: await loader.load('tangente-de-2-alfa.svg', 'url'),
}

export const SENO_ALPHA_DIVIDIDO_2 = {
    name: 'Seno de 𝛼 dividido 2',

    svg: await loader.load('seno-de-alfa-dividido-2.svg', 'raw'),
    url: await loader.load('seno-de-alfa-dividido-2.svg', 'url'),
}

export const COSENO_ALPHA_DIVIDIDO_2 = {
    name: 'Coseno de 𝛼 dividido 2',

    svg: await loader.load('coseno-de-alfa-dividido-2.svg', 'raw'),
    url: await loader.load('coseno-de-alfa-dividido-2.svg', 'url'),
}

export const TANGENTE_ALPHA_DIVIDIDO_2 = {
    name: 'Tangente de 𝛼 dividido 2',

    svg: await loader.load('tangente-de-alfa-dividido-2.svg', 'raw'),
    url: await loader.load('tangente-de-alfa-dividido-2.svg', 'url'),
}

export const SENO_ALPHA_MAS_SENO_BETA = {
    name: 'Seno de 𝛼 mas Seno de 𝛽',

    svg: await loader.load('seno-de-alfa-mas-seno-de-beta.svg', 'raw'),
    url: await loader.load('seno-de-alfa-mas-seno-de-beta.svg', 'url'),
}

export const SENO_ALPHA_MENOS_SENO_BETA = {
    name: 'Seno de 𝛼 menos Seno de 𝛽',

    svg: await loader.load('seno-de-alfa-menos-seno-de-beta.svg', 'raw'),
    url: await loader.load('seno-de-alfa-menos-seno-de-beta.svg', 'url'),
}

export const COSENO_ALPHA_MAS_COSENO_BETA = {
    name: 'Coseno de 𝛼 mas Coseno de 𝛽',

    svg: await loader.load('coseno-de-alfa-mas-coseno-de-beta.svg', 'raw'),
    url: await loader.load('coseno-de-alfa-mas-coseno-de-beta.svg', 'url'),
}

export const COSENO_ALPHA_MENOS_COSENO_BETA = {
    name: 'Coseno de 𝛼 menos Coseno de 𝛽',

    svg: await loader.load('coseno-de-alfa-menos-coseno-de-beta.svg', 'raw'),
    url: await loader.load('coseno-de-alfa-menos-coseno-de-beta.svg', 'url'),
}


export const SENO_ALPHA_POR_SENO_BETA = {
    name: 'Seno de 𝛼 por Seno de 𝛽',

    svg: await loader.load('seno-de-alfa-por-seno-de-beta.svg', 'raw'),
    url: await loader.load('seno-de-alfa-por-seno-de-beta.svg', 'url'),
}

export const COSENO_ALPHA_POR_COSENO_BETA = {
    name: 'Coseno de 𝛼 por Coseno de 𝛽',

    svg: await loader.load('coseno-de-alfa-por-coseno-de-beta.svg', 'raw'),
    url: await loader.load('coseno-de-alfa-por-coseno-de-beta.svg', 'url'),
}

export const SENO_ALPHA_POR_COSENO_BETA = {
    name: 'Seno de 𝛼 por Coseno de 𝛽',

    svg: await loader.load('seno-de-alfa-por-coseno-de-beta.svg', 'raw'),
    url: await loader.load('seno-de-alfa-por-coseno-de-beta.svg', 'url'),
}


export const SENO_ALPHA_AL_CUADRADO = {
    name: 'Seno de 𝛼 al cuadrado',

    svg: await loader.load('seno-de-alfa-al-cuadrado.svg', 'raw'),
    url: await loader.load('seno-de-alfa-al-cuadrado.svg', 'url'),
}

export const COSENO_ALPHA_AL_CUADRADO = {
    name: 'Coseno de 𝛼 al cuadrado',

    svg: await loader.load('coseno-de-alfa-al-cuadrado.svg', 'raw'),
    url: await loader.load('coseno-de-alfa-al-cuadrado.svg', 'url'),
}
