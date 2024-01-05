import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import HomePage from "./pages/homePage/homePage";
import Contact from "./pages/contact/contact";
import Registartion from "./pages/registration/registartion";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { useSelector } from "react-redux";
 

function App() {
  const token = useSelector((state)=>state.student.credentials)
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/SCOPE-INDIA-Client" element={<HomePage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/register" element={<Registartion />}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/dashboard" element={token ? <Dashboard/> : <Navigate to={'/login'}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

