import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';

import { useCookies } from "react-cookie"
import jwt_decode from "jwt-decode";
import { destroyCookie, parseCookies } from 'nookies'



const Navigation = ({ navigation }) => {
// const Navigation = () => {
  const [cookie, setCookie] = useCookies(["jwt"])
  const [decodedToken, setdecodedToken] = useState('');
  const [user, setUser] = useState('')

  const router = useRouter();
  // console.log(router)



  // let decodedToken;

  useEffect(() => {
    // console.log(cookie.jwt)
    if (cookie.jwt) {
      // decodedToken = jwt_decode(cookie.jwt.jwt);
      setdecodedToken(jwt_decode(cookie.jwt.jwt));
      console.log("Decoded Token", decodedToken);

      // JWT exp is in seconds
        if (decodedToken.exp * 1000 < Date.now()) {
          console.log("Token expired.");
        } else {
          console.log("Valid token");  
          // router.push('/payed') 
        }
    }
  }, [cookie])



  const handleLogout = async () => {
    await destroyCookie(null, 'jwt');
    setCookie(null);
    window.location.href=('/');
    // await window.location.reload();
    // await router.push('/login')
  }



  const { menuItems, color } = useContext(HeaderContext);

  return (
    <NavigationStyled color1={color}>
      <ul>
        <li>
          <Link  href="/about"><a className={router.pathname === '/about' ? 'active' : ''}>About</a></Link>
        </li>
        {/* <li>
          <Link  href="/blog"><a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a></Link>
        </li> */}
        <li>
          <Link  href="/contact"><a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a></Link>
        </li> 
        <li>
          <Link  href="/movies"><a className={router.pathname === '/movies' ? 'active' : ''}>Pagination</a></Link>
        </li> 
        <li>
          <Link  href="/payed"><a className={router.pathname === '/payed' ? 'active' : ''}>Payed Articles</a></Link>
        </li> 
        <li>
          <Link  href="/filter-movies"><a className={router.pathname === '/filter-movies' ? 'active' : ''}>Filter Movies</a></Link>
        </li> 
        {
          (decodedToken.exp * 1000 < Date.now() || decodedToken === '') ? (
          <>
            <li>
              <Link href="/login"><a className='login'>Login</a></Link>
            </li>
            <li>
              <Link href="/register"><a className='login'>Register</a></Link>
            </li>
          </>
          ) : (
            <>
              <li>
                <Link  href="/add-movie"><a className={router.pathname === '/add-movie' ? 'active' : ''}>Add Movie</a></Link>
              </li> 
              <button className='logout' onClick={() => handleLogout()}>Logout</button>
            </>
          )
        }
        {/* {navigation && navigation.map(item => ( */}
         {/* {menuItems && menuItems.map(item => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
            </Link>
          </li>
        ))} */}
      </ul>
    </NavigationStyled>
  )
};


const NavigationStyled = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        

        li {
            margin-left: 15px; 
            padding-top: 10px;
        }

        a {
            text-decoration: none;
            /* color: #4C9EE3; */
            color: ${props => props.color1 ? '#4C9EE3' : '#000000' };

            &:hover {
              text-decoration: underline;
            }

            &:active {
              color: #EF6800;
            }

            &.active {
              color: #EF6800;
            }
        }

        .login {
          color: white;
          padding: 0.5rem;
          background-color: #EF6800;
          border-radius: 0.5rem;
        }

        .logout {
          color: white;
          padding: 0.5rem;
          background-color: #EF6800;
          border-radius: 0.5rem;
          margin-left: 10px;

          &:hover {
            text-decoration: underline;
          }
        }

    }
`;



export const getServerSideProps = async (ctx) => {

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


  return {
    props: {
      user
    }
  }
}





export default Navigation
