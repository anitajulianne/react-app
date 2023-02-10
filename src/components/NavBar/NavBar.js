import styles from './NavBar.module.scss'
const { default: Container } = require("../Container/Container")

const NavBar = () => {
    return (
        <div className={styles.navBar}>
           <Container >
               <div className={styles.navContainer}>
                    <i class="fa fa-tasks"></i>
                <ul className={styles.navLinks}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
               </div>
           </Container>
        </div>
    )
}

export default NavBar;