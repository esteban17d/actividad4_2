import AddBook from './components/add-book.js';

export default class View {
  constructor() {
    this.model = null;
    this.gridContainer = document.getElementById('grid-container');
    this.addBookForm = new AddBook();
    this.addBookForm.onClick((title, author) => this.addBook(title, author));
  }

  setModel(model) {
    this.model = model;
  }

  render() {
    const books = this.model.getBooks();
    books.forEach((book) => this.createElement(book));
  }

  addBook(title, author) {
    const book = this.model.addBook(title, author);
    this.createElement(book);
  }

  editBook(id) {
    const title = prompt('Ingrese el título')
    const author = prompt('Ingrese el autor')
    this.model.editBook(id, (title, author));
    const row = document.getElementById(id);
    row.children[0].innerText = title;
    row.children[1].innerText = author;
  }

  removeBook(id) {
    this.model.removeBook(id);
    document.getElementById(id).remove();
  }

  createElement(book) {
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('id', book.id);
    div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
    `;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-button');
    editBtn.innerText = 'Editar'
    editBtn.onclick = () => this.editBook(book.id);
    div.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('delete-button');
    removeBtn.innerText = 'Borrar'
    removeBtn.onclick = () => this.removeBook(book.id);
    div.appendChild(removeBtn);
    this.gridContainer.appendChild(div);
  }
}
