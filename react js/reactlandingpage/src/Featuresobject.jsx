import { IoChatbubblesOutline } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiMagicWandFill } from "react-icons/pi";
import Features from "./Features";
import './features.css'

export const Featuresobject = () => {
    const firsticon = {
        icons: <IoChatbubblesOutline />,
        heading: 'Lorem ipsum',
        para: 'lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam'
    }
    const secondicon = {
        icons: <FaBullhorn />,
        heading: 'Lorem ipsum',
        para: 'lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam'
    }
    const thirdicon = {
        icons: <MdPeople />,
        heading: 'Lorem ipsum',
        para: 'lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam'
    }
    const fourthicon = {
        icons: <PiMagicWandFill />,
        heading: 'Lorem ipsum',
        para: 'lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam'
    }

    return (
        <>
        <div className="outerbox">
            <h1 className="features-title">Features</h1>
            <div className="featurescontainer">
                <Features icon={firsticon.icons} para={firsticon.para} heading={firsticon.heading} />
                <Features icon={secondicon.icons} para={secondicon.para} heading={secondicon.heading} />
                <Features icon={thirdicon.icons} para={thirdicon.para} heading={thirdicon.heading} />
                <Features icon={fourthicon.icons} para={fourthicon.para} heading={fourthicon.heading} />
            </div>
            </div>
        </>
    )
}
