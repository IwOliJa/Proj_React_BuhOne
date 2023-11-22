import styles from "./index.module.css";
import logo from "../../assets/images/nav_logo.svg";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.rectangle}></div>
      <nav className={styles.header_nav}>
        <ul className={styles.buhOne}>
          <li>
            <img src={logo} alt="buhOne-logo" />
          </li>
          <li>BuhOne</li>
        </ul>
        <ul className={styles.nav_menu}>
          {
            props.pagesobj.map((el) => {
              return <li key={Math.random()}>{el.page}</li>;
            })
            /* <li>главная</li>
          <li>услуги</li>
          <li>кейсы</li>
          <li>о компании</li>
          <li>контакты</li> */
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
