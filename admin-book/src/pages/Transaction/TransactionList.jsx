import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Row, Col, Table } from "react-bootstrap";
const apiUrl = import.meta.env.VITE_API_URL;

const TransactionList = () => {
    let [transactions, setTransactions] = useState([])
    useEffect(() => {
        axios({
            url: apiUrl + '/transactions',
            method: "get",
        }).then((res) => {
            setTransactions(res.data.data)
        }).catch((err) => {
            alert(err.message)
        })
    }, [])
    return (
      <Container>
        <Row>
          <Col>
            <h3 className="text-center text-danger">Transaction List</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>Email Id</th>
                  <td>Products</td>
                  <td>Amount</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr>
                    <td>{transaction.transactionId}</td>
                    <td>{transaction.email}</td>
                    <td>{transaction.products[0].bookTittle}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
}
export default TransactionList