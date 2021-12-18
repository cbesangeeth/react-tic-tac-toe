import { Link } from "react-router-dom";
import "./style.css";

function SideMenu() {
  return (
    <>
      <div>
        <nav className="sidenav">
          <div>
            <Link to="/">Dashboard</Link>
          </div>
          <div>
            <Link to="/new">New Game</Link>
          </div>
          <div>
            <Link to="/history"> History</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideMenu;
