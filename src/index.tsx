import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as store from './stores/store'
import * as runtime from './packages/runtime'
import './i18n'

import './styles/index.css'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// 禁止右键点击菜单在 release 中的展示
function disableMenu() {
    if (window.location.hostname !== 'tauri.localhost') {
        return
    }
    document.addEventListener(
        'contextmenu',
        (e) => {
            e.preventDefault()
            return false
        },
        { capture: true },
    )
}
disableMenu()

()
