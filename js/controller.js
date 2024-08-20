import * as model from './model.js';
import loginView from './view/loginView.js';
import signupView from './view/signupView.js';
import AppView from './View/appView.js';
import OperationView from './View/operationView.js';
import operationView from './View/operationView.js';

const controlUserSignUp = function (userName, pin) {
  model.createNewAccount(userName, pin);
};

const controlUserLogin = function (user, pin) {
  if (model.loginUser(user, pin)) {
    loginView.render(model.state.account);
    AppView.render(model.state.account);
  }
};

const controlOperationsHashChange = function () {
  OperationView.render(model.state.account);
};
const controlDashboardHashChange = function () {
  AppView.render(model.state.account);
};

const controlAddIncomes = function (message, amount) {
 model.addOperation(amount,message,'income')
};
const controlAddExpense = function (message, amount) {
 model.addOperation(amount,message,'expense')
};

const init = async function () {
  signupView.render(model.state.account);
  signupView.addHandlerUserSignUp(controlUserSignUp);
  loginView.addHandlerUserLogin(controlUserLogin);
  AppView.addHandlerHashChange(controlDashboardHashChange);
  OperationView.addHandlerHashChange(controlOperationsHashChange);
  OperationView.addHandlerAddIncomes(controlAddIncomes);
  OperationView.addHandlerAddExpense(controlAddExpense);
};

init();

