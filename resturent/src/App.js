import React,{Fragment,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meels/Meals';
import Cart from './component/Cart/cart';



function App() {
   const [cartIsShown,setCartIsShown]= useState(false);


   const ShowCartHandler=()=>{
    setCartIsShown(true);
   }
   const HideCartHandler=()=>{
    setCartIsShown(false);
   }
  return (
    
    <Fragment >
      { cartIsShown &&  <Cart onClose={HideCartHandler}/>}
     <Header onShowCart={ShowCartHandler}/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
