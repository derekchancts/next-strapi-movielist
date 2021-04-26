import { NextSeo } from 'next-seo';



const About = () => {

  const SEO = {
    title: 'About page',
    description: 'Just a normal about page',

    openGraph: {
      title: 'About page',
      description: 'Just a normal about page',
    }
  };

  return (
    <div>
      <NextSeo {...SEO} />
      <h1>About Page</h1>
    </div>
  )
}

export default About
