
import { baseURL } from './src/utils/baseURLUtil.js';
import {visit} from 'unist-util-visit';

/**
 * Process video tag <video> in markdown
 * @param {Object} options video attributes
 * @returns 
 */
export function mdVideoPlugin(options = {}){

    const attrs = Object.entries(options).map(([name, value]) => {

        if(value){

            if(typeof value === 'boolean' && value) return name;

            return `${name}="${value}"`;
        }

        return null;
    })
    .filter(attr => attr);
    
    return (tree, file) => {
        
        visit(tree, 'raw', function (node, index, parent) {
            
            if(node.value.match(/^<video.*/)){

                const rawHtml = node.value;
                const path = file.history.at(0).replaceAll('\\', '/');
                const folder = path.slice(path.lastIndexOf('content/'), path.lastIndexOf('/')).split('/').at(1);

                const src = rawHtml.match(/src="([^"]*)"/)?.at(1);
                const name = src.slice(src.lastIndexOf('/'));

                //Match video with the video in public folder
                const url = baseURL(`/videos/${folder + name}`);
                
                const video = {
                    type: 'raw',
                    value: `<video ${attrs.join(' ')}><source data-src="${url}" type="video/mp4">`
                }

                Object.assign(node, video);
            } 
        });
    }
}


