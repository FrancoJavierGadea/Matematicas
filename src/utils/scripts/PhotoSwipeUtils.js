import PhotoSwipeLightbox from 'photoswipe/lightbox';

export function initPhotoSwipe(gallery){

    if(!gallery) throw new Error('Not gallery found')

    const images = document.querySelectorAll(`${gallery} img`)

    if(images.length > 0) {

        //Parse Images to PhotoSwipe Lightbox structure
        images.forEach(img => {
    
            const anchor = document.createElement('a');
    
            anchor.setAttribute('data-pswp-src', img.src);
            anchor.setAttribute('data-pswp-width', img.naturalWidth);
            anchor.setAttribute('data-pswp-height', img.naturalHeight);
            anchor.classList.add('image-link-wrapper')
    
            img.parentElement.appendChild(anchor);
            anchor.appendChild(img);
        });
        
        const lightbox = new PhotoSwipeLightbox({

            gallery,

            children: '.image-link-wrapper',

            pswpModule: () => import('photoswipe'),
        });
    
        lightbox.init();
    }
}