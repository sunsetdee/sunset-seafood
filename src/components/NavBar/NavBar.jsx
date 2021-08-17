import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css';

// we are not doing destructing below and using props instead so we can see the old school way. 
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <img src="https://i.imgur.com/RmnMUQy.jpg"></img>
      {
        props.user ?
        <div className="history-and-logout">
          <div className="navbar-span"><span>Welcome {props.user.name}</span></div>
          <div className="history-logout-icon">
            {/* <Link className="nav-bar-new-order" to='/orders/new'>New Order</Link> */}
            <Link className="navbar-history-logout-icon" to="/orders"><i class="fas fa-history"></i></Link>
            <Link className="navbar-history-logout-icon" onClick={handleLogOut} to=""><i class="fas fa-sign-out-alt"></i></Link>
          &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/cart"><i class="fas fa-shopping-cart"></i></Link>
          </div>
        </div>
        : 
        <div className="signup-login">
        <Link to="/signup"><i class="fas fa-user-plus"></i></Link>
        &nbsp;&nbsp;   &nbsp;&nbsp; <Link to="/login"><i class="fas fa-sign-in-alt"></i></Link>
        </div>
      }
    </nav>
  );
}