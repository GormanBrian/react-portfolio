import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const activePath = useLocation().pathname;

  useEffect(() => {
    if (activePath === "/") {
      navigate("/AboutMe");
    }
  }, [activePath, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
