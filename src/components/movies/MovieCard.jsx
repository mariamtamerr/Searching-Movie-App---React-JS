import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; 

const MovieCard = ({ item, overview, release_date }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', marginBottom: '2rem', maxHeight: '40rem' }}>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="..." style={{ height: '15rem' }} />
        <div className="card-body">
          <h5 className="card-title">{item.title.substring(0, 20)}</h5>
          <p className="card-text">{item.overview.substring(0, 60)}.</p>
          <button className="btn btn-secondary" onClick={showModal}>View Details</button>
        </div>
      </div>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="..." style={{ height: '20rem', marginBottom:'2rem' }} />
          <h6>{item.overview}</h6> <br/>
          <h4>IMDb: {item.vote_average}</h4> <br/>
          <h5>Release Date :  {item.release_date}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieCard;
