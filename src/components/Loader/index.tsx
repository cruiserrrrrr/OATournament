import styles from "./index.module.scss";

const emptyLoader = [1, 2, 3, 4, 5, 6, 7, 8]

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader_container}>
                {emptyLoader.map((_, index) => (
                    <div className={styles.loader_item} key={'loader_' + index} />
                ))}
            </div>
        </div>
    )
}

export default Loader;