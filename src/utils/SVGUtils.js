
//Carga dinamicamente un SVG
export function loadSVG(path = ''){

    const svg = new URL(path, import.meta.url);

    return svg.href;
}


/* Carga un SVG dinamicante, le aplica los estilos
 * y retorna una URL con el SVG estilizado
 */
export async function loadAndStyleSVG(path = '', colors = {}){

    const svg = new URL(path, import.meta.url);

    const raw = await (await fetch(svg.href)).text();

    //Aplicar los estilos
    const style = Object.entries(colors).reduce((acc, [key, value]) => {

        acc += `.${key} {color: ${value};} `;

        return acc;
    }, '');

    const styledSvg = `${raw.replace('</svg>', '')} <style>${style}</style> </svg>`

    //Generar la url
    const url = `data:image/svg+xml,${encodeURIComponent(styledSvg)}`

    return {
        url,
        cssUrl: `url("${url}");`
    }
}