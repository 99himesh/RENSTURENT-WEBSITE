import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meels/Meals';



function App() {
  return (
    <Fragment >
     <Header/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
