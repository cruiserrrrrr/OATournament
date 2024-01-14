import Button from "../Button";
import styles from "./index.module.scss";
import { removeFromBasket, addStock, reduceStock } from "../../store/slices/bascketSlice";
import { useDispatch } from "react-redux";
import { IProduct } from "../Product";

const CartItem = (props: IProduct) => {

    const {
        name = '',
        price = 0,
        quantity = 0,
        picture = '',
        stock = 0
    } = props;
    const dispath = useDispatch();
    const add = () => {
        dispath(addStock(name));
    };
    const reduce = () => {
        dispath(reduceStock(name));
    };
    const remove = () => {
        dispath(removeFromBasket(name));
    }

    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_item__container}>
                <div className={styles.item_image__wrapper}>
                    <img className={styles.cart_item__image} src={picture} alt="" />
                </div>
                {/* <img className={styles.cart_item__image} src={picture} alt="" /> */}
                <div className={styles.cart_item__content}>
                    <p className={styles.item_name}>{name}</p>
                    <p className={styles.item_price}>Цена: <span>{price}₽</span></p>
                    <p className={styles.quantity}>В наличии: {quantity}</p>
                </div>
                <div className={styles.cart_actions}>
                    <Button
                        onClick={reduce}
                        text="-"
                        content="text"
                        disabled={stock === 0}
                    />
                    <p>{stock}</p>
                    <Button
                        onClick={add}
                        text="+"
                        content="text"
                        disabled={stock === quantity}
                    />
                </div>
                <button className={styles.button_delete} onClick={remove}>&#10006;</button>
            </div>
        </div>
    )
}

export default CartItem;