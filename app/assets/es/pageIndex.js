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
        } else {
            console.log("not yet");
        }
    }

    pageIndexJson () {
        let tempStrProjects = '';
        let tempStrArticles = '';
        let tempStrPosts = '';

        for (var i = 0; i < 4; i++){
            if(projects[i].projectId % 2 == 0){
        tempStrProjects +=`
        <div class="project left ${projects[i].projectId}">
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
        } else {
            tempStrProjects +=`
        <div class="project right ${projects[i].projectId}">
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
        }
    }
    console.log(tempStrProjects);
        this._projectsContainer.innerHTML = tempStrProjects;

        for (var i = 0; i < 3; i++)
        {
 
                if(articles[i].articleId % 2 == 0){
                  tempStrArticles += `  
                  <div class="wrapper">
                    <img  class="imgLeft" src="../assets/images/articles/${articles[i].articleImage}">
                    <div class="textRight"><h4>${articles[i].articleTitle}>
                      <h4>${articles[i].articleThumbText}</h4>
                      <h4>${articles[i].articleDate}</h4>
                    </div>
                  </div>`;
                  console.log(articles[i].articleId);
                } else {
                  tempStrArticles += `  
                  <div class="wrapper">
                    <img  class="imgRight" src="../assets/images/articles/${articles[i].articleImage}">
                    <div class="textLeft"><h4>${articles[i].articleTitle}>
                      <h4>${articles[i].articleThumbText}</h4>
                      <h4>${articles[i].articleDate}</h4>
                    </div>
                  </div>`;        
                }          
        }
        this._articlesContainer.innerHTML = tempStrArticles;

        for (var i = 0; i < 3; i++)
        {
                tempStrPosts += `
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
        }
        this._blogPostsContainer.innerHTML = tempStrPosts;
        // the projects
     
         /* projects.forEach(function (value, i) {
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
          this._blogPostsContainer.innerHTML = tempStr;*/
        
    

    }
}