import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';
import rehypeExternalLinks from 'rehype-external-links';
import { optimizeSVGPlugin } from './optimize-svg.js';
import { mdVideoPlugin } from './md-video-plugin.js';
import { BASE_URL, SITE } from './src/config/globals.js';

// https://astro.build/config
export default defineConfig({

  integrations: [react()],
  devToolbar: {
    enabled: false
  },

  site: SITE,
  base:  BASE_URL,

  vite: {
    plugins: [optimizeSVGPlugin()],
  },

  
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeMathjax,
        { 
          chtml: {
            fontURL: `/${BASE_URL}/fonts/mathjax/chtml`
          }
        }
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank'
        }
      ], 
      [
        mdVideoPlugin, 
        {base: 'majo'}
      ]
    ]
  }
});