
import NavLinks from "./Containers/Navigation"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"


function App() {
  return (
    <div>
      <BrowserRouter>
         <NavLinks className="px-2"/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
