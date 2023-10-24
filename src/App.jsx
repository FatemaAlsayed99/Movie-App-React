import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Components/Movies/Movies';
import { Container } from 'react-bootstrap/esm';
import NavbarCom from './Components/NavBar/Navbar';
import Contact from './Components/Contact/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound.jsx';
import Home from './Components/Home/Home';
import Details from './Components/Movies/Details';
import { Provider } from 'react-redux';
import store from './Components/Store/Store';
import Favorites from './Components/Favorite';
import { LanguageProvider } from './Context/language';
import { useState } from 'react';



function App() {
  const[language,setLanguage]=useState('')

  return (
    <>
    <Provider store={store}>
      <LanguageProvider value={{language,setLanguage}}>
    <BrowserRouter>
    <NavbarCom/>
    <Container>
    <Routes>
    
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Movies' element={<Movie/>}/>
      <Route  path='/Contact' element={<Contact/>}/>
      <Route  path='/Details/:id' element={<Details/>}/>
      <Route  path='/FavoriteMovies' element={<Favorites/>}/>
      <Route  path='*' element={<NotFound/>}/>
    </Routes>
    </Container>
    </BrowserRouter>
    </LanguageProvider>
    </Provider>
    </>
  )
}

export default App
