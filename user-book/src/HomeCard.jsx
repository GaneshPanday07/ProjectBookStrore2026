import axios from 'axios'
import { useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import ImageSlider from './ImageSlider.jsx'
import Footer from './Footer.jsx'
const apiUrl = import.meta.env.VITE_API_URL
function HomeCard() {
    let [books, setBooks] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        axios({
            url: apiUrl + '/user/books',
            method: 'get',
        }).then((res) => {
            setBooks(res.data.data)
        })
        .catch((err) => {
            alert('err...')
        })
    }, [])

    function goToDetailPage(id) {
        navigate("/user/book/detail/" + id)
    }
    return(
        <Container fluid>
            <ImageSlider />
            <Row>
                {
                    books.map((book, index) => 
                        <Col key={index} lg={3} className="mt-3">
                            <Card style={{ width: '18rem' }} onClick={() => goToDetailPage(book._id)}>
                                <Card.Img src={book.bookImage} height="200px" width="200px"></Card.Img>
                                <Card.Body>
                                    <Card.Title>{book.bookTitle}</Card.Title>
                                    <Card.Text>
                                        { book.authorName},<br></br>
                                        &#x20b9;{ book.price }
                                        { book.publisher }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Footer />
        </Container>
    )
}
export default HomeCard