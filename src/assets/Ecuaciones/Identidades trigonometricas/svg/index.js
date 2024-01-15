

export const FUNDAMENTAL = {

    svg: async () => (await import('./identidad-trigonometrica-fundamental-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./identidad-trigonometrica-fundamental-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./identidad-trigonometrica-fundamental-3.svg?raw')).default
        }
    ]
}

export const TANGENTE = {

    svg: async () => (await import('./tangente-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./tangente-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./tangente-3.svg?raw')).default
        }
    ]
}


export const SECANTE = {

    svg: async () => (await import('./secante-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./secante-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./secante-3.svg?raw')).default
        }
    ]
}


export const COSECANTE = {

    svg: async () => (await import('./cosecante-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./cosecante-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./cosecante-3.svg?raw')).default
        }
    ]
}

export const COTANGENTE = {

    svg: async () => (await import('./cotangente-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./cotangente-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./cotangente-3.svg?raw')).default
        }
    ]
}


export const PITAGORICAS = {

    svg: async () => (await import('./pitagorica-1.svg?raw')).default,

    variantes: [
        {
            svg: async () => (await import('./pitagorica-2.svg?raw')).default
        },
        {
            svg: async () => (await import('./pitagorica-3.svg?raw')).default
        }
    ]
}