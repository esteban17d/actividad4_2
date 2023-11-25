export default class Model {
  constructor() {
    this.view = null;
    this.books = JSON.parse(localStorage.getItem('books'));
    if (!this.books || this.books.length < 1) {
      this.books = [
        {
          id: 0,
          title: 'Influencia',
          author: 'Robert Caldini'
        }
      ]
      this.currentId = 1;
    } else {
      this.currentId = this.books[this.books.length - 1].id + 1;
    }
  }

  setView(view) {
    this.view = view;
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getBooks() {
    return this.books.map((book) => ({...book}));
  }

  findBook(id) {
    return this.books.findIndex((book) => book.id === id);
  }

  editBook(id, values) {
    const index = this.findBook(id);
    Object.assign(this.books[index], values);
    this.save();
  }

  addBook(title, author) {
    const book = {
      id: this.currentId++,
      title,
      author
    }

    this.books.push(book);
    this.save();

    return {...book};
  }

  removeBook(id) {
    const index = this.findBook(id);
    this.books.splice(index, 1);  
    this.save();
  }
}
