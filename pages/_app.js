
import Header from '../components/Header';
// import '../styles/globals.css';
// import { ThemeProvider } from 'emotion-theming';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import getConfig from 'next/config';
import axios from 'axios';

import { DefaultSeo } from 'next-seo';
import SEO from '../next.seo.config';

import ContextWrapper from '../components/ContextWrapper';



const theme = {
  colors: {
    primary: '#ff0000'
  }
}


function MyApp({ Component, pageProps, navigation }) {
  // console.log(navigation)
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header isDark /> */}
        <ContextWrapper navigation={navigation}>
          {/* <Header navigation={navigation} /> */}
          <Header  />
          </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}



/*
const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()
  // const res = await axios(`${publicRuntimeConfig.API_URL}/navigations`)
  // const navigation = await res.json()

  return { navigation }
}
*/


/*
export const getServerSideProps = async () => {

  const { API_URL } = process.env;
  const navigation = await axios(`${API_URL}/navigations`);
  console.log(navigation)

  return {
    props: {
      navigation
    }
  }
};
*/


export default MyApp
