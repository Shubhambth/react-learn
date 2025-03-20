import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile/:username" element={<Profile />} />
          
        </Route>
         </Routes>
      
     
    </>
  )
}

export default App
