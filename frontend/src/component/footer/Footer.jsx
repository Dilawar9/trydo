import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const icons = [
    {
      id:1,
      icon: <FaFacebook />,
    },
    {
      id:2,
      icon: <FaTwitter />,

    },
    {
      id:3,
      icon: <FaLinkedin />,

    },
    {
      id:4,
      icon: <FaInstagram />,
    }
  ]

function Footer() {
  return (
    <div className='flex justify-between justify-items-center items-center'>
        <div className='text-white p-5'>
        <a href="https://rainbowit.net/themes/trydo/" title="Trydo" rel="home"> <img decoding="async" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png" alt="Trydo"/> </a>
        {/* <img width={300} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png" alt="Trydo"></img> */}
        </div>
        <div className='flex justify-between  justify-items-center'>
          {
            icons.map((item) => {
              return <div className='text-white p-3' key={item.id}>{item.icon}</div>
            })
          }
        </div>
        <div className='text-white p-5'>
        <p>© 2022. All rights reserved by <a href="#">Rainbow-Themes.</a></p>
        </div>

      </div>
  )
}

export default Footer;