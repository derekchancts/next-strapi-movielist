import axios from 'axios';
import Card from '../components/Card';
// import styles from '../styles/Home.module.css'
// import { Flex, Box } from 'reflexbox'


 const Home = ({ movies }) => {
  // console.log(movies);
  return (
    <div className='container'>
    {/* <Flex> */}
      {movies && movies.map(movie => {
        return (
          <Card key={movie.id} movie={movie} />
        )
      })}
    {/* </Flex> */}
    </div>
  )
};


export const getServerSideProps = async () => {

  const { API_URL } = process.env;
  // const response = await axios('http://localhost:1337/movies');
  const response = await axios(`${API_URL}/movies`);
  // console.log(response.data)

  return {
    props: {
      movies: response.data
    }
  }
};



export default Home;