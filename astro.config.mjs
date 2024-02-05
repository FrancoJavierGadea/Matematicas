import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import remarkMath from 'remark-math';
//import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax/chtml';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeMathjax,{ 
        chtml: {
          fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
        }
      }]
    ]
  }
});