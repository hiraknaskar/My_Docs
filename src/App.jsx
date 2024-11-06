import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/SignUp/Register";
import Home from "./pages/Home/Home";

const routes = (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/dashbord" element={<Home />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

// function App() {
//   return (
//     <>
//       <div className='relative w-full h-screen bg-zinc-800'>
//         <Router>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/Register" element={<Register />} />
//             <Route path="/foreground" element={<Foreground />} />
//           </Routes>
//           <Bg />
//         </Router>
//       </div>
//     </>
//   );
// }

export default App;
