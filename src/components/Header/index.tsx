import Link from "../Link";
import styles from "./index.module.scss";
const navList = [
    {
        path: '/',
        text: 'Магазин'
    },
    {
        path: '/favorites',
        text: 'Избранное'
    },
    {
        path: '/basket',
        text: 'Корзина'
    }
]

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <nav className={styles.header_nav}>
                    {navList.map((elem, index) => (
                        <Link path={elem.path} text={elem.text} key={'link_' + index} />
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;