import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meels/Meals';
import Cart from './component/Cart/cart';



function App() {
  return (
    
    <Fragment >
       <Cart/>
     <Header/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
