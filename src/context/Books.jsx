import { getbooks, createBook } from "../service/books.service";

const { createContext, useState, useContext, useEffect } = require("react");

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  //TODO: implementar funções de manipulação de objetos

  const updateBooks = async () => {
    getbooks()
      .then((response) => setBooks(response.data))
      .catch((err) => console.error(err));
  };

  const addBook = (book) => {
    createBook(book)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    updateBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};

const useBooks = () => {
  return useContext(BooksContext);
};

export default useBooks;
