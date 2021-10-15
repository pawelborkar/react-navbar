import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Report from './pages/Report'
import Product from './pages/Product'
import Messages from './pages/Messages'
import Teams from './pages/Teams'
import Support from './pages/Support'

function App() {
    return (<>
    <Router>
    <Navbar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/report' component={Report} />
            <Route path='/product' component={Product} />
            <Route path='/messages' component={Messages} />
            <Route path='/teams' component={Teams} />
            <Route path='/support' component={Support} />
        </Switch>
    </Router>
      
    </>);
}

export default App;
