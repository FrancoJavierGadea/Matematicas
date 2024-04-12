

const SIZES = {
    '144p': {width: 256, height: 144},
    '270p': {width: 460, height: 270},
    '360p': {width: 640, height: 360},
    '480p': {width: 854, height: 480},
    '540p': {width: 960, height: 540},
    '576p': {width: 1024, height: 576},
    '720p': {width: 1280, height: 720},
}

export default new Proxy(SIZES, {

    get: (sizes, prop, value) => {

        if(sizes[prop]) return sizes[prop];
        
        const height = Number(prop.replace('p', ''));

        return {
            width: Math.floor(16 * (height / 9)),
            height,
        }
    }
})