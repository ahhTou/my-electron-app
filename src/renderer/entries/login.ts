import { createRoot } from 'react-dom/client'
import { EntryElement } from "@r/pages/login"

const app = document.getElementById('app')

if (app) {
    const root = createRoot(app)
    root.render(EntryElement)
}
