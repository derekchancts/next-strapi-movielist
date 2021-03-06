import axios from 'axios';
import Card from '../components/Card';
// import styles from '../styles/Home.module.css'
// import { Flex, Box } from 'reflexbox'

// import { withTranslation } from '../i18n';

import propTypes from 'prop-types';



 const Home = ({ movies }) => {
  // console.log(movies);
  return (
    <div className='container'>
    {/* <h2>{t('Latest Movies')}</h2> */}
      {movies && movies.map(movie => {
        return (
          <Card key={movie.id} movie={movie} />
        )
      })}
    </div>
  )
};


Home.propTypes = {
  movies: propTypes.array.isRequired,
}



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



// export default withTranslation()(Home);
export default Home;