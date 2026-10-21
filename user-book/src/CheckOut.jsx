import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import { useState } from "react"

const CheckOut = () => {
    const { products, totalCost } = useSelector((state) => state.cart);
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [mobileNo, setMobileNo] = useState('')
    let [addresLine1, setAddressLine1] = useState('')
    let [addresLine2, setAddressLine2] = useState("")
    let [city, setCity] = useState('')
    let [state, setState] = useState('')
    let [Country, setCountry] = useState('')
    let [pinCode, setPinCode] = useState('')
    let [amount, setAmount] = useState(0)

    return (
      <Container>
        <Row>
          <Col>
            <h3 className="text-center text-danger mt-5">Shipping Details</h3>
            <Form className="mt-4">
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setMobileNo(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <h5 className="mt-3 text-primary">Shipping Address:</h5>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAddressLine1(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mt-2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAddressLine2(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setState(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setPinCode(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h3 className="text-center text-danger mt-5">Product Summary</h3>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>Book Image</th>
                  <th>Book Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td>
                      <img
                        src={product.bookImage}
                        heigth="30px"
                        width="30px"
                      ></img>
                    </td>
                    <td>{product.bookTittle}</td>
                    <td>₹{product.originalPrice}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td>TotalCost</td>
                  <td>₹{totalCost}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <Button
              style={{ width: "250px", float: "right" }}
              size="lg"
              variant="warning"
            >
              Pay Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
}
export default CheckOut