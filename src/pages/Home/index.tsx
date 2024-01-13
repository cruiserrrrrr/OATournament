import styles from "./index.module.scss";
import {useState, useEffect} from "react"
import Product, { IProduct } from "../../components/Product";
import {RotatingLines} from "react-loader-spinner";


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
            <div className={styles.products_container}>
                {/*{loading ?*/}
                {/*    basket.map((elem, index) => (*/}
                {/*        <Product key={'product_' + index} {...elem} type="market"/>*/}
                {/*    ))*/}
                {/*    :*/}
                {/*    <RotatingLines*/}
                {/*        visible={true}*/}
                {/*        strokeWidth="5"*/}
                {/*        animationDuration="0.75"*/}
                {/*        ariaLabel="rotating-lines-loading"*/}
                {/*        width={"120px"}*/}
                {/*    />*/}
                {/*}*/}
                <div className={styles.loader}>
                    <RotatingLines
                        visible={true}
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        width={"96px"}
                        strokeColor={"#F37A3C"}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;