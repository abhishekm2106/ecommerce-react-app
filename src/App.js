import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';





function App() {
  return (
    <div>
      <Switch>
      <Route exact={true} path='/' component={HomePage}/>
      <Route exact={true} path = '/shop' component = {ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
