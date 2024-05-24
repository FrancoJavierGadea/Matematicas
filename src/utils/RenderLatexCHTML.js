// const {mathjax} = require('mathjax-full/js/mathjax.js');
// const {TeX} = require('mathjax-full/js/input/tex.js');
// const {CHTML} = require('mathjax-full/js/output/chtml.js');
// const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
// const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');
// const {AllPackages} = require('mathjax-full/js/input/tex/AllPackages.js');

import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {CHTML} from 'mathjax-full/js/output/chtml.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
import {JSDOM} from 'jsdom';
import {jsdomAdaptor} from 'mathjax-full/js/adaptors/jsdomAdaptor.js'

const OPTIONS = {
    chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
    }
};

const adaptor = jsdomAdaptor(JSDOM);
const handler = RegisterHTMLHandler(adaptor);

export async function renderLatexToCHTML(){

    const tex = new TeX({
        packages: AllPackages
    });
    const chtml = new CHTML({
        fontURL: OPTIONS.chtml.fontURL,
        adaptiveCSS: true
    });
    const renderer = mathjax.document('', {InputJax: tex, OutputJax: chtml});

    return {
        getHTML: (latex = '') => {

            const result = renderer.convert(latex, {
                display: true
            });
        
            const html = adaptor.outerHTML(result);
        
            return html;
        },
        getStyles: () => {
            
            const css = adaptor.textContent(chtml.styleSheet(renderer));

            return css;
        }
    }
}