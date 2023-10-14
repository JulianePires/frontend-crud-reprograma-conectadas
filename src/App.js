import { BooksProvider } from "./context/Books";
import { Router } from "./routes/app.routes";
import Wrapper from "./components/Wrapper";

//TODO: Substituir o Provider
function App() {
  return (
    <BooksProvider>
      <Wrapper rota="Home">
        <Router />
      </Wrapper>
    </BooksProvider>
  );
}

export default App;
