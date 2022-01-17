import styles from "./FooterContainer.module.scss";

const FooterContainer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.rows}>
                <div className={styles.columns}>
                    <h3>Let's Hang</h3>
                    <p>Instagram</p>
                    <p>TikTok</p>
                    <p>Facebook</p>
                    <p>Pinterest</p>
                    <p>YouTube</p>
                    <p>Blog</p>
                </div>
                <div className={styles.columns}>
                    <h3>Need Help?</h3>
                    <p>Buy a Gift Card</p>
                    <p>Help Centre</p>
                    <p>{"Delivery & Returns"}</p>
                    <p>Size Guide</p>
                    <p>FAQs</p>
                </div>
                <div className={styles.columns}>
                    <h3>My Account</h3>
                    <p>Wishlist</p>
                    <p>Order History</p>
                    <p>Register a Gift Card</p>
                    <p>Transfer a Gift Card</p>
                    <p>Refer a Friend</p>
                </div>
                <div className={styles.columns}>
                    <h3>About</h3>
                    <p>About Us</p>
                    <p>Brand Ambassadors</p>
                    <p>Stores</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>{"Terms & Conditions"}</p>
                    <p>Sustainability</p>
                    <p>Shop Men's at Hallensteins</p>
                    <p>Investor Relations</p>
                    <p>Student Discount</p>
                </div>
                <div className={styles.columns}>
                    <img
                        src="https://previews.123rf.com/images/yommy8008/yommy80081610/yommy8008161000081/67376534-square-photo-with-head-detail-of-few-weeks-old-tabby-cat-kitten-has-blue-eyes-and-dark-nose-baby-ani.jpg"
                        alt="placeholder"
                    />
                </div>
            </div>
        </div>
    );
};

export default FooterContainer;
