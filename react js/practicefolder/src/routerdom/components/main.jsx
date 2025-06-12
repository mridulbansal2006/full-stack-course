import  home  from "./home"
import { About } from "./About"
import { nav } from "./nav"
import { BrowserRouter ,Route,Routes} from "react-router-dom"
export const main = () => {
  return (
    <>
        <BrowserRouter>
        <nav></nav>
        <Routes>
            <Route path="/home" element={<home/>}/>
            <Route path="/About" element={<About/>}/>
                
        </Routes>
        </BrowserRouter>
    </>
  )
}
