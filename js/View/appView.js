import View from './view.js';


class AppView extends View {
  _parent = document.querySelector('.app');
  _signup = document.querySelector('.signup');


  render(data) {
    this._signup.innerHTML = '';
    const markup = this._generateMarkup(data);
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(data) {
   return`<div class="menu">
      <aside class="side__menu-main">
        <ul class="side__menu-main-list">
          <li class="side__menu-main-item">
            <a href="#dashboard" class="side__menu-main-link">Dashboard</a
            ><i class="side__menu-icon fa-solid fa-table-columns"></i></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#incomes" class="side__menu-main-link">Add Incomes</a
            ><i class="side__menu-icon fa-solid fa-arrow-right-long"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#outcomes" class="side__menu-main-link">Add Outcomes</a
            ><i class=" side__menu-icon fa-solid fa-arrow-left-long"></i></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#expenses" class="side__menu-main-link">Add New Expenses</a
            ><i class=" side__menu-icon fa-solid fa-arrow-left-long"></i></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#operations" class="side__menu-main-link">Operations</a
            ><i class=" side__menu-icon fa-solid fa-timeline"></i></i>
          </li>
        </ul>
      </aside>

      <aside class="side__menu-second">
        <ul class="side__menu-second-list">
          <li class="side__menu-second-item">
            <a href="#logout" class="side__menu-second-link">log Out</a
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
      <p class="balance__value">10000<span class="currency"> RS</span></p>
    </div>


     <!-- Expenses -->
      <div class="overview">
     <div class="box expenses">
      <div class="expenses__logo">
        <a href=""><i class="summary__icon fa-solid fa-arrow-left-long"></i></a>
        </div>
        <div class="expenses__detail">
          <p class="expenses__detail-title">Expenses</p>
          <p class="expenses__detail-value">5000 <span class="currency">RS</span></p>
        </div>
      </div>

    <!-- Incomings -->
    <div class="box income">
      <div class="income__logo">
        <a href=""><i class="summary__icon fa-solid fa-arrow-right-long"></i></a>
        </div>
      <div class="income__detail">
      <p class="income__detail-title">Incomes</p>
      <p class="income__value">1000 <span class="currency">RS</span></p>
    </div>
    </div>

    <!-- savings -->
    <div class="box saving">
      <div class="saving__logo">
        <a href=""><i class="summary__icon fa-solid fa-piggy-bank"></i></a>
        </div>
      <div class="saving__detail">
      <p class="saving__detail-title">Savings</p>
      <p class="saving__value">1000 <span class="currency">RS</span></p>
    </div>
    </div>

    <!-- Credits -->
    <div class="box credit">
      <div class="credit__logo">
        <a href=""><i class="summary__icon fa-solid fa-credit-card"></i></a>
        </div>
      <div class="credit__detail">
      <p class="credit__detail-title">Credits</p>
      <p class="credit__value">1000 <span class="currency">Rs</span></p>
    </div>
    </div>
 
  </div>
</div>


  <div class="operations__history">
    <div class="movements">
      <h2 class="operation__heading">Operations History</h2>
      <hr>
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__operation-reason">For buying balls</div>
        <div class="movements__value">4 000 <span class="currency">RS</span></div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__operation-reason">For buying nets</div>
        <div class="movements__value">-378 <span class="currency">RS</span></div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div class="movements__operation-reason">For buying nets</div>
        <div class="movements__value">-378 <span class="currency">RS</span></div>
      </div>
    </div>
  </div>`;
  }
}

export default new AppView();