
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';

export async function parseMarkdown(md = ''){

    if(!md) return '';

    const file = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeMathjax, {
            chtml: {
                fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
            }
        })
        .use(rehypeStringify)
        .process(md);
  
    return file.value;
}

export async function parseLatex(latex = '', inline = false){

    if(!latex) return '';

    const text = inline ? `$${latex}$` : `$$\n${latex}\n$$`;

    const file = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeMathjax, {
            chtml: {
                fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
            }
        })
        .use(rehypeStringify)
        .process(text);
  
    return file.value;
}

