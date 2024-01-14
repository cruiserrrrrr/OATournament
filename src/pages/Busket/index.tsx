import styles from "./index.module.scss";
import Cart from "../../components/Cart";

const Basket = () => {

    return (
        <div className={styles.basket}>
            <div className={styles.basket_wrapper}>
                <h1 className={styles.basket_title}>Корзина</h1>
                <Cart />
            </div>
        </div>
    )
}

export default Basket;