import styles from "./ProductItem.module.scss";
import { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

const ProductItem = ({
    name = "error",
    price = 0,
    img,
    fave = false,
    productVariants,
}) => {
    return (
        <div>
            <img src={img} alt="product" className={styles.image} />
            <div className={styles.sizeContainer}>
                <div className={styles.sizeOptions}>
                    <p>AU S</p>
                    <p>AU M</p>
                    <p>AU L</p>
                </div>
            </div>
            <Router>
                <p className={styles.productInfo} id={styles.productName}>
                    <Link to={"/product/" + name}>{name}</Link>
                </p>
                <p className={styles.productInfo} id={styles.productPrice}>
                    Price: AUD {"$" + price + ".00"}
                </p>
                <p className={styles.productInfo} id={styles.productVariants}>
                    {productVariants.length} Colours Available
                </p>
            </Router>
        </div>
    );
};

export default ProductItem;
