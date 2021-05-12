import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link'; 

import propTypes from 'prop-types';



const Card = ({ movie, year }) => {
  const { API_URL } = process.env;

  if(!movie.genre) {
    movie.genre = {}
    movie.genre.slug = 'uncategorized'
  }
  
  return (
    <CardStyled>
      <div className="body">
        <strong>{movie.title}</strong> - {movie.genre ? movie.genre.title : null}<br /><br />

        {movie.actors.length > 0 && movie.actors.map(actor => (
          <small key={actor.id}>{actor.first_name} {actor.last_name} &nbsp;</small>
        ))}
    </div>
    </CardStyled>
  )
};


Card.propTypes = {
  // movie: propTypes.object.isRequired,

  // if you don't know the type of the data, can use "any"
  // movie: propTypes.any.isRequired

  // if you know it could be one of two types, for example
  // movie: propTypes.oneOfType([
  //   propTypes.array,
  //   propTypes.object
  // ])

  // An object taking on a particular shape
  movie: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
  year: propTypes.number
}


Card.defaultProps = {
  year: 1984
}



const CardStyled = styled.div`
    width: 250;
    border: 1px solid #cccccc;
    /* margin-top: 50px; */
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    margin: 0 auto;
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }

        a {
          display: inline-block;
          margin: 20px 0; 
        }
    }
`


export default Card
