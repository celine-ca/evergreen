import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/evergreen-logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
    </header>
  );
}
