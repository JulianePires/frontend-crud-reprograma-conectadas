
const { createContext, useContext } = require("react");

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  // const [books, setBooks] = useState([]);

  //TODO: implementar funções de manipulação de objetos

  // const updateBooks = async () => {
  //   getbooks()
  //     .then((response) => setBooks(response.data))
  //     .catch((err) => console.error(err));
  // };

  // const addBook = (book) => {
  //   createBook(book)
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   updateBooks();
  // }, []);

  return (
    <BooksContext.Provider value=""> {children}</BooksContext.Provider>
  );
};

const useBooks = () => {
  return useContext(BooksContext);
};

export default useBooks;
