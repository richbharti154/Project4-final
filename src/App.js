import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Register from './Component/Register'
import EmojiSearch from './Component/EmojiSearch'
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/'  element={<Home/>} />
<Route path='/register'  element={<Register/>} />
<Route path='/emoji'  element={<EmojiSearch/>} />
     
      </Routes>
   </BrowserRouter>
  );
}
