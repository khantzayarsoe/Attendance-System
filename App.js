// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./Components/Menu";
// import Container from "./Components/Container";
// // import Message from "./Components/Message";
// // import Calendar from "./Components/Calendar";
// // import Profile from "./Components/Profile";
// // import Dashboard from "./Components/Dashboard";
// // import MainContainer from "./Components/MainContainer";
// // import TopContainer from "./Components/TopContainer";

// function App() {
//   return (
//     <div className="App">
//       <Menu />
//       <Container />
//     </div>
//   );
// }

// export default App;

// newcomp

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Message from "./Components/Message";
import Calendar from "./Components/Calendar";
import Settings from "./Components/Settings";
import Logout from "./Components/Logouts";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<MainContainer />} />
            <Route path="dashboard" element={<MainContainer />} />
            <Route path="profile" element={<Profile />} />
            <Route path="message" element={<Message />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<Settings />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
