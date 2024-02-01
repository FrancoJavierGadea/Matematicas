class Simbolo {

    constructor({hex, html, latex}){

        this.hex = hex;
        this.html = html;
        this.latex = latex;

        this.char = (() => {

            if(Array.isArray(this.hex)){

                return String.fromCodePoint(...this.hex);
            }
            else {

                return String.fromCodePoint(this.hex);
            }

        })();
    }

    toString(){

        return this.char;
    }
}


export const BASICS = {

    'suma': new Simbolo({
        html: '+', 
        hex: 0x002b,
        latex: '+'
    }),
    'resta': new Simbolo({
        html: '&minus;', 
        hex: 0x2212,
        latex: '-' 
    }),
    'multiplicacion': new Simbolo({
        html: '&times;', 
        hex: 0x00d7,
        latex: '\\times' 
    }),
    'divicion': new Simbolo({
        html: '&divide;', 
        hex: 0x00f7,
        latex: '\\div' 
    }),

    'productoEscalar': new Simbolo({ 
        html: '&sdot;', 
        hex: 0x22c5,
        latex: '\\cdot' 
    }),
    'productoVectorial': new Simbolo({ 
        html: '&Cross;', 
        hex: 0x2a2f 
    }),

    'igual': new Simbolo({ 
        html: '=', 
        hex: 0x003d,
        latex: '=' 
    }),
    'distinto': new Simbolo({ 
        html: '&ne;', 
        hex: 0x2260,
        latex: '\\neq' 
    }),
    'aproximado': new Simbolo({ 
        html: '&asymp;', 
        hex: 0x2248,
        latex: '\\approx' 
    }),

    'to': new Simbolo({ 
        html: '&rarr;', 
        hex: 0x2192,
        latex: '\\to' 
    }),

    'mayor': new Simbolo({ 
        html: '&gt;', 
        hex: 0x003e,
        latex: '>' 
    }),
    'menor': new Simbolo({ 
        html: '&lt;', 
        hex: 0x003c,
        latex: '<' 
    }),
    'mayorIgual': new Simbolo({ 
        html: '&ge;', 
        hex: 0x2265,
        latex: '\\leq' 
    }),
    'menorIgual': new Simbolo({ 
        html: '&le;', 
        hex: 0x2264,
        latex: '\\geq' 
    }),

    'masMenos': new Simbolo({ 
        html: '&plusmn;', 
        hex: 0x00b1,
        latex: '\\pm' 
    }),

    'infinito': new Simbolo({ 
        html: '&infin;', 
        hex: 0x221e,
        latex: '\\infty' 
    }),
    'menosInfinito': new Simbolo({ 
        html: '&minus;&infin;', 
        hex: [0x2212, 0x221e],
        latex: '-\\infty' 
    }),

    //Logica y teoria de conjuntos
    'not': new Simbolo({ 
        html: '&not;', 
        hex: 0x00ac,
        latex: '\\neg' 
    }),
    'and': new Simbolo({ 
        html: '&and;', 
        hex: 0x2227,
        latex: '\\land' 
    }),
    'or': new Simbolo({ 
        html: '&or;', 
        hex: 0x2228,
        latex: '\\lor' 
    }),
    'xor': new Simbolo({ 
        html: '&veebar;', 
        hex: 0x22bb,
        latex: '\\veebar' 
    }),

    'paraTodo': new Simbolo({ 
        html: '&forall;', 
        hex: 0x2200,
        latex: '\\forall' 
    }),
    'existe': new Simbolo({ 
        html: '&exist;', 
        hex: 0x2203,
        latex: '\\exists' 
    }),

    'implica': new Simbolo({ 
        html: '&rArr;', 
        hex: 0x21d2,
        latex: ['\\Longrightarrow', '\\Rightarrow'] 
    }),
    'siSoloSi': new Simbolo({ 
        html: '&hArr;', 
        hex: 0x21d4,
        latex: ['\\Longleftrightarrow', '\\Leftrightarrow'] 
    }),

    'conjuntoVacio': new Simbolo({ 
        html: '&empty;', 
        hex: 0x2205,
        latex: '\\varnothing' 
    }),

    'pertenece':new Simbolo({ 
        html:  '&isin;', 
        hex: 0x2208,
        latex: '\\in' 
    }),
    'noPertenece': new Simbolo({ 
        html: '&notin;', 
        hex: 0x2209,
        latex: '\\notin' 
    }),

    'interseccion': new Simbolo({ 
        html: '&cap;', 
        hex: 0x2229,
        latex: '\\cap' 
    }),
    'union': new Simbolo({ 
        html: '&cup;', 
        hex: 0x222a,
        latex: '\\cup' 
    }),

    'porLoTanto': new Simbolo({ 
        html: '&there4;', 
        hex: 0x2234,
        latex: '\\therefore' 
    }),

    //Geometria
    'grado': new Simbolo({
        html: '&deg;',
        hex: 0x00b0,
        latex: '\\circ'
    }),
    'angulo': new Simbolo({
        html: '&ang;',
        hex: 0x2220,
        latex: '\\angle'
    }),
    'anguloRecto': new Simbolo({
        html: '&angrt;',
        hex: 0x221f,
        latex: ''
    })
}


//Letras griegas 	
export const LETRAS_GRIEGAS = {

    upper: {
        'alpha': new Simbolo({ 
            html: '&Alpha;', 
            hex: 0x0391, 
            latex: ''
        }),
        'beta': new Simbolo({ 
            html: '&Beta;', 
            hex: 0x0392, 
            latex: ''
        }),
        'gamma': new Simbolo({ 
            html: '&Gamma;', 
            hex: 0x0393, 
            latex: ''
        }),
        'delta': new Simbolo({ 
            html: '&Delta;', 
            hex: 0x0394, 
            latex: ''
        }),
        'epsilon': new Simbolo({ 
            html: '&Epsilon;', 
            hex: 0x0395, 
            latex: ''
        }),
        'pi': new Simbolo({ 
            html: '&Pi;', 
            hex: 0x03a0, 
            latex: ''
        }),
    },

    lower: {
        'alpha':  new Simbolo({ 
            html: '&alpha;', 
            hex: 0x03b1, 
            latex: '\\alpha'
        }),
        'beta': new Simbolo({ 
            html: '&beta;', 
            hex: 0x03b2, 
            latex: '\\beta'
        }),
        'gamma': new Simbolo({ 
            html: '&gamma;', 
            hex: 0x03b3, 
            latex: '\\gamma'
        }),
        'delta': new Simbolo({ 
            html: '&delta;', 
            hex: 0x03b4, 
            latex: '\\delta'
        }),
        'epsilon': new Simbolo({ 
            html: '&epsilon;', 
            hex: 0x03b5, 
            latex: '\\epsilon'
        }),
        'pi': new Simbolo({ 
            html: '&pi;', 
            hex: 0x03c0, 
            latex: '\\pi'
        }),
    }
}