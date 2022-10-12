import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Secondpage from './Secondpage';
import Errorpage from './Errorpage';
import Profile from './Profile';
function App() {
  return (
    <Router>
      <nav>
      <Link to="/">Home </Link>
      <Link to="/Secondpage">Second-page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:username" element={<Profile/>}/>
        <Route path="/:username/:age" element={<Profile/>}/>
        <Route path="/Secondpage" element={<Secondpage/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </Router>

  );
}

export default App;
