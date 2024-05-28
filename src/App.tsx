import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
