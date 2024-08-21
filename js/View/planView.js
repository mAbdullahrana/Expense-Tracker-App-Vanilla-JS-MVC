import View from './view.js';

class PlanView extends View {
  _parent = document.querySelector('.app');
  _hash = 'plans';

  constructor(){
    super()
  this.addHandlerAddPlan()
  }



  addHandlerAddPlan(){
    this._parent.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = e.target.closest('.app').querySelector('.add__plan-btn');
      if(!btn) return;
      console.log(btn);
    })
  }
  _generateMarkup() {
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

        <button type="submit" class="add__plan-btn secondary-btn">Add New Expense Plan</button> 
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
    <ul class="plan__expense-list" id="expense-list">
        <li class="plan__expense-item expense-item">
            <div class = "plan__expense-detail">
                <h3 class = "plan__expense-detail-heading">Vacation Savings</h3>
                <span>2000 RS - Due: 2024-12-01</span>
            </div>
            <div class = "plan__expense-btn">
                <button class = "plan__expense-btn--edit ">Edit</button>
                <button class = "plan__expense-btn--delete" >Delete</button>
            </div>
        </li>
    </ul>

    <div class="plan__expense-summary summary">
        <h3 class = "plan__expense-summary--total">Total Planned 😁</h3>
        <p> $2000</p>
        <h3 class ="plan__expense-summary--remaining">Budget Remaining 👇</h3>
        <p> $5000</p>
    </div>
</div>
      
  </div>`;
  }
}

export default new PlanView();
