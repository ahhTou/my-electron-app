import '@/assets/css/global.css'
import Login from '@/pages/login'

import styles from "./app.module.css"

export function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBar}></div>
            <Login />
        </div>
    )
}

export default <App />
