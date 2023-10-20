import api from "./api";

const getbooks = async () => {
  return await api.get("/");
};

const createBook = async (book) => {
  return await api.post("/create", book);
};

export { getbooks, createBook };
