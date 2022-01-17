import styles from "./HeaderContainer.module.scss";
import SearchBar from "../../components/SearchBar";
import DropDownCurrency from "../../components/DropDownCurrency";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeaderContainer = () => {
    return (
        <nav className={styles.headerContainer}>
            <div className={styles.image}>
                {/* <img
                    src="https://www.glassons.com/content/images/logo.png?width=116"
                    alt="logo"
                /> */}
            </div>
            <Router>
                <ul className={styles.headerLinkList}>
                    <li className={styles.linkRed}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className={styles.linkRed}>
                        <Link to="/">NEW</Link>
                    </li>
                    <li className={styles.linkRed}>
                        <Link to="/">SALE</Link>
                    </li>
                    <li>
                        <Link to="/products">All Products</Link>
                    </li>
                    <li>
                        <Link to="/">Tops</Link>
                    </li>
                    <li>
                        <Link to="/">Bottoms</Link>
                    </li>
                    <li>
                        <Link to="/">Linen</Link>
                    </li>
                </ul>
            </Router>

            {/* <SearchBar></SearchBar> */}
            {/* <DropDownCurrency className={styles.align_right}></DropDownCurrency> */}
        </nav>
    );
};

export default HeaderContainer;
