'use strict';

import  projects  from './../data/aboutUs.json';
import  courses  from '../assets/data/aboutUs.json';
import  { posts } from '../data/blogposts.json';
import  { articles }  from './../data/articles.json';

export default class LoadJson {
    constructor() {
        // chaching dom elements
        this._projectsContainer = document.querySelector('.projectsContainer');
        this._aboutUsContainer = document.querySelector('.aboutUsContainer');
        this._blogPostsContainer = document.querySelector('.blogPostsContainer');
        this._articlesContainer = document.querySelector('.articlesContainer');
        this._projectContainer = document.querySelector('.projectContainer');
        this._articleContainer = document.querySelector('.articleContainer');
        this._containerQuote = document.querySelector('.containerQuote');

        // shows all the liked/favorited projects when the profile page is visited
        if (document.title == 'Profile | Ururu | New Media Development | Artevelde University College Ghent') {
            this.favoriteProject();
            this.likeProject();
        }
    }

    loadProjectsJson() {
        let tempStr = '';
        // the projects
        projects.forEach(function (value, i) {
            if (projects[i].projectId % 2 === 0) {
                tempStr += `
        <div class="project ${projects[i].projectId} Left">
        <div>
          <div class="textHover">
          </div>
          <div>
          <img class="imgProject" src="assets/images/projects/${projects[i].imgProject[0]}">
          </div>
        </div>
        <div>
          <div class="nameStudent">
            ${projects[i].nameStudent}
          </div>
          <div class="nameProject">            
          <a href="detailpageproject.html"><h2>${projects[i].nameProject}</h2></a>
          </div>
        </div>
      </div>`;
            } else {
                tempStr += `
        <div class="project ${projects[i].projectId} Right">
          <div>
            <div class="textHover">
            </div>
            <div>
            <img class="imgProject" src="assets/images/projects/${projects[i].imgProject[0]}">
            </div>
          </div>
          <div>
            <div class="nameStudent">
              ${projects[i].nameStudent}
            </div>
            <div class="nameProject">            
            <a href="detailpageproject.html"><h2>${projects[i].nameProject}</h2></a>
            </div>
          </div>
        </div>`;
            }
            // console.log(value);
        });
        // console.log(tempStr);
        this._projectsContainer.innerHTML = tempStr;
    }

    loadAboutUsJson() {
        let tempStr = '';
        courses.forEach(function (value, i) {
            tempStr += `  
      <h2>${courses[i].courseTitle}</h2>
      <article>${courses[i].courseContent}</article>`;
            // console.log(value);
        });
        this._aboutUsContainer.innerHTML = tempStr;
    }

    loadNewsJson() {
        let tempStr = '';
        // the articles/news
        articles.forEach(function (value, i) {
            if (articles[i].articleId % 2 === 0) {
                tempStr += `
          <div class="articleDetailContainer">
            <img  class="imgArticle Left" src="assets/images/articles/${articles[i].articleImage}">
            <div class="textArticle Right">
              <p><a href="detailpagearticle.html">${articles[i].articleTitle}</a></p>
              <p class="articleThumb">${articles[i].articleThumbText}</p>
              <p>${articles[i].articleDate}</p>
            </div>
          </div>`;
                // console.log(articles[i].articleId);
            } else {
                tempStr += `
        <div class="articleDetailContainer">
          <div class="textArticle Left">
            <p><a href="detailpagearticle.html">${articles[i].articleTitle}</a></p>
            <p class="articleThumb">${articles[i].articleThumbText}</p>
            <p>${articles[i].articleDate}</p>
          </div>
          <img  class="imgArticle Right" src="assets/images/articles/${articles[i].articleImage}">
        </div>`;
            }
            // console.log(value);
        });
        this._articlesContainer.innerHTML = tempStr;
    }

    loadBlogJson() {
        let tempStr = '';
        posts.forEach(function (value, i) {
            tempStr += `
      <div class="blogPost">
        <div class="overlay"><img src="assets/images/${posts[i].postImg[0]}" alt="blurred photo about topic of the blogpost">
        </div>
        <div class="box above">
          <img src="assets/images/${posts[i].postImg[1]}" alt="Creater of the blogpost">
          <h3>${posts[i].postCreator}</h3>
          <p>${posts[i].postCreatorNature}</p>
        </div>
        <div class="box below">
          <h4>${posts[i].postTitle}</h4>
        </div>
      </div>`;
            // console.log(value);
        });
        this._blogPostsContainer.innerHTML = tempStr;
    }

