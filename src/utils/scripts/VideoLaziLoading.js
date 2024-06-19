
/**
 * @param {HTMLVideoElement} video
 * @param {String} attrName default: data-src
 */
export function videoLazyLoading(video, attrName = 'data-src'){

    const observer = new IntersectionObserver((e) => {

        const [entry] = e;

        if(entry.isIntersecting){

            const src = entry.target.querySelector(`source[${attrName}]`)?.getAttribute(attrName);

            //Add origin to relative URL
            entry.target.src = `${new URL(import.meta.url).origin}/${src}`;

            entry.target.load();

            observer.disconnect();
        }
    },
    {
        root: null, rootMargin: '0px', threshold: 0
    });

    observer.observe(video);
}

/**
 * 
 * @param {String} selector 
 * @param {String} attrName default: data-src
 */
export function makeVideosLazy(selector, attrName = 'data-src'){

    document.querySelectorAll(`${selector} video`).forEach(video => {

        console.log(video);
        videoLazyLoading(video, attrName);  
    });
}