import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';


const Card = ({ id, title, isFavorite }) => {

    const dispatch = useDispatch();
    const toggleFavorite = () => {
        dispatch(toggleCardFavorite(id, isFavorite))
    }

    return (
        <li className={styles.card}>
            {title}
            <button className={clsx(styles.cardBtn, isFavorite && styles.active)} onClick={toggleFavorite}>
            <i className="fa fa-star-o" />
            </button>
        </li>
    )
}

export default Card;