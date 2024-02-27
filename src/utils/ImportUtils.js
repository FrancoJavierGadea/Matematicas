import { baseURL } from "./baseURLUtil";


export class MultipleFilesLoader {

    constructor(opt = {}){

        const {path = '.', logs = false, rawFiles, urlFiles} = opt;

        this.path = path;
        this.logs = logs;
        this.rawFiles = rawFiles;
        this.urlFiles = urlFiles;
    }

    async load(filename, mode = ''){

        if(import.meta.env.SSR){

            const path = `${this.path}/${filename}`;

            if(this.logs) console.log(`SSR import: ${path}`);//<- logs

            if(mode === 'raw'){

                const fn = this.rawFiles[path];

                const result = await fn();

                return result.default
            }
            
            if(mode === 'url'){

                const fn = this.urlFiles[path];

                const result = await fn();

                return baseURL(result.default);
            }

            return 'not mode support';
        }
        else {

            //In Client
            if(mode === 'url') {
                
                const path = baseURL(`${this.path}/${filename}`);

                if(this.logs) console.log(`Client import: ${path}`);//<- logs

                return new URL(path, import.meta.url).href;
            };
        }
    }

    getPath(filename){

        if(!filename) return baseURL(this.path);

        return baseURL(`${this.path}/${filename}`);
    }
}

