import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  let navigate = useNavigate();
  const status = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src=""
                height="15"
                alt="Logo"
                loading="lazy"
              />
            </a> */}
            <h2>logo</h2>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              {status && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/main">
                    Items
                  </NavLink>
                </li>
              )}
              {status && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    onClick={handleLogout}
                    to="/home"
                  >
                    Logout
                  </NavLink>
                </li>
              )}
              {!status && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                  Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div>

          {/* <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}

            {/* <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">
            Home
          </NavLink>
        </li>
        {status && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/main">
              Items
            </NavLink>
          </li>
        )}
        {status && (
          <li className="nav-item">
            <NavLink className="nav-link" onClick={handleLogout} to="/home">
              Logout
            </NavLink>
          </li>
        )}
        {!status && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </div>
</nav>; */}
