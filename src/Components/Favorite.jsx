import { useSelector, useDispatch } from 'react-redux';
import { removeFavorites } from './Store/Slices/Favorite';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
const Favorites = () => {
  const Dispatch =useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  
  const handleremoveFavorites=(movie)=>{
    Dispatch(removeFavorites(movie))
    console.log(favorites)
  }
  return (
    <div>
      <h1>Favorite Movies</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        
        {favorites.map((movie) => {
          const isFavorite = favorites.includes(movie);
          return (
            <Col key={movie.id}>
              <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
                    onClick={() => handleremoveFavorites(movie)}
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
    </div>
  );
}

export default Favorites;