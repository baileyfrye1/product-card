import '../css/style.css';
import '../scss/main.scss';
import desktopImage from '../assets/images/image-product-desktop.jpg';
import mobileImage from '../assets/images/image-product-mobile.jpg';

const img = document.querySelector('.card__img');

function imgDisplay() {
    if (window.innerWidth >= 640) {
        img.setAttribute('src', desktopImage);
    } else {
        img.setAttribute('src', mobileImage);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 640) {
            img.setAttribute('src', mobileImage);
        } else {
            img.setAttribute('src', desktopImage);
        }   
    })
}

imgDisplay();