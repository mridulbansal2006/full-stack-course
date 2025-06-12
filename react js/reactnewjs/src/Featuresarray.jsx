import Features from "./features";
import { AiFillAmazonCircle } from "react-icons/ai";

export const Featuresarray = () => {
    let arr = [
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        },
        {
            icons: 'icon1',
            para: "loremipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo",
            heading: 'We are alanding page'
        }

    ]
    return (
        <>
            {arr.map((element) => {
                return <Features para={element.para} heading={element.heading} icon={element.icon} />
            }

            )
            }

        </>
    )
}
