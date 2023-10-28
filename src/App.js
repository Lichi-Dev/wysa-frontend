import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
