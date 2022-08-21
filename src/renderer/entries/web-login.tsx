// just test
import { Button } from 'antd'
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.css';

const app = document.getElementById('app')

if (app) {
    const root = createRoot(app)
    root.render(<WebLogin />)
}

function WebLogin() {
    return <div>
        <Button type="primary">Login</Button>
    </div>
}
