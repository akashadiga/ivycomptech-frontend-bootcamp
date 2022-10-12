import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Protected from "./Protected";
import About from "./About";


function App() {
 const [isLoggedIn, setisLoggedIn] = useState(false);
 const logIn = () => {
 setisLoggedIn(true);
 };
 const logOut = () => {
 setisLoggedIn(false);
 };
 return (
 <BrowserRouter>
 <Navbar />
 {isLoggedIn ? (
 <button onClick={logOut}>Logout</button>
 ) : (
 <button onClick={logIn}>Login</button>
 )}
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/profile' element={<Protected isLoggedIn={isLoggedIn}><Profile /></Protected>}/>
 <Route path='/About' element={<Protected isLoggedIn={isLoggedIn}><About /></Protected>}/>
 </Routes>
 </BrowserRouter>
 );
}
export default App;