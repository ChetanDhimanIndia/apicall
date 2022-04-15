import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Components/Login/Login";
import Users from "./Components/Users/Users";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Users />
    </div>
  );
}

export default App;
