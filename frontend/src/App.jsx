import { Route, Routes } from "react-router-dom";
import Navbar from "./reusable/components/Navbar";
import Home from "./pages/Home";
import Footer from "./reusable/components/Footer";
import Login from "./reusable/components/Login";
import { useSelector } from "react-redux";

const HomePage = () => {
  //state from redux that holds this state value either true or false
  const { showUserLogin } = useSelector((store) => store?.loginSlice);

  return (
    <div className="">
      <Navbar />
      {showUserLogin ? <Login /> : null}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
