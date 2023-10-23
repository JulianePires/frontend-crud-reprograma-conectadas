<<<<<<< HEAD
const { createContext, useContext } = require("react");
=======
import { getbooks, createBook } from "../service/books.service";

const { createContext, useState, useContext, useEffect } = require("react");
>>>>>>> 73d7d096a0a031d356f436ccb3be6a3d70b787a1

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  // const [books, setBooks] = useState([]);

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
<<<<<<< HEAD
    <BooksContext.Provider value=""> {children}</BooksContext.Provider>
=======
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
>>>>>>> 73d7d096a0a031d356f436ccb3be6a3d70b787a1
  );
};

const useBooks = () => {
  return useContext(BooksContext);
};

export default useBooks;
