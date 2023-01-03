

const LoginMainAPI: LoginModule = {
    receive: () => {
        return '123'
    },
}

const URLMainAPI: URLModule = {
    openUrl: (url: string) => {
        URLModuleAPI.openUrl(url)
    },
}

export { URLMainAPI, LoginMainAPI }
