import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store/store';
import { CursorProvider } from 'react-cursor-custom'

const customTheme = {
  defaultProps: {},
  valid: {},
  styles: {}
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorProvider noRing={true} transitionTime={0.0000}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider value={customTheme} >
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </CursorProvider>
  </React.StrictMode>,
)
