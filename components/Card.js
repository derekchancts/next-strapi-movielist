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
      <div className="poster">
        {/* <img src={API_URL + movie.poster.url} alt={movie.title}/> */}
        {movie.poster &&  
          <Image 
            src={API_URL + movie.poster.url} 
            alt={movie.title}
            width={350}
            height={400}
            layout="responsive"
          />
        }
      </div>
      <div className="body">
        {/* <h3>{ movie.title } - { year }</h3> */}
        <h3>{ movie.title }</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }}  />
        {/* <Link href="/movies/[id]" as={`/movies/${movie.id}`} >    Next.js 10 does not require the use of "as". */}  
        {/* <Link href={`/movies/${movie.id}`} > */}
        {/* <Link href={`/movies/${movie.slug}`} > */}
        
        <Link href={`/movies/${movie.genre.slug}/${movie.slug}`} >
          <a>More about this movie</a>
        </Link>
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
