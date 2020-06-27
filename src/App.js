import React from 'react';
import SimpleBottomNavigation from './components/Navigation'
import Appbar from './components/Appbar'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className>
      <Appbar></Appbar>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      <AddProduct></AddProduct>
    </div>
  );
}

export default App;
