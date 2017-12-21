 /*// create element
 this._projectsContainer = document.querySelector('.projectsContainer');

let tempStr = '';

// the projects
projects.forEach(function (value, i) {
  tempStr +=`
      <div class="loginContainer">
          <p>${projects[i].nameProject}</p>
          <p>${projects[i].nameStudent}</p>
          <img src="../assets/images/projects/${projects[i].imgProject[0]}"</p>
      </div>`;

  /*console.log(projects[i].projectId);
  console.log(projects[i].nameProject);
  console.log(projects[i].nameStudent);
  console.log(projects[i].nameStudent);
  console.log(projects[i].imgProject[0]);
  
  console.log(value);
})
this._projectsContainer.innerHTML = tempStr;*/