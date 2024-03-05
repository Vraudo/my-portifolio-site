import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedi, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Footer'>Contato</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/vraudo/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Vraudo' target='_blank1'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/everaldo-gomes-6b667629a/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>


        </div>
    )
}
export default Navbar