import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

interface ILink {
    text: string;
    path: string;
}

const Link = (props: ILink) => {

    const { text = '', path = '' } = props;

    return (
        <NavLink to={path} className={styles.link} title={text}>
            {text}
        </NavLink>
    )
}

export default Link;