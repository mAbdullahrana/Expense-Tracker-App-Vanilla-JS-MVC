import View from './view.js';

class LogOutView extends View {
  _parent = document.querySelector('.navbar');
  _hash = 'login';
}

export default new LogOutView();
