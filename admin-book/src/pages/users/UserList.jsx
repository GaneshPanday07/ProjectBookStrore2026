import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button} from "react-bootstrap";
import { FaTrash, FaEdit } from 'react-icons/fa'
const apiUrl = import.meta.env.VITE_API_URL

function UseList() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        axios({
            url: apiUrl + '/users',
            method: 'get'
        }).then((res) => {
            setUsers(res.data.data);
        }).catch((err) => {
            alert(err)
        })
    })
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-danger text-center">User List</h2>
            <Table bordered>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          variant="warning"
                          size="sm"
                          title="Edit user"
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          title="Delete user"
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
}
export default UseList;