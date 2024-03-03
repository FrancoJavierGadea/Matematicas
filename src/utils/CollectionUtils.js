import { getCollection } from "astro:content";


/*
 * Crea la estructura de carpetas y archivos a partir
 * de las path de cada archivo
 *
 * Por ejemplo:
 * 
 * 'folder-a/forder-b/file.md'
 * 
 * {name: 'folder-a', children: [
 * 
 *      {name: 'folder-b', children: [
 * 
 *          {
 *              name: 'file.md',
 *              url: '${collection_name}/folder-a/forder-b/file.md'
 *          }
 * 
 *      ]}
 * ]}
 * 
*/
export class CollectionFileStructure {

    constructor({ collection = [], deep = Infinity, onlyFolders = false } = {}){
        
        this.collection = collection;
        this.files = [];
        this.deep = deep;
        this.onlyFolders = onlyFolders;

        //Crea la estructura de carpetas y archivos a partir de las path de cada archivo
        collection.forEach((entry) => {
            
            const file = (() => {

                const fileName = entry.id.split('/').at(-1);
                const paths = entry.id.split('/').slice(0, -1);
                const slugNames = entry.slug.split('/');

                return {
                    paths,
                    slugNames, 
                    name: fileName,
                    deep: paths.length + 1
                };
            })();

            //Obtener y/o crear los folders
            const folder = file.paths.reduce((acc, folderName, index) => {

                if(this.deep <= index) return acc;

                let folder = acc.find(({name}) => {

                    return name === folderName;
                });

                //Crear el folder
                if(!folder){

                    const slug = file.slugNames.slice(0, index + 1).join('/');
                    const path = file.paths.slice(0, index + 1).join('/');

                    folder = {
                        type: 'folder',
                        name: folderName,
                        children: [],
                        deep: index + 1,
                        url: `/${entry.collection}/${slug}`,
                        slug,
                        path
                    };

                    acc.push(folder);
                }

                return folder.children;

            }, this.files);

            //Agregar los archivos
            if(!onlyFolders && file.deep <= this.deep){

                folder.push({
                    type: 'file', 
                    name: file.name, 
                    deep: file.deep,
                    url: `/${entry.collection}/${entry.slug}`,
                    path: `/${entry.collection}/${entry.id}`,
                    slug: entry.slug,
                    entry
                }); 
            } 
        }); 
    }

    find(file = ''){

        const paths = file.split('/');

        const parents = [];

        const result = paths.reduce((acc, key) => {

            if(!acc){

                return this.files.find(({name}) => name === key);
            }
            else {

                parents.push(acc);

                return acc.children.find(({name}) => name === key);
            }

        }, null);

        return {result, parents};
    }

    //Obtener todos los elementos en un array de una dimension
    getAll(){

        const result = new Set();

        const deep = (element) => {

            if(element.type === 'folder'){

                element.children.forEach(child => deep(child));
            }
            
            result.add(element);
        }

        this.files.forEach(child => deep(child));
        
        return Array.from(result);
    }


}


