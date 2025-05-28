import { createRoot } from 'react-dom/client'
import Body from './body.jsx'
import Header from './header.jsx'
import './mainhtml.css'
import Featuresdata from './featuresdata.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Body />
    <Featuresdata/>
  </>
)

