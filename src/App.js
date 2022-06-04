import {BrowserRouter as Router, Switch, Route, Routes,Link} from "react-router-dom";
import './App.css';
import Main from'./Main'
import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route path='/login'>
             <Login />
           </Route>
           <Route path='/dashboard'>
             <Dashboard />
           </Route>
           <Route path='/main'>
             <Main />
           </Route>
           <Route path={'/signup'}>
             <Signup />
           </Route>
           <Route path='/'>
             <Home />
           </Route>
         </Switch>
       </Router>
      
    </div>
  );
}

export default App;
