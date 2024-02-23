import { Fragment, useContext, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Context } from '../Firebase/AuthProvider'
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Our Services', href: '/services', current: false },
    { name: 'My Cart', href: '/cart', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Login', href: '/login', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavBar1 = () => {
    const {user,Logout} = useContext(Context)
    const [mode , setMode] =useState("light");
    function changeTheme () {
        const html = document.documentElement;

        if(mode == "light"){
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark"); 
            localStorage.setItem("mode","dark")   
        }else{
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode","light");   
        }
    }
    useEffect(()=>{
        const currentMode = localStorage.getItem("mode") || "light";
         setMode(currentMode);
         const html = document.documentElement;
         html.classList.add(currentMode)

    },[])
    const handleLogout= ()=>{
        Logout().then()
    }
    return (
        <div>
             <Disclosure as="nav" className="bg-[#075E54] px-0 md:px-8 py-2 md:py-8 border text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className=" h-14 lg:h-24 w-auto"
                    src="https://i.ibb.co/CP666Mh/edu-Events-Logo-modified.png"
                    alt="Your Company"
                  />
                </div>
                
              </div>
              <div className="hidden sm:ml-2 sm:block w-full mx-auto">
                  
                  <div className="flex space-x-4 items-center justify-center w-full mx-auto">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm md:text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
        
                  <button onClick={changeTheme} className="text-xl text-white p-1 border rounded-full bg-zinc-800">{mode == "dark"? <BsSun/>: <FaMoon/>}</button>


                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-1">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {user &&  <img className="rounded-full h-8 w-8" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/ggqWRmN/ezgif-com-gif-maker.jpg"} alt="" />}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-1 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        </div>
    );
};

export default NavBar1;