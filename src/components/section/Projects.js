
import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import Ipdnc from '../../image/Projects/Ipdnc.svg'
import Lparchi from '../../image/Projects/Lparchi.svg'
import Ccxp from '../../image/Projects/Ccxp.svg'



function Projects(){
    return(
        <div className={styles.Projects} id="Projects">
            <h1>Projetos</h1>
            
            <Cards 
             img={Ipdnc}
             title='LP - DNC'
             tech=' HTML, CSS E JS'
             description='Desenvolvimento de uma Landing Page com intuito de praticar e compreender as linguagens utilizadas '
             repo='https://github.com/Vraudo/Projeto-Landing-page'
             site='https://dncescolateste.netlify.app/'
                />
                 <Cards 
             img={Lparchi}
             title='LP - Architecture'
             tech=' HTML e CSS'
             description='Desenvolvimento de uma Landing Page mais simplificada atribuída à uma planilha de informações'
             repo='https://github.com/Vraudo/Projeto-LP-Arquitetura'
             site='https://desafio-landing-page-architecture.netlify.app/'
                />  
                    <Cards 
             img={Ccxp}
             title='CCXP 22'
             tech=' HTML, CSS E JS'
             description='Exercício prático de uma pagina sobre um evento de 2022'
             repo='https://github.com/Vraudo/pagina-ccxp-2022'
             site='https://ccxp-2022-23.netlify.app/'
                /> 
        </div>
    )
}
export default Projects