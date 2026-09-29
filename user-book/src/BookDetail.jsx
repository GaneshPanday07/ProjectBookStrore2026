import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL
function BookDetail() {
    let [book, setBook] = useState();
    let params = useParams();
    let id = params.id;

    

    useEffect(() => {
        axios({
            url: apiUrl + '/user/book/' + id,
            method: 'get'
        }).then((res) => {
            setBook(res.data.data)
        }).catch((err) => {
            alert(err.message)
        })
    },[])

    return(
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={4}>
                        <img src={book.bookImage} height="300px" width="300px"></img>
                        <Button ClassName="mt-2 w-100 text-dark" size={{ width: "300px"}} variant="warning">Add To Card</Button>
                    </Col>
                    <Col >
                        <h5 style={{ color: 'grey'}}>Node Js</h5>
                        <h6 style={{ color: 'grey'}}>Author Name</h6>
                        <h4>Product HeightLights</h4>
                        <h5>Price: <span className="mt-1" style={{ color: 'grey'}}>22</span></h5>
                        <h5>Short Description: <span className="mt-1" style={{ color: 'grey'}}>Good Book</span></h5>
                        <h5>Long Description: <span className="mt-1" style={{ color: 'grey'}}>Very Good Book</span></h5>
                        <h5>Published By: <span className="mt-1" style={{ color: 'grey'}}></span>Delhi</h5>
                        <h5>Published Year: <span className="mt-1" style={{ color: 'grey'}}>2026</span></h5>
                        <h5>Edition: <span className="mt-1" style={{ color: 'grey'}}>First</span></h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BookDetail