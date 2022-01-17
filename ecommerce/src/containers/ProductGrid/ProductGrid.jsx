import ProductItem from "../../components/ProductItem";
import styles from "./ProductGrid.module.scss";
import { databaseTemp } from "../../services/data";
import { read, readAll } from "../../services/firebase-utils";
import { useState, useEffect } from "react";

const ProductGrid = () => {
    const [productArray, setProductArray] = useState([]);
    useEffect(() => {
        readAll(setProductArray);
    }, []);

    return (
        <div className={styles.productGrid}>
            {productArray.map((itemObject) => (
                <ProductItem
                    img={itemObject.image}
                    name={itemObject.name}
                    price={itemObject.price}
                    productVariants={itemObject.variants}
                ></ProductItem>
            ))}
        </div>
    );
};

export default ProductGrid;
