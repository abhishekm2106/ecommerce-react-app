import './App.css';
import React from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'
import  Checkout  from './pages/checkout/checkout.component'


class App extends React.Component {

  unsubscibeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path = '/shop' component = {ShopPage} />
          <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)}  />
          <Route exact path = '/checkout' component={Checkout}/>
        </Switch>
        <div className='credits'>© Abhishek M</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
