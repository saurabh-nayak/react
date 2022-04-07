import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import Routing from './Routing';
import Statebind from './statebind';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<App />}/>
          <Route path="home" element={ <Home/>} />
          <Route path="route" element={ <Routing/>} />
          <Route path="state" element={ <Statebind/>} />
        </Routes>
    </Router>
    <h1>Hello World</h1>
    <button className='btn btn-danger'>Click Me</button>
    </>
  );
}

export default App;
