import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Chat from './Chat';
import Errorpage from './Errorpage';
import Friends from './Friends';
import Home from './Home';
import Videos from './Videos';

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};


export default function App() {
  return (
    <Router>
    <nav>
    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/>
    <input placeholder='Search...'></input>
    <Link to="/Home" id="abc">Home </Link>
    <Link to="/Chat" id="abc">Facebook Messenger</Link>
    <Link to="/Friends" id="abc">Friends list </Link>
    <Link to="/Videos" id="abc">Videos </Link>
    </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Chat" element={<Chat/>}/>
      <Route path="/Friends" element={<Friends/>}/>
      <Route path="/Videos" element={<Videos/>}/>
      <Route path="*" element={<Errorpage/>}/>
    </Routes>
    <footer style={style}>
        <div> coppyrights reserved.</div>
    </footer>
  </Router>
   
  );
}


