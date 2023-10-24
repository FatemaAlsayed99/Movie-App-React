import React, { useState, useEffect } from 'react';
import "./Det.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Instance from '../../inctances/inctance';
import { Col, Row } from 'react-bootstrap';

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function displayMovie() {
      try {
        const response = await Instance.get(
          `/movie/${id}?api_key=22ee4f53b871bd32bc50a7322350a8f3`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.error('Error displaying movie details', error);
      }
    }

    displayMovie();
  }, []);

  return (
    <>  <h1>Movie Details</h1>
      <Row className='details'>
        
          <Col> 
          <div> <img className='card-img-top2' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></div>      
          </Col>

          <Col>
         <div>
           <div className='cardTitle'><h2>{movie.title}</h2></div> 
             <div className='cardOverview'><h5>{movie.overview}</h5></div>
         </div>
           
          </Col>
        
      </Row>

    </>



  );
};

export default Details;