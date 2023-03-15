import "./sidebar.scss";
import DashboardLayout from "../../../Assets/Dashboard.png";
import NewTicket from "../../../Assets/NewTicket.png";
import MyTicket from "../../../Assets/MyTicket.png";
import Pointer from "../../../Assets/pointer.png";

const ListObj = [
  {
    id: 1,
    title: "Dashboard",
    img: `${DashboardLayout}`,
  },
  {
    id: 2,
    title: "New Ticket",
    img: `${NewTicket}`,
  },
  {
    id: 3,
    title: "My Ticket",
    img: `${MyTicket}`,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {ListObj.map((element) => {
        return (
          <div key={element.id} className="list-items">
            <img src={Pointer} alt="pointer-img" className="pointer" />
            <img src={element.img} alt="list-item" />
            <h5>{element.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
