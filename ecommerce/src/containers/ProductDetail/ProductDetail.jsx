//https://fontawesome.com/v6.0/docs/web/use-with/react/

import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     solid,
//     regular,
//     brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const ProductDetail = ({ name = "error", price = 0, img, fave = false }) => {
    // const [toggleFave, setToggleFave] = useState(fave);

    const [productArray, setProductArray] = useState([]);
    useEffect(() => {
        readAll(setProductArray);
    }, []);

    const params = useParams();
    const productID = params.productID;

    console.log(productArray);

    const findID = () => {
        return productArray.find((object) => {
            if (object.id == productID) {
            }
            return object;
        });
    };

    return (
        <div className={styles.grid}>
            <div>
                <img
                    src="https://www.glassons.com/content/products/t-billie-short-sleeve-crop-black-front-bs51446tlv.jpg?width=1029"
                    alt="product"
                    className={styles.image}
                />
            </div>

            <div className={styles.align_left}>
                <h2>{findID()}</h2>
                <h2 className={styles.priceTag}>Price </h2>

                <form>
                    <div className={styles.dropdown}>
                        <label htmlFor="selectColour">Select Colour: </label>
                        <select id="selectColour">
                            {
                                // .map the array with (html)  option values for each item in array
                            }
                            <option value="black">Black</option>
                            <option value="white">White</option>
                        </select>
                    </div>
                    <br />
                    <div className={styles.dropdown}>
                        <label htmlFor="selectSize">Select Size: </label>
                        <select id="selectSize">
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <button></button>
                    {/* <div>
                        <button
                            onClick={setToggleFave(!toggleFave)}
                            type="button"
                        >
                            {toggleFave ? (
                                <i className="fas fa-eye-slash" />
                            ) : (
                                <i className="fas fa-eye" />
                            )}
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default ProductDetail;
