import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import Product, { IProduct } from "../../components/Product";

const Basket = () => {

    const basketData: Array<IProduct> = useSelector((state: RootState) => state.basket);

    return (
        <div className={styles.basket}>
            <h1 className={styles.basket_title}>Корзина</h1>
            <div className={styles.basket_container}>
                {basketData.map((elem, index) => (
                    <Product key={'product_' + index} {...elem} type="basket" />
                ))}
            </div>
        </div>
    )
}

export default Basket;