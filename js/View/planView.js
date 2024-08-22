import View from './view.js';

class PlanView extends View {
  _parent = document.querySelector('.app');
  _hash = 'plans';

  addHandlerAddPlan(handler) {
    this._parent.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = e.target
        .closest('.app')
        .querySelector('.add__plan-submit-btn');
      if (!btn) return;
      const expenseName = document.querySelector('#expense-name').value;
      const amount = +document.querySelector('#expense-amount').value;
      const date = document.querySelector('#expense-date').value;

      handler(expenseName, amount, date);

      document.querySelector('.add__plan-form ').reset();
    });
  }

  addHandlerDeletePlan(handler) {
    this._parent.addEventListener('click', function (e) {
      const targetButton = e.target.closest('.plan__expense-btn--delete');

      if (targetButton) {
        const planId = targetButton.dataset.id;

        let isDeleting = false;
        if (!isDeleting) {
          isDeleting = true;
          handler(planId);
          isDeleting = false;
        }
        targetButton.removeEventListener('click', this);
      }
    });
  }
  _generateMarkup({ plans, totalPlanned, remainingBalance }) {
    return `<div class="menu">
      <aside class="side__menu-main">
        <ul class="side__menu-main-list">
          <li class="side__menu-main-item">
            <a href="#dashboard" class="side__menu-main-link ">Dashboard</a
            ><i class="side__menu-icon fa-solid fa-table-columns"></i>
          </li>
          <li class="side__menu-main-item">
            <a href="#operations" class="side__menu-main-link">Operations</a
            ><i class=" side__menu-icon fa-solid fa-timeline"></i>
          </li>
          <li class="side__menu-main-item current">
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
     
      <div class="add__plan-container">
    <div class="add__plan-header">
        <h1 class = "add__plan-heading">Plan Your Future Expenses</h1>
        <p class = "add__plan-subheading">Organize and manage your upcoming expenses to maintain financial control.</p>
    </div>
      
  
          <form class="add__plan-form ">
          <input type="text" id="expense-name" class="add__plan-input--note" placeholder="Expense Name">
        <input type="number" id="expense-amount" class="add__plan-input--amount amount-input" placeholder="Target Amount">
        <input type="date" id="expense-date"  class="add__plan-input--amount" placeholder="Planned Date">
  
           <button type="submit" class="add__plan-submit-btn primary-btn">
              Add Plan
            </button>
          </form>
 
      </div>
    </div>

    <div class ="plan">
    <ul class="plan__expense-list movements__scrollable" id="expense-list">
        ${this.#plansMarkup(plans)}
    </ul>

    <div class="plan__expense-summary summary">
    <div class ="plan__expense-total">
        <h3 class = "plan__expense-summary--total">Total Planned 👉</h3>
        <p> ${totalPlanned || 0} RS</p>
     </div>  
     <div class ="plan__expense-remaining"> 
        <h3 class ="plan__expense-summary--remaining">Budget Remaining 👉</h3>
        <p> ${remainingBalance || 0} RS</p>
     </div>   
    </div>
</div>
      
  </div>`;
  }

  #plansMarkup(plan) {
    return plan
      .slice()
      .reverse()
      .map(plan => {
        return `
       <li class="plan__expense-item expense-item ">
            <div class = "plan__expense-detail">
                <h3 class = "plan__expense-detail-heading">${plan.expenseMsg}</h3>
                <span>${plan.expenseAmount} RS - Due: ${plan.expenseDate}</span>
            </div>
            <div class = "plan__expense-btn">
                <button class = "plan__expense-btn--delete" data-id ="${plan.id}" >Delete</button>
            </div>
        </li>
  `;
      })
      .join('');
  }
}

export default new PlanView();
