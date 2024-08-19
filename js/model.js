export const state = {
  account: {
    owner: '',
    movements: [],
    message:[],
    pin: '',
    credits: [],
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
      .reduce((acc, num) => acc + num);
  }
};

const userSavings = function () {
  state.account.savings =
    state.account.incomes - Math.abs(state.account.expenses);
};

const localStoreData = function () {
  localStorage.setItem('userData', JSON.stringify(state.account));
};

const init = function () {
  const userDataStorage = localStorage.getItem('userData');
  if (userDataStorage) state.account = JSON.parse(userDataStorage);
  userTotalBalance();
  userIncomes();
  userExpenses();
  userSavings();
};

init();
