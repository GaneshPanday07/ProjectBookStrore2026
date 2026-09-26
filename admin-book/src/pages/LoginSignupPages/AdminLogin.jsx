
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
  Image,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logo.png";


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      setShowSpinner(true);

      const res = await axios.post(
        "http://localhost:3000/admin/login",
        {
          email,
          password,
        }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("name", res.data.data.firstName);

        window.location.href = "/admin/dashboard";
      } else {
        setErrorMsg(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      setErrorMsg("Server error. Please try again.");
    } finally {
      setShowSpinner(false);
    }
  }

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
      
    >
      <Row className="w-100 justify-content-center position-relative">

        <Col xs={11} sm={8} md={6} lg={4} xl={4}>

          <Card
            className="border-0 shadow-lg"
            style={{
              borderRadius: "24px",
              background: "rgba(228, 225, 225, 0.96)",
              backdropFilter: "blur(15px)",
            }}
          >

            <Card.Body className="p-4 p-md-5">

              {/* Logo */}
              <div className="text-center mb-4">

                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "105px",
                    height: "105px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    padding: "5px",
                    boxShadow:
                      "0 10px 30px rgba(79, 70, 229, 0.35)",
                  }}
                >
                  <Image
                    src={logo}
                    roundedCircle
                    style={{
                      width: "95px",
                      height: "95px",
                      objectFit: "cover",
                      border: "4px solid white",
                    }}
                  />
                </div>

                <h2 className="fw-bold mt-4 mb-1">
                  Welcome Back
                </h2>

                <p className="text-muted mb-0">
                  Sign in to your Admin Dashboard
                </p>

              </div>

              {/* Error Message */}
              {errorMsg && (
                <div
                  className="alert alert-danger py-2 text-center"
                  style={{
                    borderRadius: "10px",
                    fontSize: "14px",
                  }}
                >
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {errorMsg}
                </div>
              )}

              <Form onSubmit={handleLogin}>

                {/* Email */}
                <Form.Group className="mb-3" controlId="adminEmail">

                  <Form.Label className="fw-semibold">
                    Email Address
                  </Form.Label>

                  <div className="position-relative">

                    <i
                      className="bi bi-envelope position-absolute"
                      style={{
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#6366f1",
                        zIndex: 5,
                      }}
                    ></i>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2 ps-5"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #dbeafe",
                      }}
                    />

                  </div>

                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-4" controlId="adminPassword">

                  <Form.Label className="fw-semibold">
                    Password
                  </Form.Label>

                  <div className="position-relative">

                    <i
                      className="bi bi-lock position-absolute"
                      style={{
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#6366f1",
                        zIndex: 5,
                      }}
                    ></i>

                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2 ps-5 pe-5"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #dbeafe",
                      }}
                    />

                    <i
                      className={`bi ${
                        showPassword
                          ? "bi-eye-slash"
                          : "bi-eye"
                      } position-absolute`}
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#64748b",
                        zIndex: 5,
                      }}
                    ></i>

                  </div>

                </Form.Group>

                {/* Login Button */}
                <div className="d-grid">

                  <Button
                    type="submit"
                    disabled={showSpinner}
                    className="border-0 py-2 fw-semibold"
                    style={{
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, #4f46e5, #7c3aed)",
                      boxShadow:
                        "0 8px 20px rgba(79, 70, 229, 0.30)",
                    }}
                  >
                    {showSpinner ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Login
                      </>
                    )}
                  </Button>

                </div>

              </Form>

              {/* Footer */}
              <div className="text-center mt-4">

                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Secure Admin Access
                </small>

                <div className="mt-2">
                  <small className="text-muted">
                    © 2026 ERP Management System
                  </small>
                </div>

              </div>

            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;

