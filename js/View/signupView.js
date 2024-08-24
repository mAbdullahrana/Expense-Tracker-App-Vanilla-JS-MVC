import View from './view.js';
import * as model from './../model.js';

class SignUpView extends View {
  _parent = document.querySelector('.app');
  _hash = 'signup';

  addHandlerUserSignUp(handler) {
    this._parent.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.signup__form-submit-button');
        if (!btn) return;
        let userName = document.querySelector(
          '.signup__form-input--name'
        ).value;
        let userPin = +document.querySelector('.signup__form-input--password')
          .value;
        if (userName === '' || userPin === '') return;
        handler(userName, userPin);
        this._parent.classList.add('hidden');
      }.bind(this)
    );
  }

  _generateMarkup(data) {
    if (data.owner === '') {
      this._parent.classList.remove('hidden');
      return `
    <div class="signup">
        <div class="signup__container">
          <div class="signup__content">
            <div class="signup__title">
              <h2 class="signup__heading">Simplify Your Finances</h2>
              <p class="signup__subheading">
                Join thousands who are taking control of their finances.
              </p>
            </div>
            <div class="signup__form">
              <div class="signup__form signup__form-input">
                <label for="name" class="signup__form-label--name"
                  >Full name*</label
                >
                <input
                  type="text"
                  class="signup__form-input--name"
                  placeholder="Enter Your Full Name"
                  required
                />
                <label for="name" class="signup__form-label--password"
                  >Choose a pin</label
                >
                <input
                  type="password"
                  class="signup__form-input--password"
                  placeholder="pin"
                  required
                />
              </div>
              <div class="signup__form-submit-buttons">
                <button class="signup__form-submit-button" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       `;
    } else {
      return '';
    }
  }
}

export default new SignUpView();
