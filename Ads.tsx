#Linha de comandos . ads

'global.css'
*{
	margin:0;
	padding:0;
	font-family:Roboto, sans-serif;
	box-sizing:border-box
}

body{
	color:#e1e1e6;
	background:#121214
}
    



'app.module.sass'
contentWrapper{
	max-width:1200px;
	height:100vg;
	margin:0 auto;
	background-color:violet;

	display:grid;
	grid-template-columns:1fr 453px;
	column-gap:120px;
	positon:relative
}


 "App.tsx"
import styles from "../styles/app.module.css"
import {MessageList} from "./components/MessageList"
import {LoginBox} from "./components/LoginBox"


function App(){
return(
	<main className="contentWrapper">
		<MessageList/>
		<LoginBox/.
	</main>
	)

}


export {App}
---------------------------------------------------------------------------------



"MessageList/index.tsx"
import styles from './styles.module.scss'
import logoImg from '../../assets/logo.png'


function MenssageList(){
  return (
  <div className={styles.messageListWrapper}>
  	<img src={LogoImg} alt="doWhile"/>

       <ul className={styles.messageList>
       	<li className={styles.message}>
       	  <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos,vamooo pra cima deles 🔥🔥🔥</p>
       	  <div className={styles.messageUser}>
       	  	<div> className={styles.userImage}>
       	  		<img src="https://github.com/DevOpsAds.png" alt="João Batista"/>
       	  	</div>
       	  	<span> João Batista de Lima Júnior</span>
       	  </div>	
       	</li>

       	<li className={styles.message}>
       	  <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos,vamooo pra cima deles 🔥🔥🔥</p>
       	  <div className={styles.messageUser}>
       	  	<div> className={styles.userImage}>
       	  		<img src="https://github.com/DevOpsAds.png" alt="João Batista"/>
       	  	</div>
       	  	<span> João Batista de Lima Júnior</span>
       	  </div>	
       	</li>
       </ul>

       <li className={styles.message}>
       	  <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos,vamooo pra cima deles 🔥🔥🔥</p>
       	  <div className={styles.messageUser}>
       	  	<div> className={styles.userImage}>
       	  		<img src="https://github.com/DevOpsAds.png" alt="João Batista"/>
       	  	</div>
       	  	<span> João Batista de Lima Júnior</span>
       	  </div>	
       	</div>

  </div>
  )
}
export {MessageList}


"styles.module.scss"

.messageListWrapper{

	margin:150px 88px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:flex-start
	img{

		height:28px;
		margin:32px 0;
	}
.messageList{

	list-style:none;
	display:flex;
	flex-direction:column;
	justify-content:center;
	gap:40px;
	flex:1;
}

.message{
	
	max-width:440px;

	&:nth-hild(2){
		margin-left:80px
	}

	.messageContent{

		font-size:20px;
		line-height:28px;
     }
	.messageUser{
		
		margin-top:16px;
		display:flex;
		align-items:center;

		.messageImage{
			
			heigth:34px;
			padding:28px;
			background:linear-gradient(100deg,#ff008e 0%,#ffcd1e 100%)
			border-radius:50%
			line-height:0;

			img{
				
				margin:0;
				width:30px;
				height:30px;
				border-radius:50%;
				borcer:4px solid #151609;
			     }
          }
		
		span{
			font-size:16px;
			margin-left:12px;
		}
	}
}












-------------------------

"LoginBox/index.tsx"


import styles from './styles.module.scss'
import {VscGitHubInverted} from 'react-icons/vsc'

function LoginBox(){
	return(
		<div className={styles.loginBoxWrapper}>
		<strong>Entre e compartilhe sua menssagem</strong>
		<a href="#" className={styles.signInWithGithub}>
		<VscGitHubInverted size="24"/> Entra com github</a>

		</div>
		)
}
export {LoginBox}


"LoginBox/styles.module.scss"

.loginBoxWrapper{

	height:100vg;
	width:100%;
 	background:#D98719 url(../../assets/gilr-left.png) no-repeat center top;

	color:#Ac2342;
     padding:440px 88px 0;
     
     flex-direction:column;
     justify-content:center;
     align-items:center;

     strong{

     	font-size:36px;
     	line-heigth:36px;
     }

     .signInWithGithub{

     	background:#7093db;
     	color:#121214;
     	margin-top:16px;
     	padding:0 40px;
     	height:56px
     	font-size:14px;
     	font-weight:bold;
     	text-transform:uppercase;
     	text-decoration:none;

     	display:flex;
     	align-items:center;
     	justify-content:center;

     		&hover:{
     			filter:brightness(0.8);
     		}

          svg:{
          	margin-right:14px
          }




     }



}


