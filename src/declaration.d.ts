declare interface URLModule {
    openUrl: () => void
}

declare interface LoginModule {
    receive: () => string
}


declare const LoginModuleAPI: LoginModule

declare const URLModuleAPI: URLModule

