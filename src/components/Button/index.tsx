import styles from "./index.module.scss";

interface IButton {
    icon?: JSX.Element,
    onClick?: () => void,
    isActive?: boolean,
    text?: string,
    content?: 'text' | 'icon',
    disabled?: boolean
}

const Button = (props: IButton) => {

    const {
        icon = '',
        onClick = () => { },
        isActive = false,
        text = '',
        content = '',
        disabled = false
    } = props;

    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''} ${styles[content]} ${disabled ? styles.disabled : styles.default}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button;