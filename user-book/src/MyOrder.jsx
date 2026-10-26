import { useState, useEffect} from "react"
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL
const MyOrder = () => {
    let [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        let isLoggedIn = localStoreage.getItem('isLoggedIn')
        if(isLoggedIn){
            let email = localStorage.getItem('email')
            axios({
                url: apiUrl + '/my/orders',
                method: 'get'
            }).then((res)=> {
                setMyOrders(res.data.data)
            }).catch((err) => {
                alert("error")
            })
        }else{
            alert('please Login to view your orders')
        }
    },[])
    return(
        <h1> we will show user all order here...</h1>
    )
}
export default MyOrder