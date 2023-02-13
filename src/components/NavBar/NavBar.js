import styles from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';
import Container from '../Container/Container.js';


const NavBar = () => {
    return (
        <div className={styles.navBar}>
           <Container>
               <div className={styles.navContainer}>
                    <i class="fa fa-tasks"></i>

                    <ul className={styles.navLinks}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="About">About</NavLink></li>
                    </ul>
               </div>
           </Container>
        </div>
    )
}

export default NavBar;