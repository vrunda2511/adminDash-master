import { BrowserRouter as Router, Switch, Route,useHistory  } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Service from "./Views/Service"
import Subservice from "./Views/Subservice"
import Order from "./Views/Order"
import Feedback from "./Views/Feedback"
import Customer from "./Views/Customer"
import SignIN from "./Views/signin";
import SignUp from "./Views/SignUp";

function App() {
 
  return (
       <>
        <Router>
        <Navbar/>

          <Switch>
            <Route path="/Signin" exact component={SignIN} />
            <Route path="/Signup" exact component={SignUp} />

            <Route path="/" exact component={Service} />
            <Route path="/subservice" component={Subservice} />
            <Route path="/order" component={Order} />
            <Route path="/customer" component={Customer} />
            <Route path="/feedback" component={Feedback} />
  
          </Switch>
        </Router>
      </>
    )
}

export default App;
