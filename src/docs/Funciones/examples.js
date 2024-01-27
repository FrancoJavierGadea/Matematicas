




export async function getExamples(){
    
    const files = await import.meta.glob('./**/*.example.md');

    const EXAMPLES = Object.entries(files).reduce(async (promiseAcc, [path, file]) => {
    
        const acc = await promiseAcc;
    
        const fullname = path.split('/').at(-1);
    
        const name = fullname.split('.').at(0);
    
        acc[name] = await file();
    
        return acc;

    }, Promise.resolve({}));

    return EXAMPLES;
}


