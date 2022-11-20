import React,{Fragment} from 'react';

import classes from './FooterLinks.module.css';


const links = [
  {
    name: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    name: "Engage",
    links: [
      "LaslesVPN ?",
      "FAQ",
      "Tutorials",
      "About Us",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
  {
    name: "Earn Money",
    links: [
      "Affliate",
      "Become Partner",
    ],
  },
];

const EachLink = links.map(link => {
    return (
      <div className={`${classes.col} ${classes.FooterLinks}`} key={link.name}>
        <h5>{link.name}</h5>
        <ul>
          <li><a className={`${classes.footerLinks}`} href="#">{link.links[0]}</a></li>
          <li><a className={`${classes.footerLinks}`} href="#">{link.links[1]}</a></li>
          {link.links.length > 2 && <li><a className={`${classes.footerLinks}`} href="#">{link.links[2]}</a></li>}
          {link.links.length > 2 && <li><a className={`${classes.footerLinks}`} href="#">{link.links[3]}</a></li>}
          {link.links.length > 2 && <li><a className={`${classes.footerLinks}`} href="#">{link.links[4]}</a></li>}
          {link.links.length > 2 && <li><a className={`${classes.footerLinks}`} href="#">{link.links[5]}</a></li>}
        </ul>
      </div>
    );
})

const FooterLinks = () => {
    return <Fragment>{EachLink}</Fragment>;
}

export default FooterLinks;
