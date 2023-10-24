import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moviesAction } from "../Store/Slices/Movies"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Home.css'

export default function Home() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
     
    ]
  };
  const Dispatch= useDispatch()
  const movies = useSelector((state) => state.movies.movies);
  

  useEffect(()=>{
      
    Dispatch(moviesAction()) 

  },[])
    return (
      <>
      
      <h2>Welcome To MovieLand</h2>
      <Slider {...settings} className="mb-5">
        {/* Render movie items within the Slider */}
        {movies.map((movie) => (
          <div key={movie.id}>
            <Card className="sliderCard m-2">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              
              <Card.Body>
                <Card.Title>
                  <Link to={`/Details/${movie.id}`}>{movie.title}</Link>
                </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
      <Row xs={1} md={2} lg={4} className="g-4">
        {movies.map((movie) => {
          return (
            <Col key={movie.id}>
              <Card className="cards">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                
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
      </>
    )}