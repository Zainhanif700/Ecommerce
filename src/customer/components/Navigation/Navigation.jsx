'use client'

import { Fragment, useEffect, useState } from 'react';
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
} from '@headlessui/react';

import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from '../../Auth/AuthModel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from "../../../State/Auth/Action.js";

export default function Example() {
  /* React State */
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const jwt = localStorage?.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const openUserMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  /* React Functions */
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

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [jwt, dispatch]);

  return (
    <div className="bg-white pb-10">
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
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <img
                    alt="Company Logo"
                    src="https://lowtechgmbhstorage.blob.core.windows.net/lowtechgmbh-blob/Screenshot 2025-02-06 193950.png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              <div className="ml-auto flex items-center">
                <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {loading ? (
                    <CircularProgress size={30} />
                  ) : auth?.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer"
                        }}>
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
                        <MenuItem onClick={() => navigate('/account/order')}>My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      {location.pathname === "/login" || location.pathname === "/" ? 'Sign in' : location.pathname === "/verify" ? 'Verify Email' : 'Sign Up'}
                    </Button>
                  )}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  {jwt && auth?.user?.firstName?.[0]?.toUpperCase() && (
                    <a href="/cart" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
