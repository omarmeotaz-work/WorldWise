import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import Button from "./Button";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product"> Product </NavLink>
        </li>
        <li>
          <NavLink to="/pricing"> Pricing </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <Button type="primary">Login</Button>{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
