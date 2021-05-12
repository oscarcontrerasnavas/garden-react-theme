import { Link } from "react-router-dom";
import { routes } from "../utils/globals";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <button className="navbar-toggler">
        <i className="bi bi-list"></i>
      </button>

      <div className={"collapse navbar-collapse"}>
        <ul className="main navbar-nav">
          {routes.map((route) => {
            return (
              <li className="nav-item me-3" key={route.id}>
                <Link className="nav-link px-0 text-dark" to={route.path}>
                  {route.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="cart navbar-nav flex-row">
        <li className="nav-item me-2">
          <button className="btn rounded-circle py-1 px-2 fs-5">
            <i className="bi bi-search"></i>
          </button>
        </li>
        <li className="nav-item me-2">
          <button className="btn rounded-circle py-1 px-2 position-relative">
            <i className="bi bi-suit-heart fs-5"></i>
            <span className="badge bg-secondary rounded-circle position-absolute text-dark font-monospace">
              2
            </span>
          </button>
        </li>
        <li className="nav-item me-2">
          <button className="btn rounded-circle py-1 px-2 position-relative">
            <i className="bi bi-bag fs-5"></i>
            <span className="badge bg-info rounded-circle position-absolute text-dark font-monospace">
              1
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;