import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
            </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
