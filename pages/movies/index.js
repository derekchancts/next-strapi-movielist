// import { useState } from 'react';
import axios from "axios";
import Card from '../../components/Card';
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const MoviesPage = ({ movies, page, lastPage }) => {
  // const [showPage, setShowPage] = useState(false);

  const router = useRouter();
  // console.log(router.query);  // {page: "1"} at beginning. Then it will depend on which page that you are on.

  // console.log(movies)
  return (
    <CardStyled>
      {/* <div className="movie_container"> */}
      <div className="container">
        {/* <ul className="content"> */}
          {movies &&
            movies.map((movie) => (
              // <li key={movie.id}>
              //   <h3>{movie.title} </h3>
              // </li>
              <Card key={movie.id} movie={movie} />
            ))}
        {/* </ul> */}
      </div>
        <div className="btn_container">
          <button
            disabled={page <= 1}
            className="btn"
            onClick={() => router.push(`/movies?page=${page - 1}`)}
          >
            Prev
          </button>
          <button
            disabled={page === lastPage}
            className="btn"
            onClick={() => router.push(`/movies?page=${page + 1}`)}
          >
            Next
          </button>
        </div>
        <div className="btn_container">Page: {page}</div>
      
    </CardStyled>
  );
};



export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const { API_URL } = process.env;

  // say page = 2, then it means we start at page 1, and start from movie number 3
  // say page = 3, then it means we start at page 2, and start from movie number 6, etc
  const start = +page === 1 ? 0 : (+page - 1) * 3;

  // const response = await axios(`${API_URL}/movies`);
  // const response = await axios(`${API_URL}/movies?_limit=3`);
  // const response = await axios(`${API_URL}/movies?_limit=3&_start=3`);  // hard coded (get 2nd page)
  const response = await axios(`${API_URL}/movies?_limit=3&_start=${start}`);
  // console.log(response)

  const movies = await axios(`${API_URL}/movies/count`);
  // console.log(movies.data);
  const totalPages = Math.ceil(movies.data / 3);
  // console.log(totalPages);

  return {
    props: {
      movies: response.data,
      page: +page,
      lastPage: totalPages,
    },
  };
};



const CardStyled = styled.div`
  /* width: 500px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2); */

  /* .body {
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
    } */

  .btn_container {
    max-width: 1200px;
    width: 100%;
    /* margin: 0 auto; */
    padding: 30px;
    display: flex;
    justify-content: center;

    .btn {
      margin: 0 0.5rem;
      border: 1px solid #ccc;
      padding: 10px 25px;
      border-radius: 10px;
      min-width: 120px;
      background: #eee;
      font-weight: bold;

      &:active {
        background: #ef6800;
        color: white;
      }

      &:focus {
        outline: none;
      }

      &:disabled {
        opacity: 0.65; 
        cursor: not-allowed;
      }
    }
  }

  /* input[type="button"] {
      border: none;
      outline:none;
      } */

  .content {
    list-style-type: none;
  }
`;

export default MoviesPage;
