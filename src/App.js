import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        {/* <Route exact path = '/' element = {<Home />} /> */}
        <Route path = '/people/:id' element = {<People />} />
        <Route path = '/planets/:id' element = {<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
