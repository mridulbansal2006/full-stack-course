import { createRoot } from 'react-dom/client'
import Body from './body.jsx'
import Header from './header.jsx'
import { Featuresobject } from './Featuresobject.jsx'
import { About } from './about.jsx'
import { Ourservicearray } from './Ourservicearray.jsx'
const root = createRoot(document.getElementById('root'))
import { Gallery } from './gallery.jsx'
import { Whatour } from './whatour.jsx'
import { Meettheteam } from './meettheteam.jsx'
import { Form } from './form.jsx'
root.render(
  <>
    <Header />
    <Body />
    <Featuresobject />
    <About />
    <Ourservicearray/>
    <Gallery/>
    <Whatour/>
    <Meettheteam/>
    <Form/>
  </>
)



