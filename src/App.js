import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routes,} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </Routes>      
    </div>
  );
}

export default App;
