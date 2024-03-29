'use strict';

import LoadJson from './loadjson.js';
import Navigo from 'navigo';

export default class UseNavigo {
    constructor() {
        // using navigo
        //this._root = 'http://localhost:8080/';
        //this._useHash = true; // Defaults to: false
        //this._hash = '#!'; // Defaults to: '#'
        this._router = new Navigo("/Ururu/app/");

        // for locally
        // this._router = new Navigo("/");

        this.navigo();
        this.favProject();
    }

    favProject() {
        let loadJson = new LoadJson;
        this._getProject = document.querySelector('.favorite');
        if (this._getProject) {
            this
                ._getProject
                .addEventListener('click', evt => loadJson.favoriteProject(evt));
        }
        this._getProject = document.querySelector('.like');
        if (this._getProject) {
            this
                ._getProject
                .addEventListener('click', evt => loadJson.likeProject(evt));
        }
    }

    navigo() {
        let loadJson = new LoadJson();
    
        this._router
            .on({
                '/': function () {
                    console.log('Matching route: /');
                    loadJson.pageIndexJson();
                },
                'index.html': function () {
                    console.log('Matching route: /index.html');
                    loadJson.pageIndexJson();
                },
                'projects.html': function () {
                    console.log('Matching route: projects.html');
                    // loading the projects
                    loadJson.loadProjectsJson();
                    console.log('this is the projects page');
                },
    
                'aboutus.html': function () {
                    console.log('Matching route: aboutus.html');
                    // loading the aboutus
                    loadJson.loadAboutUsJson();
                    console.log('this is aboutus page.');
                },
    
                'news.html': function () {
                    console.log('Matching route: news.html');
                    // loading the articles
                    loadJson.loadNewsJson();
                    console.log('this is news page.');
                },
    
                'blog.html': function () {
                    console.log('Matching route: blog.html');
                    // loading the blog
                    loadJson.loadBlogJson();
                    console.log('this is blog page.');
                },
    
                'detailpageproject.html': function () {
                    console.log('Matching route: detailpageproject.html');
                    // loading the detailpage for projects
                    loadJson.loadDetailProject();
                    console.log('this detailpageProjects page.');
                },
    
                'detailpagearticle.html': function () {
                    console.log('Matching route: detailpagearticle.html');
                    // loading the detailpage for articles
                    loadJson.loadDetailArticle();
                    console.log('this is detailArticles page.');
                }
            })
            .resolve();
    }
    
    
}
