'use strict'

import { projects } from '../../_hb/data/projects.json'
import { courses } from '../../_hb/data/aboutus.json'
import { posts } from '../../_hb/data/blogposts.json'
import { articles } from '../../_hb/data/articles.json'

export class PageIndex {
    constructor () {
        // chaching dom elements 
    this._projectsContainer = document.querySelector('.projectsContainer');
    this._aboutUsContainer = document.querySelector('.aboutUsContainer');
    this._blogPostsContainer = document.querySelector('.blogPostsContainer');
    this._articlesContainer = document.querySelector('.articlesContainer');

      if (document.title == "Home | New Media Development | Artevelde University College Ghent"){
          this.pageIndexJson();
      } 
    }

    pageIndexJson () {
      let tempStrProjects = '';
      let tempStrArticles = '';
      let tempStrPosts = '';

      for (var i = 0; i < 4; i++){
        if(projects[i].projectId % 2 == 0){
          tempStrProjects +=`
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
                <a href="detailPageProjects.html"><h2>${projects[i].nameProject}</h2></a>
                </div>
              </div>
            </div>`;
        } else {
          tempStrProjects +=`
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
                <a href="detailPageProjects.html"><h2>${projects[i].nameProject}</h2></a>
                </div>
              </div>
            </div>`;
          }
        }
        console.log(tempStrProjects);
        this._projectsContainer.innerHTML = tempStrProjects;

        for (var i = 0; i < 3; i++){ 
          if(articles[i].articleId % 2 == 0){
              tempStrArticles += `  
                <div class="articleDetailContainer">
                  <img  class="imgArticle Left" src="../assets/images/articles/${articles[i].articleImage}">
                  <div class="textArticle Right">
                    <p><a href="detailPageArticles.html">${articles[i].articleTitle}</a></p>
                    <p class="articleThumb">${articles[i].articleThumbText}</p>
                    <p>${articles[i].articleDate}</p>
                  </div>
                </div>`;
              console.log(articles[i].articleId);
          } else {
            tempStrArticles += `  
              <div class="articleDetailContainer">
                <div class="textArticle Left">
                  <p><a href="detailPageArticles.html">${articles[i].articleTitle}</a></p>
                  <p class="articleThumb">${articles[i].articleThumbText}</p>
                  <p>${articles[i].articleDate}</p>
                </div>
                <img  class="imgArticle Right" src="../assets/images/articles/${articles[i].articleImage}">
              </div>`;
          }          
        }
        this._articlesContainer.innerHTML = tempStrArticles;

        for (var i = 0; i < 3; i++)
        {
                tempStrPosts += `
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
        }
        this._blogPostsContainer.innerHTML = tempStrPosts;    
    }
}