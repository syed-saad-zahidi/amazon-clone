import React , {useEffect} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import Checkout from './Components/Checkout';
import Login from './Components/Login '
import './App.css';
import {auth } from './firebase';
import {useStateValue } from './Components/StateProvider'

function App() {
  const [{} , dispatch] = useStateValue();
   useEffect(()=> {
    auth.onAuthStateChanged(authUser =>{
      console.log('the user is logged in .. ' , authUser)

      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch ({
          type:'SET_USER',
          user: authUser
        })
      
      }
      else {
        // the user is logged out 
       dispatch({
         type:'SET_USER',
         user: null
       })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/login">
        <Login / >
        </Route>
        <Route path="/checkout">
        <Header />
         <Checkout />
        </Route>
       <Route path="/">
       <Header />
    <Home />
       
         </Route>
        
      
      </Switch>



    
    </div>
    </Router>
  );
}

export default App;
