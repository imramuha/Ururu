'use strict';
'use strict';

import { Person, Student, Project, Post } from './models';
import { Button } from './buttons';
import { GridOverlayElement } from './grid';

// using requirejs
//const projectsi = require('../data/projects.json');
// importing all json files
import { projects } from '../data/projects.json'
import { courses } from '../data/aboutUs.json'
import { posts } from '../data/blogposts.json'
import { articles } from '../data/articles.json'

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

    // init funx
    this.resizeWindow();
    this.loadData();


    //this.loadDataBlogPosts();
    window.addEventListener('resize', () => this.resizeWindow());
    // instantie van een functie uit een andere jv document -> wel nog te importeren
    let post = new Person();
    post.test();

    let toggleButton = new Button();
  }

  togglePav  () {
    console.log('pavnacv');
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

  loadData () {
    let tempStr = '';

    // the projects
    if (document.title== "Projects") {
      projects.forEach(function (value, i) {
        if(projects[i].projectId % 2 == 0)
        {
          console.log(projects[i].projectId);
        }
        tempStr +=`
        <div class="project ${projects[i].projectId}">
          <div>
            <div class="textHover">
            </div>
            <div>
            <img class="imgProject" src="../assets/images/projects/${projects[i].imgProject[0]}">
            </div>
          </div>
          <div>
            <div class="nameStudent">
              ${projects[i].nameStudent}
            </div>
            <div>            
              <h2>${projects[i].nameProject}</h2>
            </div>
          </div>
        </div>`;
        console.log(value);
      })
      console.log(tempStr);
    this._projectsContainer.innerHTML = tempStr;


    // about us
    } else if (document.title == "About us"){
      courses.forEach(function (value, i) {
        tempStr += `  
          <h2>${courses[i].courseTitle}</h2>
          <article>${courses[i].courseContent}</article>`;
        console.log(value);
    })
   
      this._aboutUsContainer.innerHTML = tempStr;
    

     // the articles/news
  } else if (document.title == "News"){
    articles.forEach(function (value, i) {
      if(articles[i].articleId % 2 == 0)
      {
        tempStr += `  
        <div class="wrapper">
          <img  class="imgLeft" src="../assets/images/articles/${articles[i].articleImage}">
          <div class="textRight"><h4>${articles[i].articleTitle}>
            <h4>${articles[i].articleThumbText}</h4>
            <h4>${articles[i].articleDate}</h4>
          </div>
        </div>`;
        console.log(articles[i].articleId);
      } else {
        tempStr += `  
        <div class="wrapper">
          <img  class="imgRight" src="../assets/images/articles/${articles[i].articleImage}">
          <div class="textLeft"><h4>${articles[i].articleTitle}>
            <h4>${articles[i].articleThumbText}</h4>
            <h4>${articles[i].articleDate}</h4>
          </div>
        </div>`;        
      }
      console.log(value);
    })
    this._articlesContainer.innerHTML = tempStr;


    // the courses

      // the blog
    } else if (document.title == "Blog") {
      posts.forEach(function (value, i) {
        tempStr += `
          <div class="blogPost">
          <div class="overlay" style='background: url("../assets/images/${posts[i].postImg[0]}") no-repeat fixed center'></div>
          <div class="box above">
          <img src="../assets/images/${posts[i].postImg[1]}" alt="Creater of the blogpost">
            <h4>${posts[i].postCreator}</h4>
            <p>${posts[i].postCreatorNature}</p>
          </div>
          <div class="box below">
            <p>${posts[i].postTitle}</p>
          </div>
        </div>`;
        console.log(value);
      })
      this._blogPostsContainer.innerHTML = tempStr;
  }
}



  init () {

    console.log('Initialization of the class App');

    const ps1 = new Person('Philippe', 'De Pauw - Waterschoot');
    console.log(ps1.toString());

    const st1 = new Student('362453', 'philippe.depauw@arteveldehs.be', 'Philippe', 'De Pauw - Waterschoot');
    console.log(st1.toString());
  }
};











// ddd////////////////

window.addEventListener('load', (ev) => {
  const app = new App();
  app.init();
});
