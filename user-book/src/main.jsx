import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import NavBar from './NavBar.jsx'
import HomeCard from './HomeCard.jsx'
import BookDetail from './BookDetail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeCard />}></Route>
      <Route path="/user/book/detail/:id" element={<BookDetail />}></Route>
    </Routes>
  </BrowserRouter>  
)
