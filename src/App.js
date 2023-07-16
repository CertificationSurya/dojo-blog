import Navbar from './navbar';
import Home from './Home';

// router package
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


// Root Component
function App() {
  // js works


  // jsx works
  return (

    // Router routes the components.
    // switch assure us that only one component will be shown among the nested components in Switch by using "Route" component
    // The "Route" contains "path" which will show the component nested in Route if brower address match the "Route" path

    // React router doesn't search all if it finds a match.
    // Meaning "/" is in "/create". So, it thinks that "/create" is a match to "/". To avoid such bug, we put exact in the route

    

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            {/* Router parameter ":routerVariableName" */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            {/* adding 404 route */}
            
            {/* '*' means catch any route */}
            {/* As it is in button the route completes it's search in up routes and don't find a match then the route check this one and does it's thing */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
