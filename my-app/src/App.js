import { Navbar, Nav, Container } from "react-bootstrap";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Users, About } from "./components";
import registerSw from "./registerSw";
import AlertOffline from "./components/AlertOffline";
import { useEffect, useState } from "react";
import Post from "./components/Post";
function App() {
  let [onLine, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };
    const handleOffline = () => {
      setOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link> */}
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link> */}
              {/* <Link className="nav-link" to="/about">
                  Link1
                </Link> */}
              {/* </Nav.Link> */}
              {/* <Nav.Link> */}
              <Link className="nav-link" to="/users">
                Users
              </Link>
              {/* </Nav.Link> */}
              <Link className="nav-link" to={"/post"}>
                Post
              </Link>
            </Nav>
          </Container>
        </Navbar>
        {!onLine && <AlertOffline />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/post" element={<Post onLine={onLine} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
registerSw();
export default App;
