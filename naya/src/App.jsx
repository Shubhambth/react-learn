import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
        </Route>
         </Routes>
      
     
    </>
  )
}

export default App
