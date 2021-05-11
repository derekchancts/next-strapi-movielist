import { NextSeo } from 'next-seo';
import axios from 'axios';


const About = ({ pages }) => {
  // console.log(pages)

  const SEO = {
    title: 'About page',
    description: 'Just a normal about page',

    openGraph: {
      title: 'About page',
      description: 'Just a normal about page',
    }
  };

  return (
    <div className='page_container'>
      <NextSeo {...SEO} />
      {/* <h1>About Page</h1> */}
      <div className="page">
        <ul>
          {pages && pages.map(page => (
            <li key={page.id}>
              <h1>{page.title}</h1>
              <p>{page.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}



export const getStaticProps = async () => {

  // const data = await axios('http://128.199.174.226:1337/pages');
  const data = await axios(`${process.env.API_URL}/pages`);
  // console.log(data.data)

  return {
    props: {
      pages: data.data
    },
    revalidate: 1
  }
};




export default About;
