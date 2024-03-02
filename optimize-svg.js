
import { readFile } from 'node:fs/promises';
import { optimize, loadConfig } from 'svgo';

const svgo_config = await loadConfig();


export function optimizeSVGPlugin(){

    return {
        name: 'optimize-svg-plugin',

        enforce: 'pre',

        async load(id) {

            const isSVG = (path = '') => path.match(/\.svg\?raw$/);

            if(isSVG(id)){

                const [path, query] = id.split('?', 2);

                let rawSVG;

                try {

                    rawSVG = await readFile(path, 'utf-8');
                } 
                catch (ex) {
                    
                    return;
                }

                const result = optimize(rawSVG, {
                    path,
                    ...svgo_config
                });

                return `export default \`${result.data}\`;`;
            }
        }
    }
}


