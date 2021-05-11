import { useState } from "react";
import { parseCookies } from "nookies";
import axios from 'axios';
import { useRouter } from 'next/router';


const AddMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieSlug, setMovieSlug] = useState("");

  const router = useRouter();
  

  const addMovie = async (e) => {
    e.preventDefault();

    if (typeof parseCookies().jwt === 'undefined') {
     console.log('you must be logged in to add movie')
    } else {

    const jwt = parseCookies().jwt;
    const parsed_jwt = JSON.parse(jwt);
    // console.log(parsed_jwt.jwt)


    const body = {
     title: movieTitle,
      slug: movieSlug
    };

    
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${parsed_jwt.jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    try {
      const result = await axios.post(`${process.env.API_URL}/movies`, body, axiosConfig)
      console.log(result)

      setMovieTitle('');
      setMovieSlug('');
      router.push('/') 

    } catch (error) {
      console.log(error)
    }


    // const result = await axios.post(`${process.env.API_URL}/movies`, {
    //   headers: {
    //     Authorization: `Bearer ${parsed_jwt.jwt}`
    //   },
    //   movieInfo
    // })



    // const res = await fetch(`${process.env.API_URL}/movies`, {
    //   method: "POST",
    //   headers: {
    //       'Authorization': `Bearer ${parsed_jwt.jwt}`,
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(movieInfo)
    // })

    // const data = await res.json()
    // console.log(data)
  }

  };

  


  return (
    <div>
      <h2 className="login">Add Movie</h2>
      <form className="form-style-1" onSubmit={addMovie}>
      <div>
        <input
          type="text"
          onChange={(e) => setMovieTitle(e.target.value)}
          value={movieTitle}
          placeholder="Movie title"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setMovieSlug(e.target.value)}
          value={movieSlug}
          placeholder="Movie slug"
        />
      </div>
      <div className="btn">
        <button type="submit">
          Add Movie
        </button>
      </div>
      </form>
    </div>
  );
};

export default AddMovie;
