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
}
