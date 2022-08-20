import { createRoot } from 'react-dom/client'
import App from "@renderer/pages/app/app"

const app = document.getElementById('app')

if (app) {
    const root = createRoot(app)
    root.render(App)
}
