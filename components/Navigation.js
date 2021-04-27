import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';


// const Navigation = ({ navigation }) => {
const Navigation = () => {
  const router = useRouter();
  // console.log(router)

  const { menuItems, color } = useContext(HeaderContext);

  return (
    <NavigationStyled color1={color}>
      <ul>
        {/* <li>
          <Link  href="/about"><a className={router.pathname === '/about' ? 'active' : ''}>About</a></Link>
        </li>
        <li>
          <Link  href="/blog"><a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a></Link>
        </li>
        <li>
          <Link  href="/contact"><a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a></Link>
        </li> */}
        {/* {navigation && navigation.map(item => ( */}
        {menuItems && menuItems.map(item => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
            </Link>
          </li>
        ))}
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
            margin-left: 10px;
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
    }
`;

export default Navigation
