import { FaInstagram, FaLinkedi, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'
import ButtonB from '../elements/ButtonB'

function Footer(){
    return(
        <div className={styles.footer} id="Footer">

            <a href="https://github.com/Vraudo?tab=repositories" target="_blank"><ButtonB text='Ver meu repositório completo'/></a>
            
            <ul>
                <li><a href='https://www.instagram.com/vraudo/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Vraudo' target='_blank1'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/everaldo-gomes-6b667629a/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>
            <li>everaldorocha19@gmail.com</li><br></br>
            <li>(41)92001-7485</li>
        
            <p>Everaldo Gomes © 2024</p>
           
        </div>
    )
}
export default Footer