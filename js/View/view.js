export default class view {
  _parent;
  _hash;

  render(data) {
    this.#changeHash();
    this._parent.innerHTML = '';
    const markup = this._generateMarkup(data);
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }

  #changeHash() {
    window.location.hash = this._hash;
  }

  addHandlerHashChange(handler) {
    window.addEventListener(
      'hashchange',
      function (e) {
        if (e.target.location.hash.slice(1) !== this._hash) return;
        handler();
      }.bind(this)
    );
  }

  _generateMarkup(data) {
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
