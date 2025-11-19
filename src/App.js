import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Match from "./Pages/Match";
import Payment from "./Pages/Payment";
import Platform from "./Pages/Platform";
import Premium from "./Pages/Premium";
import Profile from "./Pages/Profile";
import Story from "./Pages/Story";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Match" element={<Match />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Platform" element={<Platform />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Story" element={<Story />} />        
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
