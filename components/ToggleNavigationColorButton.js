import { useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';
import styled from '@emotion/styled';


const ToggleNavigationColorButton = () => {

  const { color, setColor } = useContext(HeaderContext);

  return (
    <ButtonStyled >
      <button onClick={() => setColor(!color)} >
        Toggle Nav Color
      </button>
      <button className="btn"onClick={() => setColor(prevState => !prevState)} >
        Toggle Navi Color2
      </button>
    </ButtonStyled>
  )
}


const ButtonStyled = styled.div`
  .btn {
    margin-left: 25px;
  }
`;


export default ToggleNavigationColorButton
