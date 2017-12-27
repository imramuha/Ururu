'use strict';
'use strict';

import { Person, Student, Project, Post } from './models';
import { Button } from './buttons';
import { Login, Register } from './login';
import { GridOverlayElement } from './grid';
import { Projects } from './projects';
import { PageIndex } from './pageIndex';
import { DetailPages } from './detailpages';

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
    let tempStr = '';

    // the projects
    if (document.title== "Projects") {
      projects.forEach(function (value, i) {
        if(projects[i].projectId % 2 == 0)
        {
          tempStr +=`
            <div class="project ${projects[i].projectId} Left">
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
              <div class="nameProject">            
                <h2>${projects[i].nameProject}</h2>
              </div>
            </div>
          </div>`;
        } else {
          tempStr +=`
          <div class="project ${projects[i].projectId} Right">
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
              <div class="nameProject">            
                <h2>${projects[i].nameProject}</h2>
              </div>
            </div>
          </div>`;
        }
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
        <div class="articleDetailContainer">
          <img  class="imgArticle Left" src="../assets/images/articles/${articles[i].articleImage}">
          <div class="textArticle Right">
            <p>${articles[i].articleTitle}</p>
            <p class="articleThumb">${articles[i].articleThumbText}</p>
            <p>${articles[i].articleDate}</p>
          </div>
        </div>`;
        console.log(articles[i].articleId);
      } else {
        tempStr += `  
        <div class="articleDetailContainer">
          <div class="textArticle Left">
            <p>${articles[i].articleTitle}</p>
            <p class="articleThumb">${articles[i].articleThumbText}</p>
            <p>${articles[i].articleDate}</p>
          </div>
          <img  class="imgArticle Right" src="../assets/images/articles/${articles[i].articleImage}">
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
          <div class="overlay"><img src="../assets/images/${posts[i].postImg[0]}" alt="blurred photo about topic of the blogpost"></div>
          <div class="box above">
          <img src="../assets/images/${posts[i].postImg[1]}" alt="Creater of the blogpost">
            <h3>${posts[i].postCreator}</h3>
            <p>${posts[i].postCreatorNature}</p>
          </div>
          <div class="box below">
            <h4>${posts[i].postTitle}</h4>
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

    let toggleButton = new Button();
    let userRegister = new Register();
    //let userLogin = new Login();
    let propro = new Projects();
    let indexPage = new PageIndex();
    let detailPage = new DetailPages();
  }
};











// ddd////////////////

window.addEventListener('load', (ev) => {
  const app = new App();
  app.init();
});
