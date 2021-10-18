import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Deatils from "./Pages/Datails/Deatils";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NavSection from "./Pages/Home/NavSection/NavSection";
import Login from "./Pages/Login/Login";
import Shop from "./Pages/Shop/Shop";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavSection></NavSection>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/details">
            <Deatils></Deatils>
          </Route>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
