import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const icons = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaTwitter />,

  },
  {
    id: 3,
    icon: <FaLinkedin />,

  },
  {
    id: 4,
    icon: <FaInstagram />,
  }
]

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-10'>
      
        <a href="https://rainbowit.net/themes/trydo/" title="Trydo" rel="home">
          <img decoding="async" width={150} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png" alt="Trydo" />
        </a>
      
      <div className='grid grid-cols-4  place-items-center gap-4' >
        {
          icons.map((item) => {
            return <div className='text-white p-5 border rounded-full hover:bg-red-700 hover:scale-110' key={item.id}>{item.icon}</div>
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