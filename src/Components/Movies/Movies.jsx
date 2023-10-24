import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../Store/Slices/Favorite';
import Instance from './../../inctances/inctance';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  
  useEffect(() => {
    async function displayMovies() {
      try {
        const response = await Instance.get(
          `/movie/popular?api_key=22ee4f53b871bd32bc50a7322350a8f3&page=${currentPage}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error displaying movies:', error);
      }
    }

    displayMovies();
  }, [currentPage]);
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
    console.log(favorites);
  };

  return (
    <div>
      <h1>Movies List</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {movies.map((movie) => {
          const isFavorite = favorites.includes(movie);
          return (
            <Col key={movie.id}>
              <Card className='cards'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <button
                  className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
                  onClick={() => handleAddToFavorites(movie)}
                >
                  {isFavorite ? '❤️' : '💙'}
                </button>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/Details/${movie.id}`}>{movie.title}</Link>
                  </Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="pagination-buttons text-center">
        <button className="btn btn-primary m-3" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Movie;