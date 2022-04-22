import styles from './styles.module.scss'
import {VscGithubInverted} from 'react-icons/vsc'
import GirlLeft from "../../assets/baner-girl-left.png"
import LogoImg from "../../assets/baner-girl-left.png"
import { useEffect } from 'react'
import { api } from '../../services/api'

type AuthResponse={
    token:string;
    user:{
        id:string;
        avatar_url:string;
        name:string;
        login:string;
    }

}



function LoginBox(){
    const signInUrl=`https://github.com/login/oauth/authorize?scope=user&client_id=c9e50849daaff86bec58`


   async function signIn(githubCode:string){
      const response= await api.post<AuthResponse>('http://localhost:4000/authenticate',{     
            code:githubCode,        
       })

    //    const{ token ,user}=response.data

    //    localStorage.setIten('@dowhile:token',token);
       console.log(response.data)

   }


    useEffect(()=>{
        const url=window.location.href;
        const hasGithubCode = url.includes('?code=')

        if (hasGithubCode){
            const[urlWithoutCode,githubCode]=url.split('?code=')
            
            window.history.pushState({}, '' ,urlWithoutCode)
            console.log(githubCode)
            signIn(githubCode)
        }
    },[])

    return(
       
        <div className={styles.loginBoxWrapper}>
            <img src={GirlLeft} alt="DoWhile 2021"/>
          
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size='24'/>
                Entrar com Github
            </a>
        </div>
    )

}
export {LoginBox}