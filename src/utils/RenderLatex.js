
import mathjax from "mathjax";

export async function renderLatexToSVG(){

    const MathJax = await mathjax.init({
        loader: {
            load: ['input/tex', 'output/svg']
        }
    });

    return (latex = '') => {

        const result = MathJax.tex2svg(latex, {display: true});
    
        const svg = MathJax.startup.adaptor.outerHTML(result);
    
        return svg;
    }
}

