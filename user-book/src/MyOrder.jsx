import { useState, useEffect} from "react"
import axios from "axios"
import { Container, Row, Col, Table } from "react-bootstrap"
const apiUrl = import.meta.env.VITE_API_URL
const MyOrder = () => {
    let [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        let isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn){
            let email = localStorage.getItem('email')
            let data = {
                email: email
            }
            axios({
                url: apiUrl + '/my/orders',
                method: 'post',
                data: data
            }).then((res)=> {
                setMyOrders(res.data.data)
            }).catch((err) => {
                alert(err.message)
            })
        }else{
            alert('please Login to view your orders')
        }
    },[])
    return (
      <Container>
        <Row className="text-center text-danger mt-4">
          <h1>Myorder List</h1>
          <Col>
            <Table>
                <thead>
                    <th></th>    
                </thead>    
            </Table>          
          </Col>
        </Row>
      </Container>
    );
}
export default MyOrder