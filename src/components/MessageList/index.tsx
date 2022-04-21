import styles from"./styles.module.scss"
import LogoImg from "../../assets/logo.png"

function MessageList(){
    return(
        <div className={styles.messageListWrapper}>
            <img src={LogoImg} alt="DoWhile 2021"/>
            
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima🔥🔥🔥  </p>
                    <div className={styles.messageUser}>
                            <div className={styles.userImage}>
                             <img src="https://github.com/DevOpsAds.png" alt="joão"/>                          
                            </div>
                            <span>João Batista</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima🔥🔥🔥  </p>
                    <div className={styles.messageUser}>
                            <div className={styles.userImage}>
                             <img src="https://github.com/DevOpsAds.png" alt="joão"/>                          
                            </div>
                            <span>João Batista</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima🔥🔥🔥  </p>
                    <div className={styles.messageUser}>
                            <div className={styles.userImage}>
                             <img src="https://github.com/DevOpsAds.png" alt="joão"/>                          
                            </div>
                            <span>João Batista</span>
                    </div>
                </li>
            </ul>
       </div>
    )
}
export {MessageList}