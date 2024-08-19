import View from './view.js';
import * as model from './../model.js';

class LoginView extends View {
  _parent = document.querySelector('.navbar');
  _hash = 'login';

  _generateMarkup(data){
    return `<nav class="navbar">
      <div class="navbar__container container">
        <div class="navbar__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div class="navbar__content">
          <div class="navbar__message">
            <p class="navbar__welcome">HI, ${data.owner.toUpperCase()}!</p>
          </div>
          <div class="navbar__login hidden">
            <div class="navbar__login-form">
              <input
                type="text"
                placeholder="USER"
                class="navbar__login-input navbar__login-input--user"
              />
              <input
                type="text"
                placeholder="PIN"
                class="navbar__login-input navbar__login-input--pin"
              />
            </div>
            <div class="navbar__login-form-button">
              <button class="login__btn">
                <i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>`
  }
  addHandlerUserLogin(handler) {
    this._parent.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.navbar__login-form-button');
        if (!btn) return;
        const userName = document.querySelector('.navbar__login-input--user');
        const userPin = document.querySelector('.navbar__login-input--pin');
        const user = userName.value;
        const pin = +userPin.value;
        if (user === '' || pin === 0) return;
        handler(user, pin);
        // Clearing Input Fields
        userName.value = userPin.value = '';
      }.bind(this)
    );
  }
}

export default new LoginView();