    pageIndexJson() {
        let tempStrProjects = '';
        let tempStrArticles = '';
        let tempStrPosts = '';

        for (let i = 0; i < 4; i++) {
            if (projects[i].projectId % 2 === 0) {
                tempStrProjects += `
        <div class="project ${projects[i].projectId} Left">
          <div>
            <div class="textHover">
            </div>
            <div>
              <img class="imgProject" src="assets/images/projects/${projects[i].imgProject[0]}">
            </div>
          </div>
          <div>
            <div class="nameStudent">
              ${projects[i].nameStudent}
            </div>
            <div class="nameProject">            
              <a href="detailpageproject.html"><h2>${projects[i].nameProject}</h2></a>
            </div>
          </div>
        </div>`;
            } else {
                tempStrProjects += `
        <div class="project ${projects[i].projectId} Right">
          <div>
            <div class="textHover">
            </div>
            <div>
              <img class="imgProject" src="assets/images/projects/${projects[i].imgProject[0]}">
            </div>
          </div>
          <div>
            <div class="nameStudent">
              ${projects[i].nameStudent}
            </div>
            <div class="nameProject">            
              <a href="detailpageproject.html"><h2>${projects[i].nameProject}</h2></a>
            </div>
          </div>
        </div>`;
            }
        }
        // console.log(tempStrProjects);
        this._projectsContainer.innerHTML = tempStrProjects;

        for (let i = 0; i < 3; i++) {
            if (articles[i].articleId % 2 === 0) {
                tempStrArticles += `  
        <div class="articleDetailContainer">
          <img  class="imgArticle Left" src="assets/images/articles/${articles[i].articleImage}">
          <div class="textArticle Right">
            <p><a href="detailpagearticle.html">${articles[i].articleTitle}</a></p>
            <p class="articleThumb">${articles[i].articleThumbText}</p>
            <p>${articles[i].articleDate}</p>
          </div>
        </div>`;
                // console.log(articles[i].articleId);
            } else {
                tempStrArticles += `  
        <div class="articleDetailContainer">
          <div class="textArticle Left">
            <p><a href="detailpagearticle.html">${articles[i].articleTitle}</a></p>
            <p class="articleThumb">${articles[i].articleThumbText}</p>
            <p>${articles[i].articleDate}</p>
          </div>
          <img  class="imgArticle Right" src="assets/images/articles/${articles[i].articleImage}">
        </div>`;
            }
        }
        this._articlesContainer.innerHTML = tempStrArticles;

        for (let i = 0; i < 3; i++) {
            tempStrPosts += `
      <div class="blogPost">
        <div class="overlay"><img src="assets/images/${posts[i].postImg[0]}" alt="blurred photo about topic of the blogpost">
        </div>
        <div class="box above">
        <img src="assets/images/${posts[i].postImg[1]}" alt="Creater of the blogpost">
          <h3>${posts[i].postCreator}</h3>
          <p>${posts[i].postCreatorNature}</p>
        </div>
        <div class="box below">
          <h4>${posts[i].postTitle}</h4>
        </div>
      </div>`;
        }
        this._blogPostsContainer.innerHTML = tempStrPosts;
    }

