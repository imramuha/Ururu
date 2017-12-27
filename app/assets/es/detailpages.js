'use strict'

import { projects } from '../../_hb/data/projects.json'
// import { courses } from '../../_hb/data/aboutus.json'
// import { posts } from '../../_hb/data/blogposts.json'
import { articles } from '../../_hb/data/articles.json'

export class DetailPages {
  constructor () {
    // chaching dom elements 
    this._projectContainer = document.querySelector('.projectContainer');
    // this._aboutUsContainer = document.querySelector('.aboutUsContainer');
    // this._blogPostsContainer = document.querySelector('.blogPostsContainer');
    this._articleContainer = document.querySelector('.articleContainer');
    this._containerQuote = document.querySelector('.containerQuote');

    if (document.title == "Project"){
      this.loadProject();
    } else if (document.title == "Article") {
      this.loadArticle();
      console.log("not yet");
    }
  }

  loadProject () {
    let tempStr = '';
    let tempStrTitle = '';

    for (var i = 0; i < 1; i++){
        tempStrTitle +=`
        <h1> ${projects[i].nameProject}</h1>
        `;

        tempStr +=`
        <div class="detailStudentContainer">
          <div class="detailStudentDetail">
          <h4>${projects[i].nameStudent}         <i class="fa fa-star left foot" aria-hidden="true"></i>  </h4>
            <h4>${projects[i].course}</h4>
            <h4>${projects[i].specialization}</h4>
            <h4>${projects[i].year}</h4>
          </div> 
          <div class="nameProjectDetail">           
            <h4>${projects[i].nameProject}</h4>
            <i class="fa fa-heart left foot" aria-hidden="true"></i> 
            <i class="fa fa-thumbs-up left foot" aria-hidden="true"></i>  
            <i class="fa fa-eye left foot" aria-hidden="true"></i>  
          </div>
        </div>
        <div class="socialContainerDetail">
          <div class="shareContainer">
            <h4>Share the awesomeness
            <i class="fa fa-facebook left foot" aria-hidden="true"></i> 
            <i class="fa fa-twitter left foot" aria-hidden="true"></i>
            <i class="fa fa-google left foot" aria-hidden="true"></i>  
            </h4>
          </div>
        </div>
        <div class="projectAssignmentDetail">
          <p>${projects[i].assignment}</p>
        </div>
        <div class="projectImages>`; 
        
        for (var j = 0; j < projects[i].imgProject.length; j++ ){
          tempStr += `<img class="imgProject" src="../assets/images/projects/${projects[i].imgProject[j]}">`;
        }
        tempStr += `
        </div><br>`; 
        } 
        console.log(tempStr);
        this._projectContainer.innerHTML = tempStr;  
        this._containerQuote.innerHTML = tempStrTitle;    
    }
  

    loadArticle () {
      let tempStr = '';
      let tempStrTitle = '';

      for (var i = 0; i < 1; i++) {
      if(articles[i].articleId % 2 == 0){
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
            <img class="imgProject" src="../assets/images/articles/${articles[i].articleImage[0]}">
          </div>
          <div class="articleContent">
            <article>${articles[i].articleContent}</article>
          </div>
            `;
        tempStrTitle += `
        <h1> ${articles[i].articleTitle} </h1>
        `;
        console.log(articles[i].articleId);
      }        
    }
    this._containerQuote.innerHTML = tempStrTitle; 
    this._articleContainer.innerHTML = tempStr;
  }
}