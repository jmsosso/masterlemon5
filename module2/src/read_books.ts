interface Book {
  title: string,
  isRead: boolean,
}

const books: Array<Book> = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

const isBookRead = (books: Array<Book>, titleToSearch: string): boolean => {
  const book = books.find((element) => element.title == titleToSearch);
  return book ? book.isRead : false;
}