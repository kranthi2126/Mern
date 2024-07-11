import './style.css'
import {Link} from 'react-router-dom'
export default function Header(){
 return(
    <div class="header">
        <h3>Flipkart</h3>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
        </ul>
    </div>
 )
}