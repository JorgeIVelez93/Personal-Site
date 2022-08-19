import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import Main from "./components/Main";

function App() {
  let navigate = useNavigate();

  const sendHome = () => {
    navigate(`/home`);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
