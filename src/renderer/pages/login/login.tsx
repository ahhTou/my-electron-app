import styles from './login.module.css'
import { WindowLayout, SafeArea } from '@renderer/layout/'


export default function Login() {


    const openUrl = () => {
        
    }
    
    return (
        <div className={styles.wrapper}>
            <SafeArea />
            <span className={styles.title}>Web Login</span>
            <div className={styles.avatar}>ahhTou</div>
            <div className={styles.button}>Login</div>
            <div className={styles.space}></div>
            <span className={styles.version}>running on node v.{Versions.node()}</span>
        </div>
    )
}

const EntryElement = (
    <WindowLayout>
        <Login />
    </WindowLayout>
)

export { EntryElement }
