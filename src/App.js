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
import StoryPage from "./Pages/StoryPage";

import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Protected pages */}
        <Route
          path="/Chat"
          element={<ProtectedRoute><Chat /></ProtectedRoute>}
        />
        
        <Route
          path="/Match"
          element={<ProtectedRoute><Match /></ProtectedRoute>}
        />

        <Route
          path="/Payment"
          element={<ProtectedRoute><Payment /></ProtectedRoute>}
        />

        <Route
          path="/Platform"
          element={<ProtectedRoute><Platform /></ProtectedRoute>}
        />

        <Route
          path="/Premium"
          element={<ProtectedRoute><Premium /></ProtectedRoute>}
        />

        <Route
          path="/Profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />

        <Route
          path="/StoryPage"
          element={<ProtectedRoute><StoryPage /></ProtectedRoute>}
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
