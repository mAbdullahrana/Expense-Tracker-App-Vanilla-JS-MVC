import * as model from './model.js';
import loginView from './view/loginView.js';
import signupView from './view/signupView.js';
import appView from './View/appView.js';

const controlUserSignUp = function (userName, pin) {
  model.createNewAccount(userName, pin);
};

const controlUserLogin = function (user, pin) {
  if (model.loginUser(user, pin)) {
    appView.render(model.state.account);
    loginView.render(model.state.account)
  }
};
const init = function () {
  signupView.render(model.state.account);
  signupView.addHandlerUserSignUp(controlUserSignUp);
  loginView.addHandlerUserLogin(controlUserLogin);
};

init();
