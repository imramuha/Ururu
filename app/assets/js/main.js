'use strict';

import  Button  from './buttons.js';
import  Register  from './login.js';
import  GridOverlayElement  from './grid.js';
import  UseNavigo  from './navigo.js';

class App {
    constructor() {
        console.log('Constructor of the class');
 

        customElements.define('grid-overlay', GridOverlayElement);


        this._gridOverlayElement = document.createElement('grid-overlay');
        document
            .body
            .appendChild(this._gridOverlayElement);

  
        // buttons DOM
        this._btnMMP = document.querySelector('.buttonMMP');
        this._btnGMB = document.querySelector('.buttonGMB');
        this._btnCMO = document.querySelector('.buttonCMO');

  
        // check if a "users" key exists, if not -> create an admin user.
        if (localStorage.getItem('users') === null) {
            let _adminUser = [
                {
                    'user': 'admin@imramuha.com',
                    'pass': 'admin123'
                }
            ];
            localStorage.setItem('users', JSON.stringify(_adminUser));
        }

        // init funx
        this.resizeWindow();
        this.initMap();

        // this.loadDataBlogPosts();
        window.addEventListener('resize', () => this.resizeWindow());

        // check if a "users" key exists, if not -> create an admin user.
        if (localStorage.getItem('users') === null) {
            let _adminUser = [
                {
                    'user': 'admin@imramuha.com',
                    'pass': 'admin123'
                }
            ];
            localStorage.setItem('users', JSON.stringify(_adminUser));
        }
    }

    resizeWindow() {
        this
            ._gridOverlayElement
            .updateRendering(window.innerWidth, Math.max(window.innerHeight, document.body.offsetHeight, document.documentElement.clientHeight), 24);
    }

    // voor google maps
    initMap() {
        if (document.title === 'Contact | Ururu | New Media Development | Artevelde University College Ghent') {
            let uluru = {
                lat: 51.0673017,
                lng: 3.7004048
            };
            let map = new google
                .maps
                .Map(document.querySelector('.map'), {
                    zoom: 16,
                    center: uluru
                });
            let marker = new google
                .maps
                .Marker({position: uluru, map: map});
        }
    }

    init() {
        console.log('Initialization of the class App');

        let useNavigo = new UseNavigo();
        // instances of our classes
        let toggleButton = new Button();
        // make sure the nav stays none if the screen is < 768 unless the pullnav is
        // pressed.
        toggleButton.resizeNav();
        let userRegister = new Register();
        userRegister.loggedIn();
    }
};

//
window.addEventListener('load', (ev) => {
    const app = new App();
    app.init();
});
