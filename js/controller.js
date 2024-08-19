import * as model from './model.js';
import loginView from './view/loginView.js';
import signupView from './view/signupView.js';
import AppView from './View/appView.js';
import OperationView from './View/operationView.js';

const controlUserSignUp = function (userName, pin) {
  model.createNewAccount(userName, pin);
};

const controlUserLogin = function (user, pin) {
  if (model.loginUser(user, pin)) {
    loginView.render(model.state.account);
    AppView.render(model.state.account);
  }
};

const controlOperationsHashChange = function(){
  OperationView.render(model.state.account)
}
const controlDashboardHashChange = function(){
  AppView.render(model.state.account)
}
const init = function () {
  signupView.render(model.state.account);
  signupView.addHandlerUserSignUp(controlUserSignUp);
  loginView.addHandlerUserLogin(controlUserLogin);
  OperationView.addHandlerHashChange(controlOperationsHashChange);
  AppView.addHandlerHashChange(controlDashboardHashChange);
};

init();
