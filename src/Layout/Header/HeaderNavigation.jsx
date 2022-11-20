
//IMPORTED JSX FILES
import Image from '../../UI/Image';
import Button from '../../UI/Button';

//IMAGE FILES
import Logo from '../../assets/images/logo.svg'

//CSS FILES
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
    return (
      <div className={classes.HeaderNavigation}>
        <figure className={`${classes.col} ${classes.Logo}`}>
          <Image image={Logo} description="LaslesVPN" />
        </figure>

        <div className={`${classes.col} ${classes.mainNav}`}>
          <ul>
            <li><a className={`${classes.navLink}`} href="#about">About</a></li>
            <li><a className={`${classes.navLink}`} href="#features">Features</a></li>
            <li><a className={`${classes.navLink}`} href="#pricing">Pricing</a></li>
            <li><a className={`${classes.navLink}`} href="#testimonials">Testimonials</a></li>
            <li><a className={`${classes.navLink}`} href="#help">Help</a></li>
          </ul>
        </div>

        <div className={`${classes.col} ${classes.remNav}`}>
          <Button className={`${classes.btn} ${classes.signIn}`}>Sign In</Button>
          <Button className={`${classes.btn} ${classes.active}`}>Sign Up</Button>
        </div>
      </div>
    );
}

export default HeaderNavigation;