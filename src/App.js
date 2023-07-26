import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";

const App = () => {
  //   return <div className={style.overall}>
  //     <
  //   </div>;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
