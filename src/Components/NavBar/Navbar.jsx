import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { langContext } from '../../Context/language';
import './Navbar.css';

function NavbarCom() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const movies = useSelector((state) => state.movies.movies);
  const { language } = useContext(langContext);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MoviesLand</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav" to="/">
              Home
            </NavLink>
            <span>{movies.length}</span>
            <NavLink className="nav" to="/Movies">
              Movies
            </NavLink>
            <NavLink className="nav" to="/Contact">
              Contact Us
            </NavLink>
            <NavLink className="nav" to="/FavoriteMovies">
              Favorites
            </NavLink>
            <NavLink className="nav">{favorites.length}</NavLink>
            <span>{language}</span>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;