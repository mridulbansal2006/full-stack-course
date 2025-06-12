import { FaWordpress } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoMdCloudDownload } from "react-icons/io";
import { FaLanguage } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { Ourservice } from "./Ourservice";
import './Ourservice.css'
export const Ourservicearray = () => {
  const arr = [
    {
      heading: 'Lorem ipsum dolor',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <FaWordpress />
    },
    {
      heading: 'Consectetur adipiscing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <MdOutlineShoppingCartCheckout />

    },
    {
      heading: 'Lorem ipsum dolor',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <IoMdCloudDownload />

    },
    {
      heading: 'Consectetur adipiscing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <FaLanguage />


    },
    {
      heading: 'Lorem ipsum dolor',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <BiSolidPlaneAlt />

    },
    {
      heading: 'Consectetur adipiscing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.'
      , icon: <FaChartPie />

    }
  ]
  return (
    <div id='mainouterbox'>
      <h1 id='ourserviceheading'>Our Services</h1>
      <p id="ourserviceparatext">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
      <div className="boxes">
        {arr.map((element) => (
          <Ourservice icon={element.icon} heading={element.heading} para={element.paragraph} />

        ))}
      </div>
    </div>
  )
}
  
