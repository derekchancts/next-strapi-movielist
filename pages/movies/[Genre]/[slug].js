// import { useEffect } from 'react';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import axios from 'axios';


const Movie = ({ movie }) => {
  // const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {
  //   const getData = async() => {
  //     const { API_URL } = process.env;
  //     const response = await axios(`${API_URL}/movies/${id}`);
  //     console.log(response.data)
  //   }
  //   getData();
  // }, [])


  console.log(movie)

  return (
    <CardStyled>
      <div className="movie_container">
        <div className="body">
        <h2>{ movie.title }</h2>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} >
          {/* { movie.description } */}
        </p>
        </div>
      </div>
    </CardStyled>
  );
};



const { publicRuntimeConfig } = getConfig();

export const getServerSideProps = async (context) => {
  //const id = context.query.id;  same as context.params.id
  const slug = context.query.slug;
  // console.log(context.query);

  // const { API_URL } = process.env;
  // const response = await axios('http://localhost:1337/movies/[id]');
  const response = await axios(`${publicRuntimeConfig.API_URL}/movies/?slug=${slug}`);
  // console.log(response.data)

  return {
    props: {
      movie: response.data[0]
    }
  }
};




const CardStyled = styled.div`
    /* width: 500px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2); */
    
    .body {
        padding: 20px;
        
        h2 {
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


export default Movie;
