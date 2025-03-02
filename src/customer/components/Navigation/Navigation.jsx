'use client'

import { Fragment, useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from '@mui/material/Avatar'
import { deepPurple } from '@mui/material/colors'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthModal from '../../Auth/AuthModel.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../../../State/Auth/Action.js";
import { logout } from '../../../State/Auth/Action.js';
import { toast } from 'react-toastify'

const navigation = {
  categories: [
    {
      id: 'search furniture',
      name: 'Search by Category',
      
      sections: [
        {
          id: 'furniture',
          name: 'Furniture',
          items: [
            { name: 'Sofas', href: '#' },
            { name: 'Chairs', href: '#' },
            { name: 'Tables', href: '#' },
            { name: 'Beds', href: '#' },
            { name: 'Cabinets', href: '#' },
            { name: 'Outdoor Furniture', href: '#' },
          ],
        },
        {
          id: 'decor',
          name: 'Decoration',
          items: [
            { name: 'Rugs', href: '#' },
            { name: 'Lamps', href: '#' },
            { name: 'Wall Art', href: '#' },
            { name: 'Mirrors', href: '#' },
            { name: 'Cushions', href: '#' },
            { name: 'Curtains', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Modern Home', href: '#' },
            { name: 'Rustic Charm', href: '#' },
            { name: 'Urban Living', href: '#' },
            { name: 'EcoStyle', href: '#' },
          ],
        },
      ],

    },
  ],
  pages: [
  ],
}

export default function Example() {
  /* React State */
  const [open, setOpen] = useState(false)

  const jwt = localStorage?.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const openUserMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  /* React Functions */
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  const handleCategoryClick = (category, section, item) => {
    navigate(`/${category.id}/${section.id}/${item.name}`);
  };

  useEffect(() => {
    if (jwt)
      dispatch(getUser(jwt));
  }, [jwt, auth?.jwt])

  useEffect(() => {
    if (auth?.user != null)
      handleClose();


  }, [auth?.user])


  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <p
                                onClick={() => {
                                  handleCategoryClick(category, section, item);
                                  close(); 
                                }}
                                className="cursor-pointer hover:text-gray-800"
                              >
                                {item.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#563232] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          LowTech GmbH
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Company</span>
                  <img
                    alt=""
                    src="https://lowtechgmbhstorage.blob.core.windows.net/lowtechgmbh-blob/Screenshot 2025-02-06 193950.png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => ( // Render-prop pattern to access 'close'
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Popover.Panel
                            transition
                            className="absolute inset-x-0 top-full text-sm text-gray-500"
                            style={{ zIndex: 10 }}
                          >
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                   
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flex">
                                              <p
                                                onClick={() => {
                                                  handleCategoryClick(category, section, item);
                                                  close(); // Close the popover
                                                }}
                                                className="cursor-pointer hover:text-gray-800"
                                              >
                                                {item.name}
                                              </p>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>


              <div className="ml-auto flex items-center">
                <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth?.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined} // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer"
                        }}>
                        { }
                      </Avatar>

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={() => { navigate('/account/order') }}>My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      {location.pathname === "/login" || location.pathname === "/" ? 'Sign in' : location.pathname === "/verify" ? 'Verify Email' : 'Sign Up'}
                    </Button>
                  )
                  }
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  {
                    jwt && auth?.user?.firstName?.[0]?.toUpperCase() &&
                    <a href="/cart" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div >
  )
}