
import Header from '../components/Header';
// import '../styles/globals.css';
// import { ThemeProvider } from 'emotion-theming';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import getConfig from 'next/config';
import axios from 'axios';


const theme = {
  colors: {
    primary: '#ff0000'
  }
}


function MyApp({ Component, pageProps, navigation }) {
  // console.log(navigation)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header isDark /> */}
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}


const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()
  // const res = await axios(`${publicRuntimeConfig.API_URL}/navigations`)
  // const navigation = await res.json()

  return { navigation }
}


export default MyApp
