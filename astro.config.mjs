import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';
import rehypeExternalLinks from 'rehype-external-links';
import { optimizeSVGPlugin } from './optimize-svg.js';

// https://astro.build/config
export default defineConfig({

  integrations: [react()],
  devToolbar: {
    enabled: false
  },

  site: 'https://francojaviergadea.github.io/facultad-apuntes',
  base: 'facultad-apuntes',

  vite: {
    plugins: [optimizeSVGPlugin()]
  },

  
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeMathjax,
        { 
          chtml: {
            fontURL: "/facultad-apuntes/fonts/mathjax/chtml"
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