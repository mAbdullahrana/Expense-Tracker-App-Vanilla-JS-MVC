import * as model from './model.js';
import loginView from './view/loginView.js';
import signupView from './view/signupView.js';
import AppView from './View/appView.js';
import OperationView from './View/operationView.js';
import PlanView from './View/planView.js';
import LogOutView from './View/logoutView.js';

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
const controlPlanHashChange = function () {
  PlanView.render(model.state.account);
};

const controlAddIncomes = function (message, amount) {
  model.addOperation(amount, message, 'income');
};
const controlAddExpense = function (message, amount) {
  model.addOperation(amount, message, 'expense');
};
const controlAddPlan = function (expenseName, amount, date) {
  model.addPlan(expenseName, amount, date);
  PlanView.render(model.state.account);
};

const controlDeletePlan = function (id) {
  model.deletePlan(id);
  PlanView.render(model.state.account);
};

const controlLogOutHashChange = function () {
  LogOutView.render();
};
const init = function () {
  signupView.render(model.state.account);
  signupView.addHandlerUserSignUp(controlUserSignUp);
  loginView.addHandlerUserLogin(controlUserLogin);
  AppView.addHandlerHashChange(controlDashboardHashChange);
  OperationView.addHandlerHashChange(controlOperationsHashChange);
  OperationView.addHandlerAddIncomes(controlAddIncomes);
  OperationView.addHandlerAddExpense(controlAddExpense);
  PlanView.addHandlerHashChange(controlPlanHashChange);
  PlanView.addHandlerAddPlan(controlAddPlan);
  PlanView.addHandlerDeletePlan(controlDeletePlan);
  LogOutView.addHandlerHashChange(controlLogOutHashChange);
};

init();
