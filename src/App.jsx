import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Services from "./components/Services"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Error from "./components/error"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/service" element={<Services />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App