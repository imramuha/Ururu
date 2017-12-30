'use strict';

export class Register {
  constructor () {
    // buttons DOM
    this._username = document.querySelector('.inputRegisterUsername');
    this._password = document.querySelector('.inputRegisterPassword');
    this._registerBtn = document.querySelector('.registerButton');

    this._usernameLogin = document.querySelector('.inputLoginUsername');
    this._passwordLogin = document.querySelector('.inputLoginPassword');
    this._loginBtn = document.querySelector('.signInButton');
    this._logoutBtn = document.querySelector('.logoutBtn');

    // logged in
    this._profileBtn = document.getElementById('profile');
    this._welcomeUser = document.getElementById('welcomeUser');

    // eventlisteners
    // for registerBtn
    if (this._registerBtn) {
      this._registerBtn.addEventListener('click', evt => this.register(evt));
    }
    // for loginBtn
    if (this._loginBtn) {
      this._loginBtn.addEventListener('click', evt => this.login(evt));
    }
    // for logoutBtn
    if (this._logoutBtn) {
      this._logoutBtn.addEventListener('click', evt => this.logout(evt));
    }

    // checks if someone is logged in, based on the status the user gets more privileges.
    this.loggedIn();
  };

  // func to register a user
  register () {
    // gets the users that are currently saved in the localstorage
    this._oldUsers = JSON.parse(localStorage.getItem('users'));

    // a date, will be used to create a random id number
    let date = new Date();
    // creates new object made of user input
    let _user = [{
      // creates a random id number
      'id': date.getTime() + Math.round(Math.random() * date.getTime()),
      'user': this._username.value,
      'pass': this._password.value
    }];

    // pushes the new array to the old one -> the one we retrieved earlier from our local storage
    _user.push(...this._oldUsers);
    console.log(_user);

    // and save is in the local storage again
    localStorage.setItem('users', JSON.stringify(_user));
  }

  login () {
    let _loginOrNot = document.querySelector('.loginOrNot');
    let _allUsers = JSON.parse(localStorage.getItem('users'));
    let _usernameLogin = this._usernameLogin.value;
    let _passwordLogin = this._passwordLogin.value;

    // foreach login object, we check if our userinput matches any of the existing objects
    _allUsers.forEach(function (value, i) {
      if (_usernameLogin === value.user && _passwordLogin === value.pass) {
        // console.log('correct user');

        // create a key loginStatus with the value of true if the user has logged in
        let _loginStatus = true;
        localStorage.setItem('loginStatus', JSON.stringify(_loginStatus));

        // gets the name of the logged in user
        let _loggedInUser = value.user;
        localStorage.setItem('loggedInUser', JSON.stringify(_loggedInUser));

        // if someone already logged in loop this
      } else if (JSON.parse(localStorage.getItem('loginStatus')) == true) {
        // console.log('User is logged in.');

      } else {
        console.log(_loginOrNot);
        _loginOrNot.innerHTML = '<h2>Wrong username or password.<br> Please try again.</h2>';
        // create a key loginStatus with the value of true if the user has logged in
        let _loginStatus = false;
        localStorage.setItem('loginStatus', JSON.stringify(_loginStatus));
        console.log('wrong username or password');
      }
    });
  }

  loggedIn () {
    console.log('logged in function');
    if (JSON.parse(localStorage.getItem('loginStatus')) === true) {
      if (document.title == 'Profile') {
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        this._welcomeUser.innerHTML = 'Have a nice day ' + loggedInUser + '.';
        // console.log(this._welcomeUser);
      }

      // change its href attribute
      this._profileBtn.href = 'profile.html';
      // change from login to profile
      this._profileBtn.innerHTML = 'Profile';
      // console.log("You're logged in :).");
    }
  }

  logout () {
    if (JSON.parse(localStorage.getItem('loginStatus')) === true) {
      console.log('hioo');
      let _logout = false;
      localStorage.setItem('loginStatus', JSON.stringify(_logout));
    } else {
      console.log('hi');
    }
  }
}
