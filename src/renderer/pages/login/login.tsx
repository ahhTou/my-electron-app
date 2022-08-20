import styles from './login.module.css'
import WindowLayout from '@r/layout/window/window'

export default function Login() {
    return (
        <div className={styles.wrapper}>
            <span>Zero Trust WorkSpace</span>
        </div>
    )
}

const EntryElement = (
    <WindowLayout>
        <Login />
    </WindowLayout>
)

export { EntryElement }
