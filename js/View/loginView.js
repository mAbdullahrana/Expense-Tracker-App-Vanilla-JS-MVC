import View from './view.js';
import * as model from './../model.js';

class LoginView extends View {
  _parent = document.querySelector('.navbar__login');

  addHandlerUserLogin(handler) {
    this._parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.navbar__login-form-button');
      if (!btn) return;
      const user = document.querySelector('.navbar__login-input--user').value;
      const pin = +document.querySelector('.navbar__login-input--pin').value;
      if (user === '' || pin === 0) return;
      handler(user, pin);
      this._parent=''
    });
  }
}

export default new LoginView();
