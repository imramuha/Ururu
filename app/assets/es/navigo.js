'use strict';

import { LoadJson } from './loadjson';

import Navigo from 'navigo';

export class UseNavigo {
  constructor () {

    // using navigo
    this._root = 'localhost:8080/';
    this._useHash = true; // Defaults to: false
    this._hash = '#!'; // Defaults to: '#'
    this._router = new Navigo(this._root, this._useHash, this._hash);

    this.navigo();
    this.favProject();
  }

  favProject () {
    let loadJson = new LoadJson;
    this._getProject = document.querySelector('.favorite');
        if (this._getProject) {
        this._getProject.addEventListener('click', evt => loadJson.favoriteProject(evt));
    }
    this._getProject = document.querySelector('.like');
        if (this._getProject) {
        this._getProject.addEventListener('click', evt => loadJson.likeProject(evt));
    }
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

      'detailpagearticle.html': function () {

        // loading the detailpage for articles
        loadJson.loadDetailArticle();
        console.log('this is detailArticles page.');
      }
    }).resolve();
  }
}
