import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import Product, { IProduct } from "../../components/Product";

const Favorites = () => {
    const favorites: Array<IProduct> = useSelector((state: RootState) => state.favorites);
    
    return (
        <div className={styles.favorites}>
            <div className={styles.favorites_wrapper}>
                <h1 className={styles.favorites_title}>Избранное</h1>
                <div className={styles.favorites_container}>
                    {favorites.map((elem, index) => (
                        <Product key={'product_' + index} {...elem} type="favorite" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorites;