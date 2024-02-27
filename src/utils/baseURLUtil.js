

export function baseURL(url = ''){

    if(import.meta.env.BASE_URL !== '/'){

        return `${import.meta.env.BASE_URL}/${url.replace(/^\//, '')}`;
    }
    else {

        return url;
    }
};


export const github = {

    fileBaseURL: (url) => {

        return `${import.meta.env.PUBLIC_GITHUB_REPOSITORY}/tree/main/src/content/${url.replace(/^\//, '')}`
    },

    rawBaseURL: (url) => {

        return `${import.meta.env.PUBLIC_GITHUB_RAW}/main/src/content/${url.replace(/^\//, '')}`;
    }
}
