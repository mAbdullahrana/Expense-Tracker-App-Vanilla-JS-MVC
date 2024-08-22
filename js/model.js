export const state = {
  account: {
    owner: '',
    movements: [],
    message: [],
    pin: '',
    credits: [],
    plans: [],
  },
};

export const createNewAccount = function (userName, pin) {
  state.account.owner = userName;
  state.account.pin = pin;
  localStoreData();
};

export const loginUser = function (userName, pin) {
  return state.account.owner === userName && state.account.pin === pin
    ? true
    : false;
};

export const addOperation = function (amount, message, operation) {
  if (operation === 'income') {
    state.account.movements.push(amount);
    state.account.message.push(message);
    calcMoney();
    localStoreData();
  }
  if (operation === 'expense') {
    state.account.movements.push(-amount);
    state.account.message.push(message);
    calcMoney();
    localStoreData();
  }
};

export const addPlan = function (expenseName, amount, date) {
  state.account.plans.push({
    expenseMsg: expenseName,
    expenseAmount: amount,
    expenseDate: date,
    id: ids(),
  });
  localStoreData();
};

export const deletePlan = function (id) {
  state.account.plans.splice(
    state.account.plans.findIndex(el => el.id === id),
    1
  );

  localStoreData();
};

const userTotalBalance = function () {
  if (state.account.movements.length > 0) {
    state.account.totalBalance = state.account.movements.reduce(
      (acc, num) => acc + num,
      0
    );
  }
};

const userIncomes = function () {
  if (state.account.movements.length > 0) {
    state.account.incomes = state.account.movements
      .filter(num => num > 0)
      .reduce((acc, num) => acc + num);
  }
};

const userExpenses = function () {
  if (state.account.movements.length > 0) {
    state.account.expenses = state.account.movements
      .filter(num => num < 0)
      .reduce((acc, num) => acc + num, 0);
  }
};

const userSavings = function () {
  state.account.savings =
    state.account.incomes - Math.abs(state.account.expenses);
};

const localStoreData = function () {
  localStorage.setItem('userData', JSON.stringify(state.account));
};
const ids = function () {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

const calcMoney = function () {
  userTotalBalance();
  userIncomes();
  userExpenses();
  userSavings();
};

const init = function () {
  const userDataStorage = localStorage.getItem('userData');
  if (userDataStorage) state.account = JSON.parse(userDataStorage);
  calcMoney();
};

init();
