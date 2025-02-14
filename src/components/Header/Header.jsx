import "./Header.scss";
import logo from "../../assets/images/evergreen-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
    </header>
  );
}
