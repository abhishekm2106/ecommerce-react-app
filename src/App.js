import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';

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
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path = '/shop' component = {ShopPage} />
          <Route exact={true} path = '/signin' component = {SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);
