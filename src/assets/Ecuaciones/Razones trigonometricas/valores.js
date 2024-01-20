const folder = 'optimized-svg';

const load = async (name, mode = 'raw') => {

    const svg = (await import(/* @vite-ignore */`./${folder}/${name}?${mode}`)).default;

    return svg;
}


export const SIN = {
    name: "Seno",
    range: "0 ≥ 𝑥 ≤ 1",
    values: {
        0: { 
            angle: 0, value: 0,
            latex: '0', 
            svg: load('zero.svg', 'raw')
        },
        30: {
            angle: 30, value: 0.5,
            latex: '\\frac{1}{2}',
            svg: load('un-medio.svg', 'raw')
        },
        45: {
            angle: 45, value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
            svg: load('raiz-de-2-sobre-2.svg', 'raw')
        },
        60: {
            angle: 60, value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
            svg: load('raiz-de-3-sobre-2.svg', 'raw')
        },
        90: {
            angle: 60, value: 1,
            latex: '1',
            svg: load('uno.svg', 'raw')
        }
    }
}

export const COS = {
    name: "Coseno",
    range: "0 ≥ 𝑥 ≤ 1",
    values: {
        0: {
            angle: 0, value: 1,
            latex: '',
            svg: load('uno.svg', 'raw') 
        },
        30: {
            angle: 30, value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
            svg: load('raiz-de-3-sobre-2.svg', 'raw')
        },
        45: {
            angle: 45, value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
            svg: load('raiz-de-2-sobre-2.svg', 'raw')
        },
        60: {
            angle: 60, value: 0.5,
            latex: '\\frac{1}{2}',
            svg: load('un-medio.svg', 'raw') 
        },
        90: {
            angle: 60, value: 0,
            latex: '0', 
            svg: load('zero.svg', 'raw') 
        }
    }
}

export const TAN = {
    name: "Tangente",
    range: "-∞ > 𝑥 < ∞",
    values: {
        0: {
            angle: 0, value: 0,
            latex: '0', 
            svg: load('zero.svg', 'raw') 
        },
        30: {
            angle: 30, value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
            svg: load('raiz-de-3-sobre-3.svg', 'raw')
        },
        45: {
            angle: 45, value: 1,
            latex: '1',
            svg: load('uno.svg', 'raw')
        },
        60: {
            angle: 60, value: Math.sqrt(3),
            latex: '\\sqrt{3}',
            svg: load('raiz-de-3.svg', 'raw')
        },
        90: {
            angle: 60, value: Infinity,
            latex: '\\infty',
            svg: load('infinito.svg', 'raw')
        }
    }
}

export const COT = {
    name: "Cotangente",
    range: "-∞ > 𝑥 < ∞",
    values: {
        0: {
            angle: 0, value: Infinity,
            latex: '\\infty', 
            svg: load('infinito.svg', 'raw')
        },
        30: {
            angle: 30, value: Math.sqrt(3),
            latex: '\\sqrt{3}',
            svg: load('raiz-de-3.svg', 'raw')
        },
        45: {
            angle: 45, value: 1,
            latex: '1',
            svg: load('uno.svg', 'raw')
        },
        60: {
            angle: 60, value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
            svg: load('raiz-de-3-sobre-3.svg', 'raw')
        },
        90: {
            angle: 60, value: Infinity,
            latex: '0',
            svg: load('zero.svg', 'raw')
        }
    }
}


export const SEC = {
    name: "Secante",
    range: "(-∞ > 𝑥 ≤ -1) ∧ (1 ≥ 𝑥 < ∞)",
    values: {
        0: {
            angle: 0, value: 1,
            latex: '1',
            svg: load('uno.svg', 'raw') 
        },
        30: {
            angle: 30, value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
            svg: load('2-raiz-de-3-sobre-3.svg', 'raw')
        },
        45: {
            angle: 45, value: Math.sqrt(2),
            latex: '\\sqrt{2}',
            svg: load('raiz-de-2.svg', 'raw')
        },
        60: {
            angle: 60, value: 2,
            latex: '2',
            svg: load('dos.svg', 'raw') 
        },
        90: {
            angle: 60, value: 0,
            latex: '\\infty', 
            svg: load('infinito.svg', 'raw') 
        }
    }
}

export const CSC = {
    name: "Cosecante",
    range: "(-∞ > 𝑥 ≤ -1) ∧ (1 ≥ 𝑥 < ∞)",
    values: {
        0: {
            angle: 0, value: Infinity,
            latex: '\\infty', 
            svg: load('infinito.svg', 'raw') 
        },
        30: {
            angle: 30, value: 2,
            latex: '2',
            svg: load('dos.svg', 'raw') 
        },
        45: {
            angle: 45, value: Math.sqrt(2),
            latex: '\\sqrt{2}',
            svg: load('raiz-de-2.svg', 'raw')
        },
        60: {
            angle: 60, value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
            svg: load('2-raiz-de-3-sobre-3.svg', 'raw')
        },
        90: {
            angle: 60, value: 1,
            latex: '1',
            svg: load('uno.svg', 'raw')  
        }
    }
}