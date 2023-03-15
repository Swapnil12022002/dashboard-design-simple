import Navbar from "../../../components/Navbar.jsx";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.scss";

const dashObj = [
  {
    id: 1,
    title: "Total Tickets",
    Result: 12,
    color: "#2F82FF",
  },
  {
    id: 2,
    title: "Tickets Solved",
    Result: 8,
    color: "#0BFF68",
  },
  {
    id: 3,
    title: "Total Awaiting Approval",
    Result: 2,
    color: "#FE594E",
  },
  {
    id: 4,
    title: "Total in Progress",
    Result: 2,
    color: "#FCFF6C",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="body">
        <Sidebar />
        <div className="wrapper">
          <div className="main">
            <p>Dashboard</p>
            <div className="cards-wrapper">
              {dashObj.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="card"
                    style={{ backgroundColor: `${element.color}` }}
                  >
                    <h5>{element.title}</h5>
                    <h2>{element.Result}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
