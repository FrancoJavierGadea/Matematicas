
export const SIN = {
    name: "Seno",
    range: "0 ≥ 𝑥 ≤ 1",
    interval: '[0, 1]',
    values: {
        0: { angle: 0, value: 0, latex: '0', },

        30: {
            angle: 30,
            value: 0.5,
            latex: '\\frac{1}{2}',
        },
        45: {
            angle: 45,
            value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
        },
        60: {
            angle: 60,
            value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
        },

        90: { angle: 60, value: 1, latex: '1', },

        120: {
            angle: 120,
            value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
        },
        135: {
            angle: 135,
            value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
        },
        150: {
            angle: 150,
            value: 0.5,
            latex: '\\frac{1}{2}',
        },

        180: { angle: 180, value: 0, latex: '0', },

        210: {
            angle: 210,
            value: -0.5,
            latex: '-\\frac{1}{2}',
        },
        225: {
            angle: 225,
            value: -Math.sqrt(2) / 2,
            latex: '-\\frac{\\sqrt{2}}{2}',
        },
        240: {
            angle: 240,
            value: -Math.sqrt(3) / 2,
            latex: '-\\frac{\\sqrt{3}}{2}',
        },

        270: { angle: 270, value: -1, latex: '-1', },

        300: {
            angle: 300,
            value: -Math.sqrt(3) / 2,
            latex: '-\\frac{\\sqrt{3}}{2}',
        },
        315: {
            angle: 135,
            value: -Math.sqrt(2) / 2,
            latex: '-\\frac{\\sqrt{2}}{2}',
        },
        330: {
            angle: 330,
            value: -0.5,
            latex: '-\\frac{1}{2}',
        },
        
        360: { angle: 360, value: 0, latex: '0', }, 
    }
}

export const COS = {
    name: "Coseno",
    range: "0 ≥ 𝑥 ≤ 1",
    interval: '[0, 1]',
    values: {
        0: { angle: 0, value: 1, latex: '1', },

        30: {
            angle: 30,
            value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
        },
        45: {
            angle: 45,
            value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
        },
        60: {
            angle: 60,
            value: 0.5,
            latex: '\\frac{1}{2}',
        },

        90: { angle: 90, value: 0, latex: '0', },

        120: {
            angle: 120,
            value: -0.5,
            latex: '-\\frac{1}{2}',
        },
        135: {
            angle: 135,
            value: -Math.sqrt(2) / 2,
            latex: '-\\frac{\\sqrt{2}}{2}',
        },
        150: {
            angle: 150,
            value: -Math.sqrt(3) / 2,
            latex: '-\\frac{\\sqrt{3}}{2}',
        },
        
        180: { angle: 180, value: -1, latex: '-1', },

        210: {
            angle: 210,
            value: -Math.sqrt(3) / 2,
            latex: '-\\frac{\\sqrt{3}}{2}',
        },
        225: {
            angle: 225,
            value: -Math.sqrt(2) / 2,
            latex: '-\\frac{\\sqrt{2}}{2}',
        },
        240: {
            angle: 240,
            value: -0.5,
            latex: '-\\frac{1}{2}',
        },

        270: { angle: 270, value: 0, latex: '0', },

        300: {
            angle: 300,
            value: 0.5,
            latex: '\\frac{1}{2}',
        },
        315: {
            angle: 315,
            value: Math.sqrt(2) / 2,
            latex: '\\frac{\\sqrt{2}}{2}',
        },
        330: {
            angle: 330,
            value: Math.sqrt(3) / 2,
            latex: '\\frac{\\sqrt{3}}{2}',
        },

        360: { angle: 360, value: 1, latex: '1', }
    }
}

export const TAN = {
    name: "Tangente",
    range: "-∞ > 𝑥 < ∞",
    interval: '(-∞, ∞)',
    values: {
        0: { angle: 0, value: 0, latex: '0', },

        30: {
            angle: 30,
            value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
        },
        45: {
            angle: 45, 
            value: 1,
            latex: '1',
        },
        60: {
            angle: 60,
            value: Math.sqrt(3),
            latex: '\\sqrt{3}',
        },

        90: { angle: 60, value: Infinity, latex: '\\infty', },
    
        120: {
            angle: 120,
            value: -Math.sqrt(3),
            latex: '-\\sqrt{3}',
        },
        135: {
            angle: 135, 
            value: -1,
            latex: '-1',
        },
        150: {
            angle: 150,
            value: -Math.sqrt(3) / 3,
            latex: '-\\frac{\\sqrt{3}}{3}',
        },

        180: { angle: 180, value: 0, latex: '0', },

        210: {
            angle: 210,
            value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
        },
        225: {
            angle: 225, 
            value: 1,
            latex: '1',
        },
        240: {
            angle: 240,
            value: Math.sqrt(3),
            latex: '\\sqrt{3}',
        },

        270: { angle: 270, value: Infinity, latex: '\\infty', },
    
        300: {
            angle: 300,
            value: -Math.sqrt(3),
            latex: '-\\sqrt{3}',
        },
        315: {
            angle: 315, 
            value: -1,
            latex: '-1',
        },
        330: {
            angle: 330,
            value: -Math.sqrt(3) / 3,
            latex: '-\\frac{\\sqrt{3}}{3}',
        },

        360: { angle: 360, value: 0, latex: '0', }
    }
}

