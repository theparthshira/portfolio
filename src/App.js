import "./App.css";
import Navbar from "./components/Navbar";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <MainApp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
