const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame:false,
        titleBarStyle: 'hidden',
        trafficLightPosition: { x: 14, y: 14 }
    })
    win.loadURL('http://localhost:9008/')
}
app.whenReady().then(() => {
    createWindow()
})
