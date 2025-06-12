import { AiFillAmazonCircle } from "react-icons/ai";
import Features from './features.jsx'
export const Featuresobject = () => {
    const para1 = {
        icons: 'icon1',
        para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
        heading: 'We are alanding page'
    }
    const para2 = {
        icons: 'icon2',
        para: "loremipsum dolor sit amet,  leo",
        heading: 'We are alanding page'
    }
    const para3 = {
        icons: 'icon3',
        para: "loremipsum dolor sit amet, consectetur adipiscing elit. D",
        heading: 'We are alanding page'
    }
    const para4 = {
        icons: <AiFillAmazonCircle />,
        para: "loremipsum dolor sit  adipiscing elit. Duis sed dapibus leo",
        heading: 'We are alanding page'
    }
    return (
        <>
            <Features para={para3.para} heading={para2.icons} icon={para4.icons}/>
        </>
    )
}

export default Featuresobject

