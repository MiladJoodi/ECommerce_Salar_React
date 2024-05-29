import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
