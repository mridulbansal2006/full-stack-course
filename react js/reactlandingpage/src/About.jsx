import './About.css'
import { TiTick } from "react-icons/ti";

export const About = () => {
    return (
        <>
            <div id='mainbox'>
                <div className="aboutimage">
                </div>
                <div id='textbox'>
                    <h1 id='aboutus'>About us</h1>
                    <p id='aboutustextpara'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis<br /> nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat<br />. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        tempor<br /> incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div id='whychooseus'>
                        <h2 id='whychooseusheading'>why choose us?</h2>
                        <div id='fourtickdisplay'>
                            <div>
                                <p className='firstboxtexts'><TiTick className="tick-icon"/> Lorem ipsum dolor</p>
                                <p className='firstboxtexts'><TiTick className="tick-icon"/>Tempor incididunt</p>
                                <p className='firstboxtexts'><TiTick className="tick-icon"/>Lorem ipsum dolor</p>
                                <p className='firstboxtexts'><TiTick className="tick-icon"/>Incididunt ut labore</p>
                            </div>
                            <div>
                                <p className='secondboxtexts'><TiTick className="tick-icon"/>Aliquip ex ea commodo</p>
                                <p className='secondboxtexts'><TiTick className="tick-icon" />Exercitation ullamco</p>
                                <p className='secondboxtexts'><TiTick className="tick-icon"/> Lorem ipsum dolor</p>
                                <p className='secondboxtexts'><TiTick className="tick-icon"/>Lorem ipsum dolor</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
