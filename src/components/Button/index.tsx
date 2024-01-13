import styles from "./index.module.scss";

interface IButton {
    icon?: JSX.Element,
    onClick?: () => void,
    isActive?: boolean
}

const Button = (props: IButton) => {

    const {
        icon = '',
        onClick = () => {},
        isActive = false
    } = props;

    return (
        <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>
            {icon}
        </button>
    )
}

export default Button;