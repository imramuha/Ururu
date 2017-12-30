'use strict'

import { LoadJson } from './loadjson';

import navigo from 'navigo';

export class UseNavigo {
  constructor () {

    // dom elements
    this._projectsContainer = document.querySelector('.projectsContainer');
    this._aboutUsContainer = document.querySelector('.aboutUsContainer');
    this._blogPostsContainer = document.querySelector('.blogPostsContainer');
    this._articlesContainer = document.querySelector('.articlesContainer');

    // using navigo
    this._root = 'localhost:8080/';
    this._useHash = true; // Defaults to: false
    this._hash = '#!'; // Defaults to: '#'
    this._router = new navigo(this._root, this._useHash, this._hash);
    console.log(this._router);

    
    //console.log(this.navigot());
    //let meh = this.pageIndexJson(); 
    this.navigo();

  }  
  
  navigo () {
    let loadJson = new LoadJson();


    this._router.on({
      'localhost:8080/': function () {
        loadJson.pageIndexJson();
      },
      'index.html': function () {
        loadJson.pageIndexJson();
      },
      'projects.html': function () {
        
        // loading the projects
        loadJson.loadProjectsJson();
        console.log('this is the projects page');
      },
      'aboutus.html': function () {

        // loading the aboutus
        loadJson.loadAboutUsJson();
        console.log('this is aboutus page.');
      }, 
      'news.html': function () {

        // loading the articles
        loadJson.loadNewsJson();
        console.log('this is news page.');
      },
      'blog.html': function () {

        // loading the blog
        loadJson.loadBlogJson();
        console.log('this is blog page.');
      },
      'detailpageproject.html': function () {

        // loading the detailpage for projects
        loadJson.loadDetailProject();
        console.log('this detailpageProjects page.');
      }, 
      'detailpagearticles.html': function () {

        console.log('hi');
        // loading the detailpage for articles
        loadJson.loadDetailArticle();
        console.log('this is detailArticles page.');
      },  
    }).resolve(); 
  }
}
