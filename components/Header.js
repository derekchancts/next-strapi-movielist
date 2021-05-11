import styled from '@emotion/styled';
import { rem } from 'polished';
import Navigation from './Navigation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ToggleNavigationColorButton from './ToggleNavigationColorButton';

 

const Header = ({ isDark, navigation }) => {
// const Header = ({ isDark }) => {
  const router = useRouter();

  return (
    <HeaderStyled isDark={isDark}>
      <div className="Headercontainer">
        <div className="logo">
          <img src="/images/logo.svg" alt="Sites logo" />
          <span className="logo-text">
            {/* <Link href='/'><a className={router.pathname === '/' ? 'active' : ''}>Next Movies</a></Link> */}
            <Link href='/'><a>Next Movies</a></Link>
          </span>
        </div>
        <Navigation navigation={navigation} />
        {/* <Navigation /> */}
        {/* <ToggleNavigationColorButton  /> */}
      </div>
    </HeaderStyled>
  )
};


const HeaderStyled = styled.header`
  // background: ${props => props.theme.colors.primary};
  /* background: #efefef; */
  background: ${props => props.isDark ? '#000000' : '#efefef' };
  padding: 20px;

  .Headercontainer {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
            
    .logo {
      display: flex;
      align-items: center;

      .logo-text {
        color: #333333;
        font-weight: bold;
        /* font-size: 20px; */
        font-size: ${rem(20)};
        margin-left: 20px;

        a {
          text-decoration: none;
          color: #111;

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
    }

  }
`;



export default Header
