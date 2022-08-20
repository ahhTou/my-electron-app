import { app } from 'electron'
import LoginWindow from '@main/windows/login'

app.whenReady().then(() => {
    LoginWindow.create()
})
