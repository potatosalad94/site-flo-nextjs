import styles from "./Navbar.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { GiMountaintop } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  const handleMenuBurger = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className={styles.navbarItems}>
      <Link href="/">
        <div className={styles.navbarLogo}>
          <GiMountaintop className={styles.navbarLogoIcon} />
          <h1>SiteFlo</h1>
        </div>
      </Link>

      <div className={styles.navbarMenuIcon}>
        {active ? (
          <FaTimes onClick={handleMenuBurger} />
        ) : (
          <FaBars onClick={handleMenuBurger} />
        )}
      </div>

      <ul
        className={
          !active
            ? `${styles.navbarMenu}`
            : `${styles.navbarMenu} ${styles.active}`
        }
      >
        {MenuItems.map((item) => (
          <li key={item.title}>
            <Link href={item.url}>
              <a className={`${styles.navLinks}`}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

// EXEMPLE D'INTERNET
