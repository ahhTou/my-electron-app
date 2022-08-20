import '@r/assets/css/global.css'

import styles from './window.module.css'

interface WindowLayoutProps {
    children?: any
}

export default function WindowLayout(props: WindowLayoutProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBar}></div>
            {props.children}
        </div>
    )
}
