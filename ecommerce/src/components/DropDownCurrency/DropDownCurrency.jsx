import styles from "./DropDownCurrency.module.scss";

const DropDownCurrency = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Dropdown</button>
            <div className={styles.dropdownContent}>
                <p>AUD</p>
                <p>NZD</p>
                <p>USD</p>
            </div>
        </div>
    );
};

export default DropDownCurrency;
