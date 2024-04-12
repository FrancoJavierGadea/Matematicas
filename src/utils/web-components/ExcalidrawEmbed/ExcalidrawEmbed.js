

export function getExcalidrawDefaultConfig(){

    return {
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
        maxHeight: document.documentElement.clientHeight,
        theme: document.documentElement.getAttribute('data-theme') ?? 'light'
    }
}

export class CustomExcalidrawIframe extends HTMLElement {

    static #attrMap = {
        'theme': 'theme',
        'width': 'width',
        'height': 'height',
        'max-height': 'maxHeight',
        'embed-url': 'embedURL'
    }

    constructor(){
        super();

        const defaultConfig = getExcalidrawDefaultConfig();

        this.width = Number(this.getAttribute('width') ?? defaultConfig.width);
        this.height = Number(this.getAttribute('height') ?? defaultConfig.height);
        this.maxHeight = Number(this.getAttribute('max-height') ?? defaultConfig.maxHeight);
        this.theme = this.getAttribute('theme') ?? defaultConfig.theme;
        this.embedURL = this.getAttribute('embed-url');
    }

    connectedCallback(){
        this.setAttribute('theme', this.theme);
        this.setAttribute('width', this.width);
        this.setAttribute('height', this.height);
        this.setAttribute('max-height', this.maxHeight);
        this.setAttribute('embed-url', this.embedURL);

        this.create();
    }

    static observedAttributes = ['width', 'height', 'max-height', 'theme', 'embed-url']

    attributeChangedCallback(name, oldValue, newValue){

        const key = CustomExcalidrawIframe.#attrMap[name];

        if(['width', 'height', 'max-height'].includes(key)){

            this[key] = Number(newValue);
            return;
        }

        this[key] = newValue;
    }


    //
    create(){

        //Iframe src
        const url = new URL(this.embedURL);

        url.searchParams.set('width', this.width);
        url.searchParams.set('height', this.height);
        url.searchParams.set('maxHeight', this.maxHeight);
        url.searchParams.set('theme', this.theme);

        //Iframe
        const iframe = document.createElement('iframe');

        iframe.src = url.href;
        iframe.width = `${this.width}`;
        iframe.height = `${this.maxHeight}`;

        iframe.addEventListener('load', (e) => {

            const iframe = e.target;

            const event = new CustomEvent('iframe-load', {
                cancelable: true,
                bubbles: true,
                detail: {iframe}
            });

            this.dispatchEvent(event);
        });

        this.appendChild(iframe);


        //Hide button
        const hideBtn = document.createElement('button');
        hideBtn.className = 'btn excalidraw-hide-btn';
        hideBtn.textContent = 'cerrar';
        hideBtn.addEventListener('click', () => {

            this.show = false;
        });

        this.appendChild(hideBtn);
    }

    #show = true;

    get show(){

        return this.#show;
    }

    set show(value){

        this.#show = value;

        if(this.#show){

            this.style.visibility = 'visible';
        }
        else {

            this.style.visibility = 'hidden';
        }

        const event = new CustomEvent('show-changed', {
            bubbles: true,
            cancelable: true,
            detail: {show: this.#show}
        });

        this.dispatchEvent(event);
    }
}

customElements.define('custom-excalidraw-iframe', CustomExcalidrawIframe);