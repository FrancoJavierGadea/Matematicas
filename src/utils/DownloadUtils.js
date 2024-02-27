import templateHtml from "@assets/downloadHtmlTemplate.html?raw";
import markdownCss from "@css/github-markdown.css?url";
import customMarkdown from "@css/Custom-markdown.css?url";
import customMathjax from "@css/Custom-mathjax.css?url";



export async function downloadHTML(main, options = {}){

    const {title = 'documento', rootAttributes = {}} = options;

    const doc = document.implementation.createHTMLDocument();

    doc.documentElement.innerHTML = templateHtml;

    //Title
    doc.head.querySelector('title').textContent = title;

    //Root Attributes
    Object.entries(rootAttributes).forEach(([name, value]) => {

        doc.documentElement.setAttribute(name, value);
    });

    [markdownCss, customMarkdown, customMathjax].forEach(path => {

        const link = doc.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', new URL(path, import.meta.url).href);

        doc.head.appendChild(link);
    });


    //Content
    const content = main.cloneNode(true);

    doc.querySelector('main').appendChild(content);


    //Resolve images links
    doc.querySelectorAll('main img').forEach(img => {

        img.src = new URL(img.src, import.meta.url).href;
    });

    //Generate link
    const response = await fetch(`data:text/html;charset=UTF-8,${encodeURIComponent(doc.documentElement.outerHTML)}`)
    
    const blob = await response.blob();

    return URL.createObjectURL(blob);
}


export function downloadFileByURL(url, name) {

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = name;
  
    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);

    link.click();

    setTimeout(() => {

        URL.revokeObjectURL(link.href);
        
        link.parentNode.removeChild(link);

    }, 1000);
  }