    loadDetailProject() {
        let tempStr = '';
        let tempStrTitle = '';

        for (let i = 0; i < 1; i++) {
            tempStrTitle += `
      <h1> ${projects[i].nameProject}</h1>
      `;

            tempStr += `
      <div class="detailStudentContainer">
        <div class="detailStudentDetail">
        <h4>${projects[i].nameStudent}         <i class="fa fa-star left foot" aria-hidden="true"></i>  </h4>
          <h4>${projects[i].course}</h4>
          <h4>${projects[i].specialization}</h4>
          <h4>${projects[i].year}</h4>
        </div> 
        <div class="nameProjectDetail">           
          <h4>${projects[i].nameProject}</h4>
          <a class="favorite" ><i class="fa fa-heart left foot" aria-hidden="true"></i></a>
          <a class="like"><i class="fa fa-thumbs-up left foot" aria-hidden="true"></i></a>  
          <i class="fa fa-eye left foot" aria-hidden="true"></i>  
        </div>
      </div>
      <div class="socialContainerDetail">
        <div class="shareContainer">
          <h4>Share the awesomeness
          <a href="https://facebook.com"><i class="fa fa-facebook left foot" aria-hidden="true"></i></a>
          <a href="https://twitter.com"><i class="fa fa-twitter left foot" aria-hidden="true"></i></a>
          <a href="https://plus.google.com"><i class="fa fa-google left foot" aria-hidden="true"></i></a>  
          </h4>
        </div>
      </div>
      <div class="projectAssignmentDetail">
        <p>${projects[i].assignment}</p>
      </div>
      <div class="projectImages>`;

            for (let j = 0; j < projects[i].imgProject.length; j++) {
                tempStr += `<img class="imgProject" src="assets/images/projects/${projects[i].imgProject[j]}">`;
            }
            tempStr += `
      </div><br>`;
        }
        // console.log(tempStr);
        this._projectContainer.innerHTML = tempStr;
        this._containerQuote.innerHTML = tempStrTitle;
    }

    favoriteProject() {
        // favorite a project checks if the user is logged in
        if (JSON.parse(localStorage.getItem('loginStatus')) === true) {
            // if detailprojectpage is open and someone clicks on the heart, save that
            // project to the localstorage
            if (document.title == 'Project | Ururu | New Media Development | Artevelde University College Ghent') {
                localStorage.setItem('favoriteProject', JSON.stringify(this._projectContainer.innerHTML));
            }
            // if profile is open, show the pages that are currently favorited
            if (document.title == 'Profile | Ururu | New Media Development | Artevelde University College Ghent') {
                let _favoriteProjectsContainer = document.querySelector('.favoriteProjectsContainer');

                let _favoritedProjects = JSON.parse(localStorage.getItem('favoriteProject'));
                _favoriteProjectsContainer.innerHTML = _favoritedProjects;
            }

        } else {
            console.log("You should login before you try to favorite or like something.")
        }
    }

    likeProject() {
        // favorite a project checks if the user is logged in
        if (JSON.parse(localStorage.getItem('loginStatus')) === true) {
            // if detailprojectpage is open and someone clicks on the thumbs, save that
            // project to the localstorage
            if (document.title == 'Project | Ururu | New Media Development | Artevelde University College Ghent') {
                localStorage.setItem('likeProject', JSON.stringify(this._projectContainer.innerHTML));
            }
            // if profile is open, show the pages that are currently favorited
            if (document.title == 'Profile | Ururu | New Media Development | Artevelde University College Ghent') {
                let _likeProjectsContainer = document.querySelector('.likeProjectsContainer');
                console.log('nyooo')

                let _likedProjects = JSON.parse(localStorage.getItem('likeProject'));
                _likeProjectsContainer.innerHTML = _likedProjects;
            }

        } else {
            console.log("You should login before you try to favorite or like something.")
        }
    }

    loadDetailArticle() {
        let tempStr = '';
        let tempStrTitle = '';

        for (let i = 0; i < 1; i++) {
            if (articles[i].articleId % 2 === 0) {
                tempStr += `
        <div class="socialDateContainer">
          <div class="dateContainer">
            <h2>${articles[i].articleDate}</h2>
          </div>
          <div class="socialContainer">
            <ul>
            <li><i class="fa fa-facebook left foot" aria-hidden="true"></i></li> 
            <li><i class="fa fa-twitter left foot" aria-hidden="true"></i></li>  
            <li><i class="fa fa-google left foot" aria-hidden="true"></i></li>   
            </ul>
          </div>
        </div>
        <div class="articleImage">
          <img class="imgProject" src="assets/images/articles/${articles[i].articleImage[0]}">
        </div>
        <div class="articleContent">
          <article>${articles[i].articleContent}</article>
        </div>
        `;
                tempStrTitle += `
        <h1> ${articles[i].articleTitle} </h1>
        `;
                // console.log(articles[i].articleId);
            }
        }
        this._containerQuote.innerHTML = tempStrTitle;
        this._articleContainer.innerHTML = tempStr;
    }
}
