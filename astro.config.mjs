import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({

  integrations: [react()],

  base: 'dist',
  
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeMathjax,
        { 
          chtml: {
            fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
          }
        }
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank'
        }
      ]
    ]
  }
});