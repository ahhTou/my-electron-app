import EVENT_NAMES from '@constant/event-names'
import { contextBridge, ipcRenderer } from 'electron'

const LoginModuleAPI: LoginModule = {
    receive() {
        return ''
    },
}

const URLModuleAPI: URLModule = {
    openUrl(url) {
        ipcRenderer.send(EVENT_NAMES.OPEN_URL, url)
    },
}

contextBridge.exposeInMainWorld('Versions', {
    node: () => {
        console.log(">>>> ", process)
        return process.versions.node
    }
})

contextBridge.exposeInMainWorld('LoginModuleAPI', LoginModuleAPI)
contextBridge.exposeInMainWorld('URLModuleAPI', URLModuleAPI)
