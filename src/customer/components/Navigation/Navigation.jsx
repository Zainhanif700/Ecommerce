'use client'

import { Fragment, useEffect, useState } from 'react';
import {
  Dialog, DialogBackdrop, DialogPanel, Popover, PopoverGroup, Tab, TabGroup,
  TabList, TabPanel, TabPanels
} from '@headlessui/react';

import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from '../../Auth/AuthModel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../../State/Auth/Action.js";
import { logout } from '../../../State/Auth/Action.js';
import { toast } from 'react-toastify';

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
      ],
    },
  ],
  pages: [],
};

export default function Navigation() {
  /* React State */
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const jwt = localStorage?.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* React Functions */
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if (auth?.user) {
      setOpenAuthModal(false); // Close modal when user logs in
    }
  }, [auth?.user]);

  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-[#563232] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        LowTech GmbH
      </p>

      <nav aria-label="Top" className="mx-auto">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center px-11">
            <button
              type="button"
              onClick={() => setOpenAuthModal(true)}
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

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

            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
              <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open, close }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-700 hover:text-gray-800",
                              "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>
                      </>
                    )}
                  </Popover>
                ))}
              </div>
            </PopoverGroup>

            <div className="ml-auto flex items-center">
              <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {auth?.user ? (
                  <div>
                    <Avatar
                      className="text-white"
                      sx={{
                        bgcolor: deepPurple[500],
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {auth?.user?.firstName?.[0]?.toUpperCase()}
                    </Avatar>
                    <Menu>
                      <MenuItem onClick={() => navigate('/account/order')}>My Orders</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign In
                  </Button>
                )}
              </div>

              <div className="ml-4 flow-root lg:ml-6">
                {jwt && auth?.user?.firstName && (
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon aria-hidden="true" className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </header>
  );
}
