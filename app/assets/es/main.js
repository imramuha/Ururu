'use strict';

import { Person, Student, Project, Post } from './models';
import { Button } from './buttons';
import { Login, Register, log } from './login';
import { GridOverlayElement } from './grid';
import { PageIndex } from './pageIndex';
import { DetailPages } from './detailpages';
import { UseNavigo } from './navigo';

// importing all json files
import { projects } from '../../_hb/data/projects.json'
import { courses } from '../../_hb/data/aboutus.json'
import { posts } from '../../_hb/data/blogposts.json'
import { articles } from '../../_hb/data/articles.json'

class App {
  constructor () {
    console.log('Constructor of the class');

    document.registerElement('grid-overlay', GridOverlayElement);

    this._gridOverlayElement = document.createElement('grid-overlay');
    document.body.appendChild(this._gridOverlayElement);

    // chaching dom elements 
    this._projectsContainer = document.querySelector('.projectsContainer');
    this._aboutUsContainer = document.querySelector('.aboutUsContainer');
    this._blogPostsContainer = document.querySelector('.blogPostsContainer');
    this._articlesContainer = document.querySelector('.articlesContainer');

    // buttons DOM
    this._btnMMP = document.querySelector('.buttonMMP');
    this._btnGMB = document.querySelector('.buttonGMB');
    this._btnCMO = document.querySelector('.buttonCMO');

    // check if a "users" key exists, if not -> create an admin user. 
    if (localStorage.getItem("users") === null) {
      let _adminUser =  [{"user": "Ururu", "pass": "--fixplease"}];
      localStorage.setItem('users', JSON.stringify(_adminUser));
    }

    // init funx
    this.resizeWindow();
    this.loadData();
    this.initMap();
    

    //this.loadDataBlogPosts();
    window.addEventListener('resize', () => this.resizeWindow());

     // check if a "users" key exists, if not -> create an admin user. 
    if (localStorage.getItem("users") === null) {
      let _adminUser =  [{"user": "Ururu", "pass": "--fixplease"}];
      localStorage.setItem('users', JSON.stringify(_adminUser));
    }
    
    // instantie van een functie uit een andere jv document -> wel nog te importeren
    let post = new Person();
    post.test();
    
  }
  
  /*toggleMenu() {   
    if(this._toggle.style.display == "block") { // if is menuBox displayed, hide it
      this._toggle.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      this._toggle.style.display = "block";
    }
  }*/
  /*myFunction() {
    var x = document.querySelector(".menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }*/

  resizeWindow () {
    this._gridOverlayElement.updateRendering(window.innerWidth, Math.max(
      window.innerHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight
    ), 24);
  }

  // voor google maps
  initMap() {
    if (document.title == "Contact"){
      let uluru = {lat: 51.0673017, lng: 3.7004048};
      let map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 16,
        center: uluru
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }

  // loading jsong data for projects/news and abous us pages
  loadData () {
    

 
}





  init () {

    console.log('Initialization of the class App');

    // instances of our classes
    let toggleButton = new Button();
    let userRegister = new Register();
    userRegister.loggedIn();
    //let detailPage = new DetailPages();
    let useNavigo = new UseNavigo();

  }
};











// ddd////////////////

window.addEventListener('load', (ev) => {
  const app = new App();
  app.init();
});
