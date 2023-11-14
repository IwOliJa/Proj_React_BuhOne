// import styles from "./index.module.css";
function Header() {
  return (
    <header className="header">
      <div>rectangle</div>
      <nav className="header_nav ">
        <ul className="buhOne">
          <li>
            <img src="#" alt="buhOne-logo" />
            <h1>BuhOne</h1>
          </li>
        </ul>
        <ul className="nav_menu">
          <li>главная</li>
          <li>услуги</li>
          <li>кейсы</li>
          <li>о компании</li>
          <li>контакты</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
