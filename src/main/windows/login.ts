import { BrowserWindow } from 'electron'
import path from 'path'

const createLoginWindow = () => {
    const win = new BrowserWindow({
        width: 312,
        height: 452,
        titleBarStyle: 'hidden',
        backgroundColor: '#282c34',
        resizable: false,
        trafficLightPosition: { x: 14, y: 14 },
        fullscreenable: false, // 禁止全屏
        maximizable: false, // 禁止最大化
        webPreferences: {
            preload: path.join(__dirname, '../../../dist/preload.js'),
            // preload: path.join(__dirname, './preload.ts'),
        },
    })
    win.loadURL('http://localhost:9008/login.html')
}

export default {
    create: createLoginWindow,
}
