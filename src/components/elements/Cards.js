import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

function Cards({img, title, tech, description, repo, site}){
    
    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }
    
    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.card}>
           <a onMouseEnter={InfoOn} href={site} target='_blank'> <img src={img} alt='ERROR'/></a>
            
            {info === true &&(
                 <section>
                 <h3>{title}</h3>
                 <p><strong>Tecnologia:</strong>{tech}</p>
                 <p>{description}</p>
                 <a href={repo} target='_blank'><ButtonB text={'Acesse o repositório'}/></a>
             </section>     
            )}
            
                
        </div>
    )
}

export default Cards