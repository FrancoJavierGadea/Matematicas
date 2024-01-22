
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export async function parseMarkdown(md = ''){

    if(!md) return '';

    const file = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(md);
  
    return file.value;
}

export async function parseLatex(latex = ''){

    if(!latex) return '';

    const file = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex, {displayMode: false, output: 'html'})
        .use(rehypeStringify)
        .process(`$$${latex}$$`);
  
    return file.value;
}