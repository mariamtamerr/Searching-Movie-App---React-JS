import React, { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import './Navbar.css';
import meImage from '../../assets/images/me.jpg';
import NetflixLogo from '../../assets/images/netflix.jpg';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useEffect } from 'react';

const Navbar = ({onSearch}) => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');

//   const searchForMovie = async (e) => {
//     e.preventDefault();
//     console.log(query);
//     try {
//       const url = `https://api.themoviedb.org/3/search/movie/popular?api_key=02e4c169b956405862df482c9c488092&include_adult=false&language=en-US&query=${query}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setMovie(data.results);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
  

const searchForMovie = async (e) => {
  useEffect(() => {
    // Uncomment this code to fetch data when the component mounts
    fetch(`https://api.themoviedb.org/3/search/movie/popular?api_key=02e4c169b956405862df482c9c488092&include_adult=false&language=en-US&query=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
}

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    // Manually trigger the form submission
    document.getElementById('search-form').submit();
  };

  return (
    <div className="navbar">
      <div className="container">
      <span style={{color:'orange', fontSize:'1.8rem', fontWeight:'bold', position:'absolute', left:'7rem'}} >Watch.Me</span>
        <div className="left">
          {/* <img src={NetflixLogo} alt="Netflix Logo" /> */}
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New And Popular</span>
          <span>My List</span>
        </div>
        <div className="right">

        <Form id="search-form" className="d-flex" onSubmit={searchForMovie}>
            <FormControl
              type="text"
              placeholder="Search for movies"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={changeHandler}
            />
            <Button variant="outline-secondary" type="submit" style={{marginRight:'1rem', backgroundColor:'#ffa500', color:'white', fontWeight:'bold'}}>
              Search
            </Button>
          </Form>
              {/* <Search className="icon" /> */}
           
          <span>KIDS</span>
          <Notifications className="icon" />
          <img src={meImage} alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
