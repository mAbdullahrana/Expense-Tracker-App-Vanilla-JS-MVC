export default class view {
  _parent;
  
  render(data) {
    this._parent.innerHTML = '';
    const markup = this._generateMarkup(data);
    this._parent.insertAdjacentHTML('afterbegin', markup);
  }
}
