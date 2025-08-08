import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Containers/Navigation";
import Home from "./Pages/Home";
import Internship from "./Pages/Internship";
import CloudSolution from "./Pages/cloudSolution";
import MobileSecurity from "./Pages/MobileSecurity";
import MobileSolution from "./Pages/mobileSolution";
import OracleEbusiness from "./Pages/OracleEbusiness";
import Linux from "./Pages/Linux";
import Footer from "./Containers/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavLinks className="px-0 md:px-2" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/cloud_solutions" element={<CloudSolution />} />
        <Route path="/mobile_security" element={<MobileSecurity />} />
        <Route path="/mobile_solution" element={<MobileSolution />} />
        <Route path="/oracle_e_bsns" element={<OracleEbusiness />} />
        <Route path="/linux" element={<Linux />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
