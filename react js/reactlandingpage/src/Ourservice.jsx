
import './Ourservice.css'
export const Ourservice = ({icon,heading,para}) => {
  return (
    <>
    <div id='carddesign'>
    <button id='iconsdesign'>{icon}</button>
    <h2 id='headingdesign'>{heading}</h2>
    <p id='paradesign'>{para}</p>
    </div>
    </>
  )
}

