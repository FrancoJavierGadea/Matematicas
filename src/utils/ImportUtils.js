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

    async loadAll(mode = ''){

        if(import.meta.env.SSR){

            if(mode === 'raw'){

                const result = await Object.entries(this.rawFiles).reduce(async (accp, [file, fn]) => {

                    const acc = await accp;

                    const [name, ext] = file.split('/').at(-1).split('.');

                    const svg = (await fn()).default;

                    acc[name] = { name, svg }

                    return acc;

                }, Promise.resolve({}));

                return result;
            }
            
            if(mode === 'url'){

                const result = await Object.entries(this.urlFiles).reduce(async (accp, [file, fn]) => {

                    const acc = await accp;

                    const [name, ext] = file.split('/').at(-1).split('.');

                    const url = (await fn()).default;

                    acc[name] = { name, url: baseURL(url) }

                    return acc;

                }, Promise.resolve({}));

                return result;
            }
        }
        else {


        }
    }
}

