'use strict';

export class Post {
  constructor (title, synopsis, body, createdDate = new Date().getTime()) {
    this.title = title;
    this.synopsis = synopsis;
    this.body = body;
    this.createdDate = createdDate;
  }
}

export class Person {
  constructor (firstName, surName, dayOfBirth = null) {
    this.firstName = firstName;
    this.surName = surName;
    this.dayOfBirth = dayOfBirth;
  }

  toString () {
    return `My name is ${this.firstName} ${this.surName}`;
  }

  test() {
    console.log('test');
  }
}

export class Project {
  costructor (projectId, nameProject, nameStudent) {
    this.projectId = projectId;
    this.nameProject = nameProject;
    this.nameStudent = nameStudent;
  }
  toString () {
    const pStr = super.toString();
    return `I'm a student ${this.nameStudent} and worked on ${this.nameProject} project!`;
  }
}

export class Student extends Person {
  constructor (studentNr, emailSchool, firstName, surName, dayOfBirth = null) {
    super(firstName, surName, dayOfBirth);

    this.studentNr = studentNr;
    this.emailSchool = emailSchool;
  }

  toString () {
    const pStr = super.toString();
    return `${pStr}. I'm a student with number ${this.studentNr} and email ${this.emailSchool}!`;
  }
}
