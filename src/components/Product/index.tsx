import styles from "./index.module.scss";
import blankImage from "../../assets/images/blank.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState, persistor } from "../../store/store";
import { addToBasket, removeFromBasket } from "../../store/slices/bascketSlice";
import { addToFavorite, removeFromFavorite } from "../../store/slices/favoritesSlice";
import { ReactComponent as BasketIcon } from '../../assets/sprite/basket.svg';
import { ReactComponent as FavoriteIcon } from '../../assets/sprite/favorites.svg';
import Button from "../Button";

export interface IProduct {
    picture: string,
    name: string,
    price: number,
    quantity: number,
    type?: 'basket' | 'market' | 'favorite',
    stock: number
}

const Product = (props: IProduct) => {

    const {
        picture = blankImage,
        name = '',
        price = 0,
        quantity = 0,
        type = ''
    } = props;

    const dispatch = useDispatch();
    const basket: Array<IProduct> = useSelector((state: RootState) => state.basket);
    const favorites: Array<IProduct> = useSelector((state: RootState) => state.favorites);

    const isBasket = basket.find(elem => elem.name === name);
    const isFavorite = favorites.find(elem => elem.name === name);

    const basketAction = () => {
        if (isBasket) {
            dispatch(removeFromBasket(name));
            persistor.persist();
        } else {
            dispatch(addToBasket({ picture, name, price, quantity, stock: 1 }));
            persistor.persist();
        };

    };
    const favoritesAction = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(name));
            persistor.persist();
        } else {
            dispatch(addToFavorite({ picture, name, price, quantity, stock: 1 }));
            persistor.persist();
        };
    };
    const notification = () => {
        alert("Нет в наличии");
    };
    return (
        <div className={`${styles.product} ${styles[type]}`}>
            <div className={styles.product_container}>
                <img className={styles.product_image} src={picture} alt="Фото товара" />
                <div className={styles.product_info}>
                    <p className={styles.product_name}>{name}</p>
                    <p className={styles.product_price}> Цена: <span>{price}₽</span></p>
                    {
                        quantity ?
                            <p className={styles.product_quantity}>В наличии: <span>{quantity}</span></p>
                            :
                            <p className={styles.product_quantity}>Нет в наличии</p>
                    }
                </div>
            </div>
            <div className={styles.product_actions}>
                <Button
                    onClick={favoritesAction}
                    icon={<FavoriteIcon />}
                    isActive={!!isFavorite}
                    content="icon"
                />
                <Button
                    onClick={quantity ? basketAction : notification}
                    icon={<BasketIcon />}
                    isActive={!!isBasket}
                    content="icon"
                />
            </div>
        </div>
    )
}

export default Product;