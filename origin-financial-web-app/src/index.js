import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {ThemeProvider} from '@mui/system'
import {theme} from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ThemeProvider>,
)