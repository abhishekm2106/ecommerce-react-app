import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage.components';


const Hats = (props) => {
  console.log(props);
  return (
    <div>
    <h1>Hats</h1>
  </div>
  )
}
  



function App() {
  return (
    <div>
      <Switch>
      <Route exact={true} path='/' component={HomePage}/>
      <Route path = '/hats' component = {Hats} />
      </Switch>
      
    </div>
  );
}

export default App;
