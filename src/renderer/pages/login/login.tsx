import styles from './login.module.css'
import { WindowLayout, SafeArea } from '@renderer/layout/'
import { URLMainAPI } from '@renderer/api/main'
import { useState } from 'react'
import { Button } from 'antd'

export default function Login() {
    const [signing, setSigning] = useState(false)

    const openUrl = () => {
        URLMainAPI.openUrl('https://www.baidu.com')
        setSigning(true)
    }

    const handleSigning = () => {
        setSigning(false)
    }

    return (
        <div className={styles.wrapper}>
            <SafeArea />
            <span className={styles.title}>Web Login</span>
            <div className={styles.avatar}>ahhTou</div>
            <div className={styles.buttonBox}>
                <Button
                    size="large"
                    className={styles.button}
                    loading={signing}
                    onClick={openUrl}
                    type="primary"
                >
                    Login
                </Button>
                {signing && (
                    <span className={styles.cancel} onClick={handleSigning}>
                        cancel
                    </span>
                )}
            </div>
            <div className={styles.space}></div>
            <span className={styles.version}>
                running on node v.{Versions.node()}
            </span>
        </div>
    )
}

const EntryElement = (
    <WindowLayout>
        <Login />
    </WindowLayout>
)

export { EntryElement }
