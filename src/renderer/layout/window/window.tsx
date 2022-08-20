import '@renderer/assets/css/global.css'
import styles from './window.module.css'

interface WindowLayoutProps {
    children?: any
}

const safeAreaStyles: React.CSSProperties = {
    height: '42px',
}

export default function WindowLayout(props: WindowLayoutProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBar} style={safeAreaStyles}></div>
            {props.children}
        </div>
    )
}

function SafeArea() {
    return <div style={safeAreaStyles} />
}

export {
    SafeArea
}
