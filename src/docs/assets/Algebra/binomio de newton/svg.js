const folder = 'optimized-svg';

const load = async (name, mode = 'raw') => {

    const svg = (await import(/* @vite-ignore */`./${folder}/${name}?${mode}`)).default;

    return svg;
}

export const BINOMIO_0 = {
    name: 'Binomio a mas menos b elevado a 0',
    svg: await load('binomio-elevado-0.svg', 'raw'),
    url: await load('binomio-elevado-0.svg', 'url'),
}

export const BINOMIO_SUMA_2 = {
    name: 'Binomio a mas b elevado a 2',
    svg: await load('binomio-suma-elevado-2.svg', 'raw'),
    url: await load('binomio-suma-elevado-2.svg', 'url'),
}

export const BINOMIO_SUMA_3 = {
    name: 'Binomio a mas b elevado a 3',
    svg: await load('binomio-suma-elevado-3.svg', 'raw'),
    url: await load('binomio-suma-elevado-3.svg', 'url'),
}

export const BINOMIO_SUMA_4 = {
    name: 'Binomio a mas b elevado a 4',
    svg: await load('binomio-suma-elevado-4.svg', 'raw'),
    url: await load('binomio-suma-elevado-4.svg', 'url'),
}

export const BINOMIO_SUMA_5 = {
    name: 'Binomio a mas b elevado a 5',
    svg: await load('binomio-suma-elevado-5.svg', 'raw'),
    url: await load('binomio-suma-elevado-5.svg', 'url'),
}

export const BINOMIO_SUMA_6 = {
    name: 'Binomio a mas b elevado a 6',
    svg: await load('binomio-suma-elevado-6.svg', 'raw'),
    url: await load('binomio-suma-elevado-6.svg', 'url'),
}

export const BINOMIO_SUMA_7 = {
    name: 'Binomio a mas b elevado a 7',
    svg: await load('binomio-suma-elevado-7.svg', 'raw'),
    url: await load('binomio-suma-elevado-7.svg', 'url'),
}


export const BINOMIO_RESTA_2 = {
    name: 'Binomio a menos b elevado a 2',
    svg: await load('binomio-resta-elevado-2.svg', 'raw'),
    url: await load('binomio-resta-elevado-2.svg', 'url'),
}

export const BINOMIO_RESTA_3 = {
    name: 'Binomio a menos b elevado a 3',
    svg: await load('binomio-resta-elevado-3.svg', 'raw'),
    url: await load('binomio-resta-elevado-3.svg', 'url'),
}

export const BINOMIO_RESTA_4 = {
    name: 'Binomio a menos b elevado a 4',
    svg: await load('binomio-resta-elevado-4.svg', 'raw'),
    url: await load('binomio-resta-elevado-4.svg', 'url'),
}

export const BINOMIO_RESTA_5 = {
    name: 'Binomio a menos b elevado a 5',
    svg: await load('binomio-resta-elevado-5.svg', 'raw'),
    url: await load('binomio-resta-elevado-5.svg', 'url'),
}

export const BINOMIO_RESTA_6 = {
    name: 'Binomio a menos b elevado a 6',
    svg: await load('binomio-resta-elevado-6.svg', 'raw'),
    url: await load('binomio-resta-elevado-6.svg', 'url'),
}

export const BINOMIO_RESTA_7 = {
    name: 'Binomio a menos b elevado a 7',
    svg: await load('binomio-resta-elevado-7.svg', 'raw'),
    url: await load('binomio-resta-elevado-7.svg', 'url'),
}
