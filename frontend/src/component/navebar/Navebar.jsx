import React from 'react'
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Button, Drawer } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect,useState } from 'react';

const Navebar = () => {
  const [theme, setTheme] = useState(false);
  const [open, setOpen] = useState(false);

  const NavItems = [
    {
      id: 1,
      title: "Home",
      section: "#home"
    },
    {
      id: 2,
      title: "Features",
      section: "#features"
    },
    {
      id: 3,
      title: "Portfolio",
      section: "#portfolio"
    },
    {
      id: 4,
      title: "Facts",
      section: "#facts"
    },
    {
      id: 5,
      title: "Our Team",
      section: "#team"
    },
    {
      id: 6,
      title: "Testimonials",
      section: "#testimonials"
    },
    {
      id: 7,
      title: "News",
      section: "#news"
    },
    {
      id: 8,
      title: "Clients",
      section: "#clients"
    },
  ]

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    if (theme == false) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    // save in local storage
    localStorage.setItem("darkMode", theme);

  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((theme) => !theme);
  };

  return (
    <>
     <Button type="primary" onClick={showDrawer} className='text-2xl mt-2 md:hidden'>
        <RxHamburgerMenu />
      </Button>
      <div className='flex justify-between'>
        <div className='text-white'>
        <img width={100} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png" alt="Trydo"></img>
        </div>
        <div className='hidden md:block'>
          {
            NavItems.map((item) => {
              return <a key={item.id} href={item.section} className='text-white p-3 px-5 hover:text-red-600 font-bold text-lg  inline-block'> {item.title} </a>
            })
          }
        </div>

      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md bg-gray-800 text-white"
      >
        {(theme == false) ? <FaMoon /> : <BsSunFill />}
      </button>

      <Drawer title="Navbar" onClose={onClose} open={open} placement='left' >
        <div>
          {
            NavItems.map((item) => {
              return <a key={item.id} href={item.section} className='text-black dark:text-white p-3 px-5 hover:text-red-600 font-bold text-lg block'> {item.title} </a>
            })
          }
        </div>
      </Drawer>
    </>
  )
}

export default Navebar;