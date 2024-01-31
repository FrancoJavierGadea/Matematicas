

export function conditionalClassNames(classNames = {}){

    return Object.entries(classNames).reduce((acc, [className, condition]) => {

        if(condition){

            acc += ` ${className}`;
        }

        return acc;

    }, '');
}