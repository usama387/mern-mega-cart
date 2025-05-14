import { Route, Routes } from "react-router-dom";
import Navbar from "./reusable/components/Navbar";
import Home from "./pages/Home";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
