
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'



function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou o Everaldo</h1>
            <p>  Sou um estudante de tecnologia e gestão de tráfego. Busco aprender <br></br>
                e aprimorar minhas habilidades dentro da área de programação como<br></br> 
                um todo e gerir alavancamento de grandes e pequenas empresas com <br></br>
                anúncios online, visando sempre buscar os melhores conhecimentos superando os desafios. </p>

                <ButtonA Link='https://github.com/Vraudo' text={'Conecte-se comigo'}/>
                
        </div>
    )
}
export default Presentation