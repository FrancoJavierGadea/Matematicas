

export function CalculateRuffini(opt = {}){

    const { n = 3, coeficientes = [], r = 1 } = opt;

    const result = [
        coeficientes.at(0)
    ];

    for (let i = 0; i < n; i++) {
       
        const value = r * result[i] + (coeficientes[i + 1] || 0);

        result.push(value);
    }

    return {
        result,
        resto: result.at(-1).value,
        coeficientes: result.slice(0, -1)
    };
}