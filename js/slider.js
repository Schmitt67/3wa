'use strict';

var index;
var figure;
var timer = null;
/// Image tab
var slides = [
    {
        src: 'img/desktop-home.jpg',
        title: 'MindGeek'
    },
    {
        src: 'img/desktop.png',
        title: 'Wolf Gang'
    },
    {
        src: 'img/desktop-product.jpg',
        title: 'Cup Of The'
    },
    {
        src: 'img/shield.png',
        title: 'Rpg3Wa'
    },

];
// Function
function showFigure() {
    figure.image.attr('src', '../' + slides[index].src);
    figure.caption.text(slides[index].title);
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonctions événementielles

function onNextSlide() {
    index++;

    if (index > slides.length - 1) {
        index = 0;
    }

    showFigure();
}

function onPreviousSlide() {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showFigure();
}

function onRandomSlide() {
    var random;

    do {
        random = getRandomInteger(0, slides.length - 1);
    } while (random == index);

    index = random;

    showFigure();
}

function onToggleSlide() {
    if (!timer) {
        timer = setInterval(onNextSlide, 2000);
    }
    else {
        clearInterval(timer);
        timer = null;
    }

    $('#slider-toggle i').toggleClass('fa-play').toggleClass('fa-pause');
}

function onToggleToolbar() {
    $('.toolbar ul').toggle('slow');

    $('#toolbar-toggle i').toggleClass('fa-arrow-right').toggleClass('fa-arrow-down');
}

$(function () {

    // Initialisation
    index = 0;
    figure = {
        image: $('#slider img'),
        caption: $('#slider figcaption')
    };

    // Chargement de la première image
    showFigure();

    // Evénements
    $('#toolbar-toggle').on('click', onToggleToolbar);
    $('#slider-next').on('click', onNextSlide);
    $('#slider-previous').on('click', onPreviousSlide);
    $('#slider-random').on('click', onRandomSlide);
    $('#slider-toggle').on('click', onToggleSlide);
});
