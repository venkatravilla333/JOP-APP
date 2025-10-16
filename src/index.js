

import App from "./App";
import {BrowserRouter} from 'react-router-dom'

import ReactDOM from 'react-dom/client'

var div = document.getElementById('root')

var root = ReactDOM.createRoot(div)

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)

