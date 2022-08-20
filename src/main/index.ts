const { app, BrowserWindow } = require('electron')

const createLoginWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 450,
        titleBarStyle: 'hidden',
        backgroundColor: '#282c34',
        resizable: false,
        trafficLightPosition: { x: 14, y: 14 },
    })
    win.loadURL('http://localhost:9008/login.html')
}

app.whenReady().then(() => {
    createLoginWindow()
})
