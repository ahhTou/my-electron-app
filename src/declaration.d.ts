declare interface URLModule {
    openUrl: (url: string) => void
}

declare interface LoginModule {
    receive: () => string
}


declare const LoginModuleAPI: LoginModule

declare const URLModuleAPI: URLModule

