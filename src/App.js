import React from 'react';

import SimpleBottomNavigation from './components/Navigation'
import Appbar from './components/Appbar'
import AddProduct from './components/AddProduct'
import { GlobalProvider } from './state/GlobalState'
import Shop from './components/Shop'
import Cart from './components/Cart'
 
function App() {
  return (
    <div>
      <Appbar></Appbar>
      <GlobalProvider>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      <AddProduct></AddProduct>
      <Cart></Cart>
      <Shop></Shop>
      </GlobalProvider>
    </div>
  );
}

export default App;
