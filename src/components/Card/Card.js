import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';


const Card = ({ id, title, isFavorite }) => {

    const dispatch = useDispatch();
    const toggleFavorite = () => {
        dispatch(toggleCardFavorite(id, isFavorite))
    };
    const remove = () => {
        dispatch(removeCard(id))
    };

    return (
        <li className={styles.card}>
            {title}
            <button className={clsx(styles.cardBtn, isFavorite && styles.active)} onClick={toggleFavorite}>
            <i className="fa fa-star-o" />
            </button>
            <button className={styles.cardBtn} onClick={remove}>
            <i className="fa fa-trash" />
            </button>
        </li>
    )
}

export default Card;