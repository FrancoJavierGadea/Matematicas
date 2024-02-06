
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
export function getFileSystemStruture(collection = []){

    const files = collection.reduce((acc, doc) => {

        const [path, ...subpath] = doc.id.split('/');
    
        const isFile = (name) => ['.md', '.mdoc', '.mdx'].some(ext => name.endsWith(ext));
    
        if(!acc[path]){
    
            acc[path] = isFile(path) ? 
                { name: path, url: `/${doc.collection}/${doc.slug}`, } 
                :
                { name: path, children: [] }
            ; 
        }
    
        if(!isFile(path)) {
    
            let aux = acc[path].children;
    
            for (const path of subpath) {
    
                if(isFile(path)) {
    
                    aux.push({ name: path, url: `/docs/${doc.slug}`, }); 
                }
                else {
    
                    const exist = aux.find(({name}) => {
    
                        return name === path;
                    });
    
                    if(exist){
    
                        aux = exist.children;
                    }
                    else {
    
                        const folder = { name: path, children: [], };
    
                        aux.push(folder);
    
                        aux = folder.children;
                    }
                }   
            }
        }
    
        return acc;
    }, {});

    return Object.values(files);
}


/*

    const A = 

let cont = 0;

const test = (element) => {

    if(!element.children){
        cont += 1
    }
    else {
        element.children.forEach(e => test(e));
    }
}

Object.values(A).forEach(e => test(e));
*/