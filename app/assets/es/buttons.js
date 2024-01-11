'use strict';

export default class Button {
    constructor() {
        // buttons DOM
        this._toggleMenu = document.getElementById('pullNav');
        this._navBar = document.querySelector('.menu');

        // about us buttons eventlistener added
        this
            ._toggleMenu
            .addEventListener('click', evt => this.toggleNav(evt));
        window.addEventListener('resize', evt => this.resizeNav(evt));
    };

    // toggle nav when the button is pressen, toggle off if pressed again.
    toggleNav() {
        if (this._navBar.style.display === 'none') {
            this._navBar.style.display = 'block';
        } else {
            this._navBar.style.display = 'none';
        }
    }

    // if window gets smaller than 768 -> hide our nav
    resizeNav() {
        if (window.innerWidth < 768) {
            this._navBar.style.display = 'none';
            // console.log('check~');
        } else if (window.innerWidth >= 768) {
            this._navBar.style.display = 'block';
        }
    }
}
