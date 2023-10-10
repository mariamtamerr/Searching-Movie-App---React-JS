

import { InfoOutlined, Padding, PlayArrow } from '@mui/icons-material'
import './Featured.css'

const Featured = ({type}) => {

  return (
    <div className='featured'>


      {
        type && 
          <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
           <select name='genre' id='genre'>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
           </select>
          </div>
      }


    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""/>

    <div className="content">
      <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus corrupti tempore, sit quo laboriosam eum perspiciatis dolores. Esse, pariatur! Temporibus dolor voluptatibus quidem officia doloremque eaque maxime, laboriosam mollitia corrupti.</p>
    <PlayArrow style={{Padding: '10px 20px', backgroundColor:'white', fontSize:'18px', color:'var(--main-color)', borderRadius:'0.5rem', width:'7rem', height:'5rem', position:'absolute', bottom:'-10rem', left:'4rem', cursor: 'pointer'}}/>
    <InfoOutlined style={{Padding: '10px 20px', backgroundColor:'gray', fontSize:'18px',  fontWeight: '500' , color:'white', borderRadius:'0.5rem', width:'7rem', height:'5rem', position:'absolute', bottom:'-10rem', left:'12rem', cursor: 'pointer'}}/>
    </div>
   </div>
  )
}

export default Featured
