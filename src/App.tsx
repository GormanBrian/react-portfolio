import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  const activePath = useLocation().pathname;

  useEffect(() => {
    if (activePath === "/") {
      navigate("/about-me");
    }
  }, [activePath, navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
