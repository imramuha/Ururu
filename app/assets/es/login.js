'use strict';

export class Register {
  constructor () {
    // buttons DOM
    this._username = document.querySelector('.inputRegisterUsername');
    this._password = document.querySelector('.inputRegisterPassword');
    this._registerBtn = document.querySelector('.registerButton');

    this._usernameLogin = document.querySelector('.inputLoginUsername');
    this._passwordLogin = document.querySelector('.inputLoginPassword');
    this._loginBtn = document.querySelector('.loginButton');

    this._loginStatus = false;

    if (this._loginBtn) {
      this._loginBtn.addEventListener('click', evt => this.login(evt));
    }
        //localStorage.setItem('users', JSON.stringify("Admin"));
        //console.log(this._oldUsers);
    
    // eventlistener added
    if (this._registerBtn) {
    this._registerBtn.addEventListener('click', evt => this.register(evt));
    }
  };

  // func to register a user
  register() {
 
    // gets the users that are currently saved in the localstorage
    this._oldUsers = JSON.parse(localStorage.getItem("users"));

    // creates new object made of user input
    let _user = [{"user": this._username.value, "pass": this._password.value}];
    
    // pushes the new array to the old one -> the one we retrieved earlier from our local storage
    _user.push(...this._oldUsers)
    console.log(_user);

    // and save is in the local storage again
    localStorage.setItem('users', JSON.stringify(_user));
    }

    login () {
        let _allUsers = JSON.parse(localStorage.getItem("users"));
        let _usernameLogin = this._usernameLogin.value;
        let _passwordLogin = this._passwordLogin.value;
        let _loginStatus = this._loginStatus;

        _allUsers.forEach(function (value, i){
            if (_usernameLogin === value.user && _passwordLogin === value.pass){
                console.log("correct user");
                _loginStatus = true;
                console.log('user: ', value.user, 'is logged in');
            } else {
                console.log("wrong username or password");
            }
        })
        console.log(this._loginStatus);
        console.log(_loginStatus);
    }
}