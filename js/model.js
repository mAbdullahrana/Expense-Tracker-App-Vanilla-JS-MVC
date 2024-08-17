export const state = {
  account: {
    owner: '',
    movements: [450, -200, 600, -1000, 700, 900],
    pin: '',
  },
};

export const createNewAccount = function (userName, pin) {
  state.account.owner = userName;
  state.account.pin = pin;
  localStoreData();
};

export const userTotalBalance = function () {
  state.account.totalBalance = state.account.movements.reduce(
    (acc, num) => acc + num,
    0
  );
};

export const userIncomes = function () {
  state.account.incomes = state.account.movements
    .filter(num => num > 0)
    .reduce((acc, num) => acc + num);
};
export const userExpenses = function () {
  state.account.expenses = state.account.movements
    .filter(num => num < 0)
    .reduce((acc, num) => acc + num);
};
export const loginUser = function (userName, pin) {
  return state.account.owner === userName && state.account.pin === pin
    ? true
    : false;
};

const localStoreData = function () {
  localStorage.setItem('userData', JSON.stringify(state.account));
};

const init = function () {
  const userDataStorage = localStorage.getItem('userData');
  if (userDataStorage) state.account = JSON.parse(userDataStorage);
  // userTotalBalance();
  // userIncomes();
  // userExpenses();
};

init();
