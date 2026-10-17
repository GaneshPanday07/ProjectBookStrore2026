import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaUserEdit,
  FaBuilding,
  FaArrowRight,
  
} from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_URL;

function HomeCard() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: apiUrl + "/user/books",
      method: "get",
    })
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  function goToDetailPage(id) {
    navigate("/user/book/detail/" + id);
  }
  return (
    <>
      <Container fluid className="py-5 px-3 px-md-4">
        <ImageSlider></ImageSlider>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <div
              className="d-flex align-items-center gap-2 mb-2"
              style={{ color: "#198754" }}
            >
              <FaBookOpen />
              <span className="fw-semibold">OUR COLLECTION</span>
            </div>

            <h2
              className="fw-bold mb-1"
              style={{
                fontSize: "30px",
                color: "#212529",
              }}
            >
              Explore Books
            </h2>

            <p className="text-muted mb-0">
              Discover your next favorite book from our collection.
            </p>
          </div>
        </div>

        {/* Books */}
        <Row className="g-4">
          {books.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card
                onClick={() => goToDetailPage(book._id)}
                className="h-100 border-0"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.07)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0, 0, 0, 0.13)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.07)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: "250px",
                    background: "linear-gradient(135deg, #f8f9fa, #eef2f3)",
                    padding: "18px",
                    position: "relative",
                  }}
                >
                  <img
                    src={book.bookImage}
                    alt={book.bookTittle}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />

                  {/* Book Badge */}
                  <div
                    className="position-absolute top-0 end-0 m-3"
                    style={{
                      background: "#198754",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    BOOK
                  </div>
                </div>

                {/* Content */}
                <Card.Body className="p-4 d-flex flex-column">
                  {/* Title */}
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.4",
                      color: "#212529",
                      minHeight: "50px",
                    }}
                  >
                    {book.bookTittle}
                  </h5>

                  {/* Author */}
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="d-flex align-items-center justify-content-center me-2"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#e8f5e9",
                        color: "#198754",
                        fontSize: "12px",
                      }}
                    >
                      <FaUserEdit />
                    </div>

                    <div>
                      <small className="text-muted d-block">Author</small>

                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {book.authorName}
                      </span>
                    </div>
                  </div>

                  {/* Publication */}
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-2"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#e8f5e9",
                        color: "#198754",
                        fontSize: "12px",
                      }}
                    >
                      <FaBuilding />
                    </div>

                    <div>
                      <small className="text-muted d-block">Publication</small>

                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {book.publication}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr
                    className="mt-auto mb-3"
                    style={{
                      borderColor: "#e9ecef",
                    }}
                  />

                  {/* Price + Button */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <small className="text-muted d-block">Price</small>

                      <span
                        className="fw-bold"
                        style={{
                          fontSize: "21px",
                          color: "#198754",
                        }}
                      >
                        ₹{book.originalPrice}
                      </span>
                    </div>

                    <Button
                      variant="success"
                      className="d-flex align-items-center justify-content-center gap-2"
                      style={{
                        borderRadius: "9px",
                        padding: "9px 13px",
                        fontWeight: "600",
                        fontSize: "13px",
                      }}
                    >
                      <FaBookOpen />
                      View
                      <FaArrowRight
                        style={{
                          fontSize: "11px",
                        }}
                      />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {books.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              background: "#f8f9fa",
              borderRadius: "16px",
              marginTop: "20px",
            }}
          >
            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#e8f5e9",
                color: "#198754",
                fontSize: "28px",
              }}
            >
              <FaBookOpen />
            </div>

            <h5 className="mt-3 fw-bold">No Books Available</h5>

            <p className="text-muted mb-0">
              Books will appear here once they are added.
            </p>
          </div>
        )}
      </Container>
    </>
  );
}

export default HomeCard;
