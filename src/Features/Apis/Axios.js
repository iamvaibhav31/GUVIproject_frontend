import axios from "axios";

export default axios.create({
     baseURL: "http://localhost:4000/users", // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
     withCredentials: true
});