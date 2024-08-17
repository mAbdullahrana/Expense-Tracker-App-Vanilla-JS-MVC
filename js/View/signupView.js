import View from './view.js';
import * as model from './../model.js';

class SignUpView extends View {
  _parent = document.querySelector('.signup__form');

  addHandlerUserSignUp(handler) {
    this._parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.signup__form-submit-button');
      if (!btn) return;
      let userName = document.querySelector('.signup__form-input--name').value;
      let userPin = +document.querySelector('.signup__form-input--password')
        .value;
      if(userName === '' || userPin === '') return
      handler(userName, userPin);
    });
  }
}

export default new SignUpView();
