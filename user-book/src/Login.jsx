import { Modal, Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL

function Login() {
    let [show, setShow] = useState(true)
    let [showLoginWindow, setShowLoginWindow] = useState(true)
    let [showSignupWindow, setSignupWindow] = useState(false)

    let [firstName, setFirstName] = useState("")
    let [lastName,setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    let [title, setTitle] = useState("Login");

    function handleClose() {
        setShow(false)
    }

    function openSignupWindow() {
        setShowLoginWindow(false)
        setSignupWindow(true)
        setTitle('Sign UP')
    }

    function openLoginWindow() {
        setShowLoginWindow(true)
        setSignupWindow(false)
        setTitle('Login')
    }
    function doLogin(e) {
        e.preventDefault();
         
        if (!email || !password) {
            alert("Please enter email and password");
            return; 
        }
        let data = {
            email: email,
            password: password
        }
        axios({
            url: apiUrl + '/user/login',
            method: 'post',
            data: data
        }).then((res) => {
            alert('Login successfully..')
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('name', res.data.data.name)
            localStorage.setItem('email', res.data.data.email)
            localStorage.setItem('isLoggedIn', true)
            window.location.reload()
        }).catch((err) => {
            alert(err.message)
        })
    }
    function signUp(e) {
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
    axios({
        url: apiUrl + '/create/user',
        method: 'post',
        data: data
    }).then((res)=> {
        alert('ok')
        alert(res.data.message)
    }).catch((err) => {
        alert(err.message)
    })
}
    return(
        <Modal show={show} onHide={ handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    showLoginWindow &&
                    <Form>
                        <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" className="mt-2" onClick={doLogin} >Login</Button>
                        <br></br>
                    <span>Do you have an account ?</span><span className="text-danger text-decoration-underline" onClick={openSignupWindow} >Create Account</span>
                    
                    </div>
                    
                    

                    </Form>
                }
            {    showSignupWindow &&
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setLastName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="success" className="mt-4" onClick={signUp}>sign up</Button>
                    <span className="text-danger text-decoration-underline" onClick={openLoginWindow}>go to Login</span>
                </Form>
             }
            </Modal.Body>

        </Modal>
    )
}
export default Login