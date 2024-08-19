import View from './view.js';

class OperationView extends View {
  _parent = document.querySelector('.app');
  _hash = 'operations';


  addHandlerAddIncomes(handler) {
    this._parent.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.add__income-Form').querySelector('.add__income-submit-btn');
      if (!btn) return;

      // Get input values
      const message = document.querySelector('#message').value;
      const amount = +document.querySelector('#amount').value;
      handler(message, amount);

      // Validate amount
      if (amount <= 0) {
        alert('Please enter a positive amount.');
        return;
      }
      document.querySelector('.add__income-Form').reset();
    });
  }

  _generateMarkup() {
    return `<div class="menu">
      <aside class="side__menu-main">
        <ul class="side__menu-main-list">
          <li class="side__menu-main-item">
            <a href="#dashboard" class="side__menu-main-link ">Dashboard</a
            ><i class="side__menu-icon fa-solid fa-table-columns"></i>
          </li>
          <li class="side__menu-main-item current">
            <a href="#operations" class="side__menu-main-link">Operations</a
            ><i class=" side__menu-icon fa-solid fa-timeline"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#plans" class="side__menu-main-link">Plans</a
            ><i class="side__menu-icon fa-regular fa-calendar-days"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#history" class="side__menu-main-link">History</a
            ><i class=" side__menu-icon fa-solid fa-clock-rotate-left"></i>
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
     
      <div class="add__income ">
        <div class="add__income-content">
          <div class="add__income-content-title">
            <h2 class="add__income-content-heading">Add Your Income</h2>
          </div>
          <form class="add__income-Form">
            <input
              class="add__income-input--message"
              type="text"
              id="message"
              name="message"
              placeholder="Income Message"
              required
            />
            <input
              class="add__income-input--amount"
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              required
            />
           <button type="submit" class="add__income-submit-btn primary-btn">
              Add Income
            </button>
          </form>
        </div>
      </div>

      <div class="add__expense">
        <div class="add__expense-content">
          <div class="add__expense-content-title">
            <h2 class="add__expense-content-heading">Add Your Expense</h2>
          </div>
          <form class="add__expense-Form">
            <input
              class="add__expense-input--message"
              type="text"
              id="message"
              name="message"
              placeholder="Expense Message"
              required
            />
            <input
              class="add__expense-input--amount"
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              required
            />

           <button type="submit" class="add__expense-submit-btn primary-btn">
              Add Expense
            </button>
          </form>
        </div>
      </div>
      
  </div>`;
  }
}

export default new OperationView();
