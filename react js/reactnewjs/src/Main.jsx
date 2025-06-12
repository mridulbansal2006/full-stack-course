import { createRoot } from 'react-dom/client'
import Body from './body.jsx'
import Header from './header.jsx'
import './mainhtml.css'
import { Featuresarray } from './Featuresarray.jsx'
import { Colour } from './Colour.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Body />
    <Featuresarray/>
    <Colour/>
  </>
)

