import { contextBridge } from 'electron'

const LoginModuleAPI: LoginModule = {
    receive() {
        return ''
    },
}

contextBridge.exposeInMainWorld('Versions', {
    node: () => process.versions.node,
})

contextBridge.exposeInMainWorld('LoginModuleAPI', LoginModuleAPI);
contextBridge.exposeInMainWorld('URLModuleAPI', URLModuleAPI);
