import "./navbar.scss";
import Splitbars from "../Assets/splitbars.png";
import Notification from "../Assets/notification.png";
import Profile from "../Assets/profile.png";
import LogOut from "../Assets/logout.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Helpdesk</h1>
      <div className="images">
        <img src={Splitbars} alt="nav-img" />
        <img src={Notification} alt="notification-img" />
        <img src={Profile} alt="profile-img" />
        <img src={LogOut} alt="logout-img" />
      </div>
    </div>
  );
};

export default Navbar;
