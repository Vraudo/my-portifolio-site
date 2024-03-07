
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'



function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Olá, eu me chamo Everaldo!', 'Eu sou Desenvolvedor Front End!', ' E Gestor de Tráfego!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 75
    const [delta, setDelta] = useState(75)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        },delta)
        return()=> {clearInterval(ticker)}
    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1> -  {text} </h1>
            <p>  Sou um estudante de tecnologia e gestão de tráfego. Busco aprender <br></br>
                e aprimorar minhas habilidades dentro da área de programação como<br></br> 
                um todo e gerir alavancamento de grandes e pequenas empresas com <br></br>
                anúncios online, visando sempre buscar os melhores conhecimentos superando os desafios. </p>

                <ButtonA Link='https://github.com/Vraudo' text={'Conecte-se comigo'}/>
                
        </div>
    )
}
export default Presentation