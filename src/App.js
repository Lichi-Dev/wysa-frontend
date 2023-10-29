import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Intro from "./components/Intro";
import SleepChange from "./components/SleepChange";
import SleepStruggle from "./components/SleepStruggle";
import Result from "./components/Result";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/introduction"
        element={
          <ProtectedRoute>
            <Intro />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/sleepchange"
        element={
          <ProtectedRoute>
            <SleepChange />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/sleepstruggle"
        element={
          <ProtectedRoute>
            <SleepStruggle />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />
      <Route
        path="/not-found"
        element={
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
