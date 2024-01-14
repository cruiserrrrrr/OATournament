import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import { IProduct } from "../Product";
import Button from "../Button";
import CartItem from "../CartItem";

const Cart = () => {

    const basket: Array<IProduct> = useSelector((state: RootState) => state.basket);
    const totalPrice: number = basket.reduce((sum, product) => sum + (product.price * product.stock), 0);
    
    return (
        <div className={styles.cart}>
            <div className={styles.cart_container}>
                {basket.map((elem, index) => (
                    <CartItem key={'cart_' + index} {...elem} />
                ))}
            </div>
            <div className={styles.cart_payment}>
                <p className={styles.order}>Сумма заказа: <span>{totalPrice}₽</span></p>
                <Button content="text" text="Купить" />
            </div>
        </div>
    )
}

export default Cart;