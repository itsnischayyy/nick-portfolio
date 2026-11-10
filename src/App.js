import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Quoteluffy from './Components/quote1/Quoteluffy';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cursor from './Components/Cursor/Cursor';
import Expertise from './Components/Expertise/Expertise';
import {BrowserRouter as
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Hero2_0 from './Components/Hero/Hero2_0';
import React, { useState } from 'react';
import Thankyou from './Components/Thankyou/Thankyou';


function App() {

  const [mode, setMode] = useState('dark')
  const [show, setShow] = useState('hide')
  const [show2, setShow2] = useState('show')
  const [txt, setTxt] = useState('txt_dark')
  const [dytxt, setDyTxt] = useState('txt_dark')
  const [cursor_color, setCursor_Color] = useState('cursor_dark')
  const [icon, seticon] = useState('fa-solid fa-sun')
  // const [mob, setMob] = useState('add')

  

  const toggleMode = ()=>{
    if(mode === `dark`){
      setMode(`light`);
      setShow(`show`);
      setShow2(`hide`);
      setTxt('txt_light');
      setDyTxt('light');
      setCursor_Color('cursor_light');
      seticon('fa-solid fa-moon moon');
    }
    else{
      setMode(`dark`);
      setShow(`hide`);
      setShow2(`show`);
      setTxt('txt_dark');
      setDyTxt('dark');
      setCursor_Color('cursor_dark');
      seticon('fa-solid fa-sun');
    }
  }

  
  return (
    <div className={`App ${mode}`}>
      
      {/* <BrowserRouter basename="/nick-portfolio"> */}
      <BrowserRouter>
        <ScrollToTop/>
      
       <Navbar toggleMode={toggleMode} icon={icon}/>
        <Routes>
          {/* <Route exact path='/' element={<Hero/>}/> */}
          <Route exact path='/' element={<><Hero2_0 mode={mode} show={show} show2={show2} toggleMode={toggleMode} /><Hero dytxt={dytxt} mode={mode}/> <Quoteluffy txt={txt} toggleMode={toggleMode}/> <Projects mode={mode} toggleMode={toggleMode}/> </>}/>
          <Route path='/About' element={<About mode={mode}/>}/>
          <Route path='/projects' element={<Projects mode={mode} toggleMode={toggleMode}/>}/>
          <Route path='/contact' element={<Contact mode={mode}/>}/>
          <Route path='/Expertise' element={<Expertise mode={mode}/>}/>
          <Route path='/Thankyou' element={<Thankyou mode={mode}/>}/>
        </Routes>
       <Footer />
       <Cursor cursor_color={cursor_color} />
       </BrowserRouter>
    </div>
  );
}

export default App;
