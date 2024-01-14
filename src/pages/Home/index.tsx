import styles from "./index.module.scss";
import { useState, useEffect } from "react"
import Product, { IProduct } from "../../components/Product";
import Loader from "../../components/Loader";


const Home = () => {

    const [basket, setBasket] = useState<Array<IProduct>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getProducts = async () => {
        fetch('/goods')
            .then(response => response.json())
            .then(data => {
                setBasket(data.items);
                setLoading(true);
            })
            .catch(error => console.error('Ошибка:', error));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={styles.home}>
            {loading ?
                <div className={styles.products_container}>
                    {basket.map((elem, index) => (
                        <Product key={'product_' + index} {...elem} type="market" />
                    ))}
                </div>
                :
                <div className={styles.loader_wrapper}>
                    <Loader />
                </div>
            }
        </div>
    )
}
export default Home;