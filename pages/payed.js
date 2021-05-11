import axios from 'axios';
import { parseCookies } from 'nookies'
import Link from 'next/link';


const Payed = ({ articles }) => {
  // console.log(articles)

  return (
    <div className='page_container'>
      <h1 className='article'>This is Payed Articles Page</h1>
      {
        !articles ? (
          <>
            <p className="no-data">You need to login to access this page </p>
            <p className="no-data"><Link href="/login"><a>Click here to Login</a></Link> </p>
          </>
          ) : (
          <div className="page">
        <ul>
          {articles && articles.map(article => (
            <li key={article.id}>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      </div>
        )
      }
    </div>
  )
}



// // export const getStaticProps = async () => {
// export const getStaticProps = async () => {
export const getServerSideProps = async (ctx) => {

  let articles = {
    data: null
  }

  // const test = parseCookies(ctx);
  // console.log(test)

 
  if (parseCookies(ctx).jwt !== undefined) {
    const jwt = parseCookies(ctx).jwt;
    const parsed_jwt = JSON.parse(jwt)
    // console.log(parsed_jwt);
  
  
    articles = await axios(`${process.env.API_URL}/payed-articles`, {
      headers: {
        Authorization: `Bearer ${parsed_jwt.jwt}`
      }
    });
  }


   // console.log(articles)


  // const { data } = await axios.post(`${process.env.API_URL}/auth/local`, {
  //   identifier: process.env.IDENTIFIER,
  //   password: process.env.PASSWORD,
  // });
  // console.log(data);

  
  // const articles = await axios(`${process.env.API_URL}/payed-articles`, {
  //   headers: {
  //     Authorization: `Bearer ${data.jwt}`
  //   }
  // });
  // console.log(articles.data)

  return {
    props: {
      articles: articles.data
    }
  }
};


export default Payed