export const COT = {
    name: "Cotangente",
    range: "-∞ > 𝑥 < ∞",
    interval: '(-∞, ∞)',
    values: {
        0: { angle: 0, value: Infinity, latex: '\\infty', },

        30: {
            angle: 30,
            value: Math.sqrt(3),
            latex: '\\sqrt{3}',
        },

        45: { angle: 45, value: 1, latex: '1', },

        60: {
            angle: 60,
            value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
        },

        90: { angle: 60, value: 0, latex: '0', },

        120: {
            angle: 120,
            value: -Math.sqrt(3) / 3,
            latex: '-\\frac{\\sqrt{3}}{3}',
        },

        135: { angle: 135, value: 1, latex: '1', },

        150: {
            angle: 150,
            value: -Math.sqrt(3),
            latex: '-\\sqrt{3}',
        },

        180: { angle: 180, value: Infinity, latex: '\\infty', },

        210: {
            angle: 210,
            value: Math.sqrt(3),
            latex: '\\sqrt{3}',
        },

        225: { angle: 225, value: 1, latex: '1', },

        240: {
            angle: 240,
            value: Math.sqrt(3) / 3,
            latex: '\\frac{\\sqrt{3}}{3}',
        },

        270: { angle: 270, value: 0, latex: '0', },

        300: {
            angle: 300,
            value: -Math.sqrt(3) / 3,
            latex: '-\\frac{\\sqrt{3}}{3}',
        },

        315: { angle: 315, value: 1, latex: '1', },

        330: {
            angle: 330,
            value: -Math.sqrt(3),
            latex: '-\\sqrt{3}',
        },

        360: { angle: 360, value: Infinity, latex: '\\infty', },
    }
}

export const SEC = {
    name: "Secante",
    range: "(-∞ > 𝑥 ≤ -1) ∧ (1 ≥ 𝑥 < ∞)",
    interval: '(-∞, -1] ⋃ [1, ∞)',
    values: {
        0: { angle: 0, value: 1, latex: '1', },

        30: {
            angle: 30, 
            value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
        },
        45: {
            angle: 45, 
            value: Math.sqrt(2),
            latex: '\\sqrt{2}',
        },

        60: { angle: 60, value: 2, latex: '2', },

        90: { angle: 60, value: 0, latex: '\\infty', },

        120: { angle: 120, value: -2, latex: '-2', },
        
        135: {
            angle: 135, 
            value: -Math.sqrt(2),
            latex: '-\\sqrt{2}',
        },

        150: {
            angle: 150, 
            value: -(2 * Math.sqrt(3)) / 3,
            latex: '-\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        180: { angle: 180, value: -1, latex: '-1', },

        210: {
            angle: 210, 
            value: -(2 * Math.sqrt(3)) / 3,
            latex: '-\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        225: {
            angle: 225, 
            value: -Math.sqrt(2),
            latex: '-\\sqrt{2}',
        },

        240: { angle: 240, value: -2, latex: '-2', },

        270: { angle: 270, value: 0, latex: '\\infty', },

        300: { angle: 300, value: 2, latex: '2', },

        315: {
            angle: 315, 
            value: Math.sqrt(2),
            latex: '\\sqrt{2}',
        },

        330: {
            angle: 330, 
            value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        360: { angle: 360, value: 1, latex: '1', }
    }
}

export const CSC = {
    name: "Cosecante",
    range: "(-∞ > 𝑥 ≤ -1) ∧ (1 ≥ 𝑥 < ∞)",
    interval: '(-∞, -1] ⋃ [1, ∞)',
    values: {
        0: { angle: 0, value: Infinity, latex: '\\infty', },

        30: { angle: 30, value: 2, latex: '2', },

        45: {
            angle: 45, 
            value: Math.sqrt(2),
            latex: '\\sqrt{2}',
        },
        60: {
            angle: 60, 
            value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        90: { angle: 90, value: 1, latex: '1', },

        120: {
            angle: 120, 
            value: (2 * Math.sqrt(3)) / 3,
            latex: '\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        135: {
            angle: 135, 
            value: Math.sqrt(2),
            latex: '\\sqrt{2}',
        },

        150: { angle: 150, value: 2, latex: '2', },

        180: { angle: 180, value: Infinity, latex: '\\infty', },

        210: { angle: 210, value: -2, latex: '-2', },

        225: {
            angle: 225, 
            value: -Math.sqrt(2),
            latex: '-\\sqrt{2}',
        },

        240: {
            angle: 240, 
            value: -(2 * Math.sqrt(3)) / 3,
            latex: '-\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        270: { angle: 270, value: -1, latex: '-1', },

        300: {
            angle: 300, 
            value: -(2 * Math.sqrt(3)) / 3,
            latex: '-\\frac{2 \\cdot \\sqrt{3}}{3}',
        },

        315: {
            angle: 315, 
            value: -Math.sqrt(2),
            latex: '-\\sqrt{2}',
        },

        330: { angle: 330, value: -2, latex: '-2', },

        360: { angle: 360, value: Infinity, latex: '\\infty', }
    }
}