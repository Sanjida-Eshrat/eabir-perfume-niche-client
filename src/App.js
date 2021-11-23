import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ProductOrder from './components/Dashboard/ProductOrder/ProductOrder';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Explore from './components/Explore/Explore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/explore'>
              <Header></Header>
              <Explore></Explore>
              <Footer></Footer>
            </Route>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>


            <PrivateRoute path="/productOrder/:productId">
                <Header></Header>
                <ProductOrder></ProductOrder>
                <Footer></Footer>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>

          </Switch>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
