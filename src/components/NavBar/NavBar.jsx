import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css'

// we are not doing destructing below and using props instead so we can see the old school way. 
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      {
        props.user ?
        <>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;&nbsp;<span>Welcome, {props.user.name}</span>
        &nbsp;&nbsp;<Link onClick={handleLogOut} to="">Log Out</Link>
        </>
        : 
        <div className="signup-login">
        <Link><i class="fas fa-user-plus"></i></Link>
        &nbsp;&nbsp;  | &nbsp;&nbsp; <Link><i class="fas fa-sign-in-alt"></i></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;<Link><i class="fas fa-shopping-cart"></i></Link>
        </div>
      }
    </nav>
  );
}