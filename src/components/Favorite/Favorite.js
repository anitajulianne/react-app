import PageTitle from '../PageTitle/PageTitle'
import Container from '../Container/Container.js'
import styles from './Favorite.module.scss'
import Card from '../Card/Card'
import { favoriteCards } from '../../redux/store'
import { useSelector } from 'react-redux'


const Favorite = () => {

    const cards = useSelector(favoriteCards)
    
        if(cards.length === 0) {
            return (
                <Container>
                    <PageTitle>Favorite</PageTitle>
                    <p className={styles.noCards}>No cards...</p>
                </Container>
            )
        }

    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {cards.map(card => 
                <Card key={card.id} {...card} isFavorite={card.isFavorite} />)}
            </ul>
        </Container>
    )
}

export default Favorite;