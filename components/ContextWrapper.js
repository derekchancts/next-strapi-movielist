import HeaderContext from '../contexts/HeaderContext';
import { useState } from 'react';


function ContextWrapper({ children, navigation }) {
  const [menuItems, setMenuItems] = useState(navigation);
  const [color, setColor] = useState(true);


  return (
    <HeaderContext.Provider value={{ menuItems, color, setColor }}>
      {children}
    </HeaderContext.Provider>
  )

}


export default ContextWrapper;