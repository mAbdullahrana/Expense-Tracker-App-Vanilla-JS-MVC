import View from './view.js';

class LogOutView extends View {
  _parent = document.querySelector('.navbar');
  _hash = 'login';

  _generateMarkup() {
    document.querySelector('.app').innerHTML = '';
    return `<nav class="navbar">
    <div class="navbar__container container">
      <div class="navbar__logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div class="navbar__content">
        <div class="navbar__message">
          <p class="navbar__welcome">Log in to get Started</p>
        </div>
        <div class="navbar__login">
          <div class="navbar__login-form">
            <input
              type="text"
              placeholder="USER"
              class="navbar__login-input navbar__login-input--user"
            />
            <input
              type="password"
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
  </nav>`;
  }
}

export default new LogOutView();
