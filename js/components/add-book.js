export default class AddBook {
  constructor() {
    this.addButton = document.getElementById('add-button');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
  }

  onClick(callback) {
    this.addButton.onclick = () => {
      if (this.titleInput.value === '' || this.authorInput.value === '') {
        alert('Título y autor no pueden ser vacíos');
      } else {
        callback(this.titleInput.value, this.authorInput.value);
      }
    }
  }
}
