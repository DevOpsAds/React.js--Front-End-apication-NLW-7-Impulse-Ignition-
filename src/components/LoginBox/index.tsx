import styles from './styles.module.scss'
import {VscGithubInverted} from 'react-icons/vsc'
import GirlLeft from "../../assets/baner-girl-left.png"
import LogoImg from "../../assets/baner-girl-left.png"



function LoginBox(){
    return(
       
        <div className={styles.loginBoxWrapper}>
            <img src={GirlLeft} alt="DoWhile 2021"/>
          
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href='#' className={styles.signInWithGithub}>
                <VscGithubInverted size='24'/>
                Entrar com Github
            </a>
        </div>
    )

}
export {LoginBox}