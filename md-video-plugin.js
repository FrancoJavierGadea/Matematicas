
import { baseURL } from './src/utils/baseURLUtil.js';
import {visit} from 'unist-util-visit';

export function mdVideoPlugin(options){
    
    return (tree, file) => {

        console.log(import.meta.env);
        
        visit(tree, 'raw', function (node, index, parent) {
            
            if(node.value.match(/^<video.*/)){

                const rawHtml = node.value;
                const path = file.history.at(0).replaceAll('\\', '/');
                const folder = path.slice(path.lastIndexOf('content/'), path.lastIndexOf('/')).split('/').at(1);

                const src = rawHtml.match(/src="([^"]*)"/)?.at(1);
                const name = src.slice(src.lastIndexOf('/'));

                const url = baseURL(`/videos/${folder + name}`);
                
                const video = {
                    type: 'raw',
                    value: rawHtml.replace(/src="([^"]*)"/, `src="/${url}"`)
                }

                Object.assign(node, video);
            } 
        });
    }
}


