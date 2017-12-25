'use strict'

import { projects } from '../../_hb/data/projects.json'

export class Projects {
    constructor () {
       /* // Retrieve the template data from the HTML 
        var projectss = projects;
        this._source = document.getElementById('patato').innerHTML;
        this._tempi =  document.querySelector('.projectsContainer');
        console.log(projects);

    
              // Compile the template data into a function
        var template = Handlebars.compile(this._source);
        console.log(template);
        console.log(projects);
        // Insert the HTML code into the page
        //this._tempi = template(projectss);
        this._tempi.innerHTML = template(projectss);
        console.log(this._tempi);
  
        Handlebars.registerHelper('raw-helper', function(options) {
            return options.fn();
        });

        var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };*/

        /*this._template = "<div>whatever {{ projects }}</div>";
        this._template = document.getElementById('projects');
        console.log(this._template);
        this._compiled = Handlebars.compile(this._template);
        console.log(this._compiled)

        /*var template = "<div>whatever {{ projects }}</div>";
        
        console.log(compiled);

        //var template = Handlebars.compile(projects);
        //var compiled = Handlebars.precompile(template);
        document.querySelector('.projectsContainer').innerHTML += this._template;

        function getFileNameOnly(filePath) {
            return filePath.split('/').pop().split('.').shift();
          }
          
          // ALL THE JSON!
          function loadJson() {
            const requireContext = require.context('json!./../../_hb/data', false, /\.json$/);
            const json = {};
            requireContext.keys().forEach((key) => {
              const obj = requireContext(key);
              const simpleKey = getFileNameOnly(key);
              json[simpleKey] = obj;
            });
            return json;
          }

          let myJson = loadJson();
          console.log(myJson['articles']);*/
    }
}
