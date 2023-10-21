const { createContext, useContext } = require("react");

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  // const [books, setBooks] = useState([]);

  //TODO: implementar funções de manipulação de objetos

  return (
    <BooksContext.Provider value=""> {children}</BooksContext.Provider>
  );
};

const useBooks = () => {
  return useContext(BooksContext);
};

export default useBooks;
