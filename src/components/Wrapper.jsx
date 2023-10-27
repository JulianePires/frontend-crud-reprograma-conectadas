import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Wrapper = (params) => {
  const { children} = params;
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
