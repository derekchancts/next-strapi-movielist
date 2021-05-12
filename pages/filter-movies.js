import { useState } from 'react'
import axios from 'axios';
import Card from '../components/Card1';
import Select from 'react-select';
import {useQuery, useQueryClient} from 'react-query';


const getMovies = async (key) => {
  // console.log(key);
  const genreId = key.queryKey[1].genre;
  // console.log(genreId)

  // const actorsIds = key.queryKey[2].actors
  const actorsIds = key.queryKey[2].actors.map(id => `actors.id=${id}`)
  console.log(actorsIds)
  
  const actorsQueryString = actorsIds.join('&')
  console.log(actorsQueryString)


  if(genreId && actorsQueryString) {
    const res = await axios(`${process.env.API_URL}/movies?genre.id=${genreId}&${actorsQueryString}`)
    return res;
  }

  // if we have genreId and this runs, we will not run the code after this
  if (genreId) {
    const res = await axios(`${process.env.API_URL}/movies?genre.id=${genreId}`);
    return res;
  }

  if(actorsQueryString) {
    const res = await axios(`${process.env.API_URL}/movies?${actorsQueryString}`);
    return res;
  }

  const response = await axios(`${process.env.API_URL}/movies`);
  return response;
};



const FilterMovies = ({ movies, actors, genres }) => {
  const queryClient = useQueryClient();

  const [genreId, setGenreId] = useState(null);
  const [actorsIds, setActors] = useState([]);

  // http://localhost:1337/movies?actors.id=3
  // http://localhost:1337/movies?genre=3 
  // http://localhost:1337/movies?genre.id=3 etc 
  // http://localhost:1337/movies?actors.id=3&actors.id=5 

  const {data, status} = useQuery(['movies', {genre: genreId}, {actors: actorsIds}], getMovies, {initialData: movies});
  // const {data, status} = useQuery('movies', getMovies);
  // console.log(data)


  const handleActors = (values) => {
    console.log(values)
  }

  const handleGenre = (values) => {
    console.log(values)
  } 


  return (
    <>
      <h1 className='filtered_movies'>Filter movies</h1>
      <div className='filter_container'>
        <Select className="filter-option"
          getOptionLabel={option => `${option.first_name} ${option.last_name}`}
          getOptionValue={option => option.id}
          options={actors}
          instanceId="actors"
          isMulti
          placeholder="Filter by Actors"
          // onChange={(values) => handleActors(values) }
          // http://localhost:1337/movies?actors.id=3
          // http://localhost:1337/movies?genre=3  
          // http://localhost:1337/movies?genre.id=3 etc
          // http://localhost:1337/movies?actors.id=3&actors.id=5
          // onChange={(values) => handleActors(values.map(actor => actor.id)) }
          onChange={(values) => setActors(values.map(actor => actor.id)) }
        />
        <Select className="filter-option"
          getOptionLabel={option => option.title} 
          getOptionValue={option => option.id} 
          options={genres} 
          instanceId="genres" 
          placeholder="Filter by Genres"
          // onChange={value => handleGenre(value.id)}
          onChange={value => setGenreId(value.id)}
        />
      </div>
     
        {status === 'loading' && <div className="filter_status">Loading your movies...</div>}
        {status === 'error' && <div className="filter_status">Something went wrong...</div>}

      <div className='container'>
         {/* {movies && movies.map(movie => { */}
        {/* {data.data && data.data.map(movie => { */}
        {status === 'success' && data.data && data.data.map(movie => {
          return (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          )
        })}
      </div>
    </>
  )
}



export const getServerSideProps = async () => {

  const response = await axios(`${process.env.API_URL}/movies`);
  // console.log(response)

  const resActors = await axios(`${process.env.API_URL}/actors`);
  // console.log(resActors)

  const resGenres = await axios(`${process.env.API_URL}/genres`);
  // console.log(resGenres)

  return {
    props: {
      movies: response.data,
      actors: resActors.data,
      genres: resGenres.data
    }
  }
}



export default FilterMovies;
