import View from './view.js';

class AppView extends View {
  _parent = document.querySelector('.app');
  _hash = 'dashboard';

  _generateMarkup(data) {
    this._parent.classList.remove('hidden');
    return `<div class="menu">
      <aside class="side__menu-main">
        <ul class="side__menu-main-list">
          <li class="side__menu-main-item ${
            window.location.hash === '#dashboard' ? 'current' : ''
          }">
            <a href="#dashboard" class="side__menu-main-link ">Dashboard</a
            ><i class="side__menu-icon fa-solid fa-table-columns"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#operations" class="side__menu-main-link">Operations</a
            ><i class=" side__menu-icon fa-solid fa-timeline"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#plans" class="side__menu-main-link">Plans</a
            ><i class="side__menu-icon fa-regular fa-calendar-days"></i>
          </li>
        </ul>
      </aside>

      <aside class="side__menu-second">
        <ul class="side__menu-second-list">
          <li class="side__menu-second-item">
            <a href="#login" class="side__menu-second-link">log Out</a
            ><i class="side__menu-icon fa-solid fa-arrow-right-from-bracket"></i>
          </li>
        </ul>
      </aside>
    </div>
    
    <div class="summary">
    <div class="balance">
      <div>
        <p class="balance__label">Total balance</p>
      </div>
      <p class="balance__value">${
        data.totalBalance || 0
      }<span class="currency"> RS</span></p>
    </div>


     <!-- Expenses -->
      <div class="overview">
     <div class="box expenses">
      <div class="expenses__logo">
         <i class="summary__icon fa-solid fa-arrow-left-long"></i>
        </div>
        <div class="expenses__detail">
          <p class="expenses__detail-title">Expenses</p>
          <p class="expenses__detail-value">${
            Math.abs(data.expenses) || 0
          } <span class="currency">RS</span></p>
        </div>
      </div>

    <!-- Incomings -->
    <div class="box income">
      <div class="income__logo">
        <i class="summary__icon fa-solid fa-arrow-right-long"></i>
        </div>
      <div class="income__detail">
      <p class="income__detail-title">Incomes</p>
      <p class="income__value">${
        data.incomes || 0
      } <span class="currency">RS</span></p>
    </div>
    </div>

    <!-- savings -->
    <div class="box saving">
      <div class="saving__logo">
        <i class="summary__icon fa-solid fa-piggy-bank"></i>
        </div>
      <div class="saving__detail">
      <p class="saving__detail-title">Savings</p>
      <p class="saving__value">${
        data.savings || 0
      } <span class="currency">RS</span></p>
    </div>
    </div>

    <!-- Credits -->
    <div class="box credit">
      <div class="credit__logo">
        <i class="summary__icon fa-solid fa-credit-card"></i>
        </div>
      <div class="credit__detail">
      <p class="credit__detail-title">Credits</p>
      <p class="credit__value">${
        data.credits || 0
      } <span class="currency">Rs</span></p>
    </div>
    </div>
 
  </div>
</div>


  <div class="operations__history">
    <div class="movements">
      <h2 class="operation__heading">Operations History</h2>
      <hr>
      <div class="movements__scrollable">
      ${this.#rowMarkup(data)}
      </div>
    </div>
  </div>`;
  }

  #rowMarkup(data) {
    if (data.movements.length > 0) {
      return data.movements
        .slice()
        .reverse()
        .map((mov, i) => {
          const type = mov.amount > 0 ? 'income' : 'expense';
          return `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
            i + 1
          } ${type} </div>
      <div class="movements__date">${mov.amountMsg}</div>
      <div class="movements__value">${Math.abs(mov.amount)} RS</div>
    </div>
  `;
        })
        .join('');
    } else {
      return `
   <div class="movements__row">
        <div class="movements__date">No Operations Yet!</div>
    </div>
  `;
    }
  }
}

export default new AppView();
