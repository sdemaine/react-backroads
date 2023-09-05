import { pageLinks, socialLinks } from "../data"
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <>
      <footer className="section footer" id="footer">
        <ul className="footer-links">

          {pageLinks.map((link) => {
            return <li>
              <a href={link.href} className="footer-link">{link.text}</a>
            </li>
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return <><FooterItem href={link.href} icon={link.icon} /></>
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer